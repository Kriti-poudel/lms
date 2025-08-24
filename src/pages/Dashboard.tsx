import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Users, 
  FileText, 
  Calendar, 
  Clock, 
  Star, 
  Download, 
  Eye,
  Plus,
  Edit,
  Trash2,
  Settings,
  User,
  GraduationCap,
  Library,
  BarChart3,
  ArrowRight
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  // Mock data for demonstration
  const userProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@librarydesk.com",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    joinDate: "September 2024",
    totalBooks: 24,
    activeLoans: 3,
    completedCourses: 8
  };

  const courses = [
    {
      id: 1,
      title: "Introduction to Data Science",
      instructor: "Dr. Sarah Chen",
      progress: 75,
      status: "active",
      materials: 12,
      duration: "8 weeks",
      rating: 4.8,
      lastAccessed: "2 hours ago"
    },
    {
      id: 2,
      title: "Advanced Literature Analysis",
      instructor: "Prof. Michael Brown",
      progress: 45,
      status: "active",
      materials: 8,
      duration: "6 weeks",
      rating: 4.6,
      lastAccessed: "1 day ago"
    },
    {
      id: 3,
      title: "Digital Library Management",
      instructor: "Dr. Emily Davis",
      progress: 100,
      status: "completed",
      materials: 15,
      duration: "10 weeks",
      rating: 4.9,
      lastAccessed: "1 week ago"
    }
  ];

  const materials = [
    {
      id: 1,
      title: "Data Science Fundamentals PDF",
      type: "PDF",
      size: "2.4 MB",
      course: "Introduction to Data Science",
      downloads: 156,
      lastUpdated: "3 days ago"
    },
    {
      id: 2,
      title: "Literature Analysis Video Lecture",
      type: "Video",
      size: "45.2 MB",
      course: "Advanced Literature Analysis",
      downloads: 89,
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      title: "Library Management Case Studies",
      type: "PDF",
      size: "1.8 MB",
      course: "Digital Library Management",
      downloads: 203,
      lastUpdated: "2 weeks ago"
    }
  ];

  const stats = {
    totalCourses: 12,
    completedCourses: 8,
    totalMaterials: 45,
    totalStudyTime: "127 hours",
    averageRating: 4.7,
    certificates: 6
  };

  const handleCourseClick = (courseId: number) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dashboard | LibraryDesk</title>
        <meta name="description" content="Manage your courses, materials, and learning progress on LibraryDesk." />
      </Helmet>

      {/* Header Section */}
      <section className="border-b bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Avatar className="h-16 w-16">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="text-lg">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                <p className="text-muted-foreground">{userProfile.email}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary">{userProfile.role}</Badge>
                  <span className="text-sm text-muted-foreground">Member since {userProfile.joinDate}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Course
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                    <p className="text-2xl font-bold">{stats.totalCourses}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold">{stats.completedCourses}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Materials</p>
                    <p className="text-2xl font-bold">{stats.totalMaterials}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Study Time</p>
                    <p className="text-2xl font-bold">{stats.totalStudyTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Completed "Digital Library Management" course</span>
                        <span className="text-xs text-muted-foreground ml-auto">2 days ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Downloaded 3 new materials</span>
                        <span className="text-xs text-muted-foreground ml-auto">1 week ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Started "Data Science" course</span>
                        <span className="text-xs text-muted-foreground ml-auto">2 weeks ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Progress Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Progress</CardTitle>
                    <CardDescription>Your overall completion rate</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Progress</span>
                          <span>{Math.round((stats.completedCourses / stats.totalCourses) * 100)}%</span>
                        </div>
                        <Progress value={(stats.completedCourses / stats.totalCourses) * 100} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-primary">{stats.averageRating}</p>
                          <p className="text-sm text-muted-foreground">Average Rating</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600">{stats.certificates}</p>
                          <p className="text-sm text-muted-foreground">Certificates</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My Courses</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Enroll in Course
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleCourseClick(course.id)}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <CardDescription className="text-sm">by {course.instructor}</CardDescription>
                        </div>
                        <Badge variant={course.status === 'completed' ? 'default' : 'secondary'}>
                          {course.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{course.materials} materials</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{course.lastAccessed}</span>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Materials
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Materials Tab */}
            <TabsContent value="materials" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Learning Materials</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Material
                </Button>
              </div>

              <div className="space-y-4">
                {materials.map((material) => (
                  <Card key={material.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{material.title}</h3>
                            <p className="text-sm text-muted-foreground">{material.course}</p>
                            <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                              <span>{material.type}</span>
                              <span>{material.size}</span>
                              <span>{material.downloads} downloads</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{material.lastUpdated}</span>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Personal Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                        <p className="font-medium">{userProfile.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="font-medium">{userProfile.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Role</label>
                        <p className="font-medium">{userProfile.role}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                        <p className="font-medium">{userProfile.joinDate}</p>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Learning Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Library className="h-5 w-5" />
                      <span>Learning Statistics</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Books Read</span>
                        <span className="font-medium">{userProfile.totalBooks}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Active Loans</span>
                        <span className="font-medium">{userProfile.activeLoans}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Completed Courses</span>
                        <span className="font-medium">{userProfile.completedCourses}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Study Time</span>
                        <span className="font-medium">{stats.totalStudyTime}</span>
                      </div>
                    </div>
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

export default Dashboard;
