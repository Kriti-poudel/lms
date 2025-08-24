import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
  Share2
} from "lucide-react";

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock course data
  const course = {
    id: 1,
    title: "Introduction to Data Science",
    description: "A comprehensive introduction to data science fundamentals, covering statistics, programming, and machine learning concepts. Perfect for beginners looking to enter the field of data science.",
    instructor: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Senior Data Scientist with 8+ years of experience in machine learning and statistical analysis. PhD in Computer Science from Stanford University.",
      rating: 4.9,
      students: 1247
    },
    category: "Technology",
    level: "Beginner",
    duration: "8 weeks",
    totalHours: 24,
    rating: 4.8,
    totalRatings: 156,
    enrolledStudents: 1247,
    price: "$99",
    lastUpdated: "3 days ago",
    language: "English",
    certificate: true,
    progress: 75,
    status: "active"
  };

  const modules = [
    {
      id: 1,
      title: "Introduction to Data Science",
      description: "Overview of the field and career opportunities",
      duration: "2 hours",
      lessons: 4,
      completed: 4,
      materials: [
        { id: 1, title: "What is Data Science?", type: "video", duration: "15 min", completed: true },
        { id: 2, title: "Data Science Career Paths", type: "video", duration: "20 min", completed: true },
        { id: 3, title: "Tools and Technologies", type: "video", duration: "25 min", completed: true },
        { id: 4, title: "Introduction Quiz", type: "quiz", duration: "10 min", completed: true }
      ]
    },
    {
      id: 2,
      title: "Statistical Foundations",
      description: "Core statistical concepts and probability theory",
      duration: "4 hours",
      lessons: 6,
      completed: 4,
      materials: [
        { id: 5, title: "Basic Statistics", type: "video", duration: "30 min", completed: true },
        { id: 6, title: "Probability Theory", type: "video", duration: "35 min", completed: true },
        { id: 7, title: "Statistical Distributions", type: "video", duration: "40 min", completed: true },
        { id: 8, title: "Hypothesis Testing", type: "video", duration: "45 min", completed: true },
        { id: 9, title: "Practice Problems", type: "exercise", duration: "60 min", completed: false },
        { id: 10, title: "Statistics Quiz", type: "quiz", duration: "15 min", completed: false }
      ]
    },
    {
      id: 3,
      title: "Programming Fundamentals",
      description: "Python programming for data science",
      duration: "6 hours",
      lessons: 8,
      completed: 2,
      materials: [
        { id: 11, title: "Python Basics", type: "video", duration: "45 min", completed: true },
        { id: 12, title: "Data Structures", type: "video", duration: "50 min", completed: true },
        { id: 13, title: "Pandas Library", type: "video", duration: "55 min", completed: false },
        { id: 14, title: "NumPy Arrays", type: "video", duration: "40 min", completed: false },
        { id: 15, title: "Data Visualization", type: "video", duration: "60 min", completed: false },
        { id: 16, title: "Coding Exercises", type: "exercise", duration: "90 min", completed: false },
        { id: 17, title: "Project: Data Analysis", type: "project", duration: "120 min", completed: false },
        { id: 18, title: "Programming Quiz", type: "quiz", duration: "20 min", completed: false }
      ]
    }
  ];

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
        <title>{course.title} | LibraryDesk</title>
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
                  {modules.reduce((acc, module) => acc + module.completed, 0)} of {modules.reduce((acc, module) => acc + module.lessons, 0)} lessons completed
                </div>
              </div>

              <div className="space-y-4">
                {modules.map((module, moduleIndex) => (
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
                        <p className="text-2xl font-bold text-primary">{modules.reduce((acc, module) => acc + module.completed, 0)}</p>
                        <p className="text-sm text-muted-foreground">Lessons Completed</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">{Math.round((modules.reduce((acc, module) => acc + module.completed, 0) / modules.reduce((acc, module) => acc + module.lessons, 0)) * 100)}%</p>
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
                    {modules.map((module) => (
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
    </div>
  );
};

export default CourseDetail;
