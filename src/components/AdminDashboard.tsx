import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  UserPlus,
  GraduationCap,
  Library,
  Activity,
  Shield,
  Database
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock admin data
  const adminStats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalCourses: 45,
    activeCourses: 38,
    totalMaterials: 156,
    systemHealth: 98,
    storageUsed: "2.4 GB",
    storageLimit: "10 GB"
  };

  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@librarydesk.com",
      role: "Student",
      status: "active",
      joinDate: "Sep 2024",
      lastActive: "2 hours ago",
      coursesEnrolled: 3
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      email: "sarah.chen@librarydesk.com",
      role: "Instructor",
      status: "active",
      joinDate: "Aug 2024",
      lastActive: "1 day ago",
      coursesCreated: 2
    },
    {
      id: 3,
      name: "Prof. Michael Brown",
      email: "michael.brown@librarydesk.com",
      role: "Instructor",
      status: "active",
      joinDate: "Jul 2024",
      lastActive: "3 days ago",
      coursesCreated: 1
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Introduction to Data Science",
      instructor: "Dr. Sarah Chen",
      status: "active",
      students: 156,
      materials: 12,
      rating: 4.8,
      lastUpdated: "3 days ago"
    },
    {
      id: 2,
      title: "Advanced Literature Analysis",
      instructor: "Prof. Michael Brown",
      status: "active",
      students: 89,
      materials: 8,
      rating: 4.6,
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      title: "Digital Library Management",
      instructor: "Dr. Emily Davis",
      status: "draft",
      students: 0,
      materials: 15,
      rating: 0,
      lastUpdated: "2 weeks ago"
    }
  ];

  const materials = [
    {
      id: 1,
      title: "Data Science Fundamentals PDF",
      type: "PDF",
      size: "2.4 MB",
      course: "Introduction to Data Science",
      uploader: "Dr. Sarah Chen",
      downloads: 156,
      lastUpdated: "3 days ago"
    },
    {
      id: 2,
      title: "Literature Analysis Video Lecture",
      type: "Video",
      size: "45.2 MB",
      course: "Advanced Literature Analysis",
      uploader: "Prof. Michael Brown",
      downloads: 89,
      lastUpdated: "1 week ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-r from-red-500/5 to-red-600/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-3 bg-red-100 rounded-lg">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">System administration and user management</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="destructive">Administrator</Badge>
                  <span className="text-sm text-muted-foreground">System Access Level</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Stats Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">{adminStats.totalUsers}</p>
                    <p className="text-xs text-green-600">+{adminStats.activeUsers} active</p>
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
                    <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                    <p className="text-2xl font-bold">{adminStats.totalCourses}</p>
                    <p className="text-xs text-green-600">+{adminStats.activeCourses} active</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Materials</p>
                    <p className="text-2xl font-bold">{adminStats.totalMaterials}</p>
                    <p className="text-xs text-blue-600">+12 this week</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Database className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Storage</p>
                    <p className="text-2xl font-bold">{adminStats.storageUsed}</p>
                    <p className="text-xs text-muted-foreground">of {adminStats.storageLimit}</p>
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
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* System Health */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5" />
                      <span>System Health</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Overall Health</span>
                        <span className="font-medium text-green-600">{adminStats.systemHealth}%</span>
                      </div>
                      <Progress value={adminStats.systemHealth} className="h-2" />
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-green-600">98%</p>
                          <p className="text-sm text-muted-foreground">Uptime</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-blue-600">2.4 GB</p>
                          <p className="text-sm text-muted-foreground">Storage Used</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

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
                        <span className="text-sm">New user registration: Alex Johnson</span>
                        <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Course "Data Science" updated</span>
                        <span className="text-xs text-muted-foreground ml-auto">1 day ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">System backup completed</span>
                        <span className="text-xs text-muted-foreground ml-auto">2 days ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">User Management</h2>
                <div className="flex space-x-2">
                  <Input placeholder="Search users..." className="w-64" />
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="instructor">Instructor</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {users.map((user) => (
                  <Card key={user.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&seed=${user.id}`} alt={user.name} />
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                              <span>{user.role}</span>
                              <span>Joined {user.joinDate}</span>
                              <span>Last active {user.lastActive}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Course Management</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Course
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <CardDescription className="text-sm">by {course.instructor}</CardDescription>
                        </div>
                        <Badge variant={course.status === 'active' ? 'default' : 'secondary'}>
                          {course.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{course.materials} materials</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">Rating: {course.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{course.lastUpdated}</span>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
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
                <h2 className="text-2xl font-bold">Material Management</h2>
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
                              <span>by {material.uploader}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{material.lastUpdated}</span>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* System Tab */}
            <TabsContent value="system" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* System Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="h-5 w-5" />
                      <span>System Settings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Maintenance Mode</span>
                        <Button variant="outline" size="sm">Disabled</Button>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">User Registration</span>
                        <Button variant="outline" size="sm">Enabled</Button>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Auto Backup</span>
                        <Button variant="outline" size="sm">Daily</Button>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Email Notifications</span>
                        <Button variant="outline" size="sm">Enabled</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Storage Management */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Database className="h-5 w-5" />
                      <span>Storage Management</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Storage Usage</span>
                          <span>{adminStats.storageUsed} / {adminStats.storageLimit}</span>
                        </div>
                        <Progress value={(2.4 / 10) * 100} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">24%</p>
                          <p className="text-sm text-muted-foreground">Used</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600">7.6 GB</p>
                          <p className="text-sm text-muted-foreground">Available</p>
                        </div>
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

export default AdminDashboard;
