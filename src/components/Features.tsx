import { Play, Search, Clock, Users, BookmarkCheck, Shield, Award, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Course Discovery",
      description: "Find the perfect course with our advanced search system supporting course title, instructor, category, and skill level queries."
    },
    {
      icon: Video,
      title: "High-Quality Video Content",
      description: "Learn from expert instructors with HD video lessons, interactive exercises, and downloadable resources."
    },
    {
      icon: Clock,
      title: "Learn at Your Own Pace",
      description: "Access your courses anytime, anywhere. Learn at your own speed with lifetime access to purchased courses."
    },
    {
      icon: BookmarkCheck,
      title: "Progress Tracking",
      description: "Track your learning journey, set goals, and get personalized course recommendations based on your interests."
    },
    {
      icon: Users,
      title: "Learning Community",
      description: "Connect with fellow learners, join study groups, and participate in discussions about your courses."
    },
    {
      icon: Award,
      title: "Certificates & Recognition",
      description: "Earn certificates upon completion and showcase your new skills to advance your career."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Everything You Need to Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive learning platform provides all the tools you need for an exceptional educational experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;