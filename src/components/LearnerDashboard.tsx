import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LearnerDashboard = () => {
  const enrolledCourses = [
    { id: 1, title: "Web Development Basics", progress: 60, lastAccessed: "2025-08-29" },
    { id: 2, title: "Python Programming", progress: 30, lastAccessed: "2025-08-28" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-6">My Learning Dashboard</h1>
      
      <div className="grid gap-6">
        <section>
          <h2 className="text-xl mb-4">Continue Learning</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map(course => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-2 rounded-full">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {course.progress}% complete
                    </p>
                    <p className="text-sm text-gray-600">
                      Last accessed: {course.lastAccessed}
                    </p>
                    <Button className="w-full mt-2">Continue Learning</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl mb-4">Recommended Courses</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Science Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Learn the basics of data analysis and visualization
                </p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl mb-4">My Certificates</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">JavaScript Basics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Completed on August 15, 2025
                </p>
                <Button variant="outline" className="w-full">View Certificate</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnerDashboard;
