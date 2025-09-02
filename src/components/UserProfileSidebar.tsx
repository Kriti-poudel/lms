import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Star, 
  Trophy, 
  Clock,
  CircleDollarSign,
  Sparkles,
  BookCheck
} from "lucide-react";

interface UserProfileSidebarProps {
  role?: 'learner' | 'teacher';
}

const UserProfileSidebar = ({ role = 'learner' }: UserProfileSidebarProps) => {
  // This would come from your auth context/API
  const learnerData = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    joinedDate: "August 2025",
    coursesEnrolled: 5,
    coursesCompleted: 3,
    hoursLearned: 45,
    certificatesEarned: 2,
    achievements: [
      { id: 1, title: "Quick Learner", description: "Completed first course in record time" },
      { id: 2, title: "Perfect Score", description: "100% on course assessment" }
    ],
    currentStreak: 7 // days
  };

  const teacherData = {
    name: "Dr. Sarah Chen",
    email: "sarah.chen@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    joinedDate: "June 2025",
    totalStudents: 1247,
    coursesCreated: 8,
    averageRating: 4.9,
    totalRevenue: 24890,
    totalReviews: 456,
    expertise: ["Data Science", "Machine Learning", "Python"],
    achievements: [
      { id: 1, title: "Top Rated Instructor", description: "Maintained 4.8+ rating" },
      { id: 2, title: "Content Expert", description: "Created 5+ highly rated courses" }
    ]
  };

  const data = role === 'teacher' ? teacherData : learnerData;

  return (
    <Card className="sticky top-4">
      <CardHeader className="text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={data.avatar} alt={data.name} />
          <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-medium">{data.name}</CardTitle>
        <p className="text-sm text-gray-500">{data.email}</p>
        <Badge className="mt-2" variant="outline">
          {role === 'teacher' ? 'Instructor' : 'Student'}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Role-specific stats */}
          {role === 'learner' ? (
            <>
              {/* Learner Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <BookOpen className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-2xl font-semibold">{learnerData.coursesEnrolled}</p>
                  <p className="text-xs text-gray-500">Enrolled</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <GraduationCap className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-2xl font-semibold">{learnerData.coursesCompleted}</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-2xl font-semibold">{learnerData.hoursLearned}</p>
                  <p className="text-xs text-gray-500">Hours</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Trophy className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-2xl font-semibold">{learnerData.certificatesEarned}</p>
                  <p className="text-xs text-gray-500">Certificates</p>
                </div>
              </div>

              {/* Learning Streak */}
              <div>
                <h3 className="text-sm font-medium mb-2">Current Streak</h3>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <Sparkles className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
                  <p className="text-2xl font-semibold">{learnerData.currentStreak} days</p>
                  <p className="text-xs text-gray-500">Keep it up!</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Teacher Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-2xl font-semibold">{teacherData.totalStudents}</p>
                  <p className="text-xs text-gray-500">Students</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <BookCheck className="w-5 h-5 mx-auto mb-1 text-primary" />
                  <p className="text-2xl font-semibold">{teacherData.coursesCreated}</p>
                  <p className="text-xs text-gray-500">Courses</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <Star className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
                  <p className="text-2xl font-semibold">{teacherData.averageRating}</p>
                  <p className="text-xs text-gray-500">Avg. Rating</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <CircleDollarSign className="w-5 h-5 mx-auto mb-1 text-green-500" />
                  <p className="text-2xl font-semibold">${Math.floor(teacherData.totalRevenue / 1000)}k</p>
                  <p className="text-xs text-gray-500">Revenue</p>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h3 className="text-sm font-medium mb-2">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {teacherData.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* Achievements */}
          <div>
            <h3 className="text-sm font-medium mb-2">Achievements</h3>
            <div className="space-y-2">
              {data.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <p className="font-medium text-sm">{achievement.title}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Account Actions */}
          <div className="pt-4">
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileSidebar;
