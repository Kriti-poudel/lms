import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import CourseForm from "./CourseForm";
import { 
  Users, 
  Star, 
  Eye,
  Edit,
  Trash2,
  BarChart2,
  Plus
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  price: string;
  students: number;
  revenue: number;
  rating: number;
  tags: string[];
  status: "draft" | "published";
  lastUpdated: string;
  totalLessons: number;
  difficulty: string;
  duration: string;
}

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showNewCourseDialog, setShowNewCourseDialog] = useState(false);
  const [showEditCourseDialog, setShowEditCourseDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const [courses, setCourses] = useState<Course[]>([
    { 
      id: 1, 
      title: "Web Development Basics", 
      description: "Learn the fundamentals of web development",
      category: "Web Development",
      thumbnail: "https://example.com/thumbnail1.jpg",
      price: "49.99",
      students: 45,
      revenue: 2250,
      rating: 4.5,
      tags: ["HTML", "CSS", "JavaScript"],
      status: "published",
      lastUpdated: "2025-08-30",
      totalLessons: 24,
      difficulty: "Beginner",
      duration: "8 weeks"
    },
    { 
      id: 2, 
      title: "Advanced JavaScript", 
      description: "Master advanced JavaScript concepts",
      category: "Programming",
      thumbnail: "https://example.com/thumbnail2.jpg",
      price: "79.99",
      students: 30,
      revenue: 1500,
      rating: 4.8,
      tags: ["JavaScript", "ES6", "Node.js"],
      status: "published",
      lastUpdated: "2025-08-25",
      totalLessons: 32,
      difficulty: "Advanced",
      duration: "10 weeks"
    }
  ]);

  const handleCreateCourse = (courseData: any) => {
    // In a real app, this would be an API call
    const newCourse = {
      ...courseData,
      id: Date.now(),
      students: 0,
      revenue: 0,
      rating: 0,
      status: "draft",
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    setCourses(prev => [...prev, newCourse]);
    setShowNewCourseDialog(false);
    toast({
      title: "Course created successfully",
      description: "Your new course has been created as a draft.",
    });
  };

  const handleUpdateCourse = (courseData: any) => {
    if (!selectedCourse) return;

    // In a real app, this would be an API call
    setCourses(prev => prev.map(course => 
      course.id === selectedCourse.id 
        ? { ...course, ...courseData, lastUpdated: new Date().toISOString().split('T')[0] }
        : course
    ));

    setShowEditCourseDialog(false);
    setSelectedCourse(null);
    toast({
      title: "Course updated successfully",
      description: "Your course changes have been saved.",
    });
  };

  const handleDeleteCourse = () => {
    if (!selectedCourse) return;

    // this shpuld be an api call
    setCourses(prev => prev.filter(course => course.id !== selectedCourse.id));
    setShowDeleteDialog(false);
    setSelectedCourse(null);
    toast({
      title: "Course deleted",
      description: "The course has been permanently deleted.",
      variant: "destructive",
    });
  };

  const totalStudents = courses.reduce((acc, course) => acc + course.students, 0);
  const totalRevenue = courses.reduce((acc, course) => acc + course.revenue, 0);
  const averageRating = courses.reduce((acc, course) => acc + course.rating, 0) / courses.length;

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Manage your courses and track performance</p>
        </div>
        <Button onClick={() => setShowNewCourseDialog(true)}>
          <Plus className="mr-2 h-4 w-4" /> Create New Course
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Course List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <Card key={course.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{course.category}</span> • 
                  <span>{course.difficulty}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Students</p>
                      <p className="font-medium">{course.students}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Revenue</p>
                      <p className="font-medium">${course.revenue}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rating</p>
                      <p className="font-medium">{course.rating}/5.0</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Lessons</p>
                      <p className="font-medium">{course.totalLessons}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {course.tags.map(tag => (
                      <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <div className="p-4 border-t flex justify-between items-center">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSelectedCourse(course);
                      setShowEditCourseDialog(true);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate(`/courses/${course.id}/manage`)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate(`/courses/${course.id}/analytics`)}
                  >
                    <BarChart2 className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => {
                    setSelectedCourse(course);
                    setShowDeleteDialog(true);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Create Course Dialog */}
      <Dialog open={showNewCourseDialog} onOpenChange={setShowNewCourseDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Course</DialogTitle>
          </DialogHeader>
          <CourseForm onSubmit={handleCreateCourse} />
        </DialogContent>
      </Dialog>

      {/* Edit Course Dialog */}
      <Dialog open={showEditCourseDialog} onOpenChange={setShowEditCourseDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Course</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <CourseForm 
              initialData={selectedCourse}
              onSubmit={handleUpdateCourse}
              isEditing={true}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the course "{selectedCourse?.title}". 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteCourse}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete Course
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TeacherDashboard;
