import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCourseById } from "@/lib/api/courses";
import { FileUpload } from "@/components/ui/file-upload";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  FileText, 
  Video, 
  Clock, 
  Star, 
  Download, 
  Eye,
  Play,
  Users,
  Calendar,
  Award,
  CheckCircle,
  Circle,
  ArrowRight,
  Bookmark,
  Share2,
  MessageSquare
} from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState(() => {
    if (!courseId) return null;
    const found = getCourseById(courseId);
    return found || null;
  });

  // Fetch course effect
  useEffect(() => {
    if (!courseId) {
      setIsLoading(false);
      return;
    }

    // Simulate API call delay for smoother loading state
    const timeoutId = setTimeout(() => {
      const found = getCourseById(courseId);
      setCourse(found);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [courseId]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
              <p className="text-muted-foreground">Loading course...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Not found state
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6 text-center">
            <h1 className="text-xl font-semibold mb-2">Course Not Found</h1>
            <p className="text-muted-foreground mb-4">The course you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/courses')}>
              Return to Courses
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

    const fileInputRef = useRef<HTMLInputElement>(null);

  const handleThumbnailUpload = (file: File) => {
    // In a real application, you would upload this file to your server
    // and get back a URL. For now, we'll create a local URL
    const imageUrl = URL.createObjectURL(file);
    setCourse(prev => prev ? {
      ...prev,
      thumbnail: imageUrl
    } : null);

    toast({
      title: "Thumbnail updated",
      description: "The course thumbnail has been successfully updated.",
    });
  };

  const materials = [
    {
      id: 1,
      title: "Data Science Fundamentals PDF",
      type: "PDF",
      size: "2.4 MB",
      downloads: 156,
      lastUpdated: "3 days ago"
    },
    {
      id: 2,
      title: "Python Code Examples",
      type: "ZIP",
      size: "1.8 MB",
      downloads: 89,
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      title: "Statistical Formulas Reference",
      type: "PDF",
      size: "0.9 MB",
      downloads: 203,
      lastUpdated: "2 weeks ago"
    },
    {
      id: 4,
      title: "Data Science Project Templates",
      type: "ZIP",
      size: "3.2 MB",
      downloads: 67,
      lastUpdated: "3 weeks ago"
    }
  ];

  const reviews = [
    {
      id: 1,
      user: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent course! Dr. Chen explains complex concepts in a very clear way. The practical exercises really help solidify the learning."
    },
    {
      id: 2,
      user: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      date: "1 week ago",
      comment: "Great introduction to data science. The course structure is well-organized and the instructor is very knowledgeable."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{course.title} | Learning Platform</title>
        <meta name="description" content={course.description} />
      </Helmet>

      {/* Course Header */}
      <section className="border-b bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
                <Badge variant="outline">{course.language}</Badge>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="mb-6">
                <FileUpload
                  onFileSelect={handleThumbnailUpload}
                  accept="image/*"
                  maxSize={2}
                  label="Course Thumbnail"
                  currentFile={course.thumbnail}
                />
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration} • {course.totalHours} hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{course.enrolledStudents} students enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating} ({course.totalRatings} ratings)</span>
                </div>
              </div>
            </div>

            {/* Course Actions */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold text-primary">{course.price}</p>
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Play className="h-4 w-4 mr-2" />
                      Continue Learning
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Add to Wishlist
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Course
                    </Button>
                  </div>

                  <Separator className="my-4" />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Course includes:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{course.totalHours} hours on-demand video</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Full lifetime access</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Certificate of completion</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                  <AvatarFallback className="text-lg">{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{course.instructor.name}</h3>
                  <p className="text-muted-foreground mb-3">{course.instructor.bio}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.instructor.rating} Instructor Rating</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span>{course.instructor.students} Students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4 text-green-600" />
                      <span>2 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Course Content</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>

            {/* Course Content Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <div className="text-sm text-muted-foreground">
                  {course.modules.reduce((acc, module) => acc + module.completed, 0)} of {course.modules.reduce((acc, module) => acc + module.lessons, 0)} lessons completed
                </div>
              </div>

              <div className="space-y-4">
                {course.modules.map((module, moduleIndex) => (
                  <Card key={module.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">Module {moduleIndex + 1}: {module.title}</CardTitle>
                            <CardDescription>{module.description}</CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">{module.duration}</div>
                          <div className="text-sm font-medium">{module.completed}/{module.lessons} lessons</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {module.materials.map((material) => (
                          <div key={material.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                            <div className="flex items-center space-x-3">
                              {material.type === 'video' && <Video className="h-4 w-4 text-blue-600" />}
                              {material.type === 'quiz' && <FileText className="h-4 w-4 text-green-600" />}
                              {material.type === 'exercise' && <FileText className="h-4 w-4 text-orange-600" />}
                              {material.type === 'project' && <FileText className="h-4 w-4 text-purple-600" />}
                              
                              <div>
                                <div className="font-medium">{material.title}</div>
                                <div className="text-sm text-muted-foreground">{material.duration}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {material.completed ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : (
                                <Circle className="h-5 w-5 text-muted-foreground" />
                              )}
                              <Button variant="ghost" size="sm">
                                <Play className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Materials Tab */}
            <TabsContent value="materials" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Course Materials</h2>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.map((material) => (
                  <Card key={material.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{material.title}</CardTitle>
                          <CardDescription>{material.type} • {material.size}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{material.downloads} downloads</span>
                        <span>{material.lastUpdated}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Student Reviews</h2>
                <Button>
                  <Star className="h-4 w-4 mr-2" />
                  Write Review
                </Button>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.user} />
                          <AvatarFallback>{review.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{review.user}</h3>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Overall Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                    <CardDescription>Track your learning journey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Overall Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-3" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">{course.modules.reduce((acc, module) => acc + module.completed, 0)}</p>
                        <p className="text-sm text-muted-foreground">Lessons Completed</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">{Math.round((course.modules.reduce((acc, module) => acc + module.completed, 0) / course.modules.reduce((acc, module) => acc + module.lessons, 0)) * 100)}%</p>
                        <p className="text-sm text-muted-foreground">Completion Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Module Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Module Progress</CardTitle>
                    <CardDescription>Breakdown by module</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {course.modules.map((module) => (
                      <div key={module.id} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{module.title}</span>
                          <span>{Math.round((module.completed / module.lessons) * 100)}%</span>
                        </div>
                        <Progress value={(module.completed / module.lessons) * 100} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enrollment Dialog */}
      <Dialog open={showEnrollDialog} onOpenChange={setShowEnrollDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enroll in {course.title}</DialogTitle>
            <DialogDescription>
              You're about to enroll in this course. Once enrolled, you'll have immediate access to all course materials.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Course Price:</span>
              <span className="text-2xl font-bold text-primary">{course.price}</span>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">What you'll get:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Full lifetime access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{course.totalHours} hours of content</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Direct instructor support</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Button 
                className="flex-1" 
                onClick={() => {
                  setIsEnrolled(true);
                  setShowEnrollDialog(false);
                  toast({
                    title: "Successfully enrolled!",
                    description: "You now have access to all course materials.",
                  });
                }}
              >
                Confirm Enrollment
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowEnrollDialog(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Preview Dialog */}
      {selectedLesson !== null && (
        <Dialog 
          open={selectedLesson !== null} 
          onOpenChange={() => setSelectedLesson(null)}
        >
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>
                {course.modules.flatMap(m => m.materials).find(m => m.id === selectedLesson)?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video bg-gray-950 rounded-lg flex items-center justify-center">
              {!isEnrolled ? (
                <div className="text-center p-8">
                  <Play className="h-12 w-12 text-white/50 mx-auto mb-4" />
                  <p className="text-white/80">Preview not available. Please enroll to watch this lesson.</p>
                  <Button 
                    className="mt-4"
                    onClick={() => {
                      setSelectedLesson(null);
                      setShowEnrollDialog(true);
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              ) : (
                <div className="text-center p-8">
                  <Play className="h-16 w-16 text-white mx-auto animate-pulse" />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

// Helper function to handle lesson clicks
const handleLessonClick = (
  lessonId: number, 
  isEnrolled: boolean, 
  setSelectedLesson: (id: number | null) => void,
  setShowEnrollDialog: (show: boolean) => void
) => {
  if (isEnrolled) {
    setSelectedLesson(lessonId);
  } else {
    setShowEnrollDialog(true);
  }
};

export default CourseDetail;
