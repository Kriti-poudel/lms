import { Book, Search, Clock, Users, BookmarkCheck, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find any book instantly with our advanced search system supporting title, author, ISBN, and keyword queries."
    },
    {
      icon: Book,
      title: "Digital Catalog",
      description: "Browse our extensive collection of 50,000+ books across all genres and subjects, updated daily."
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Access your digital library anytime, anywhere. Your books are always available when you need them."
    },
    {
      icon: BookmarkCheck,
      title: "Reading Progress",
      description: "Track your reading journey, set goals, and get personalized recommendations based on your interests."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow readers, join book clubs, and participate in discussions about your favorite books."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security. Focus on reading while we handle the rest."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive library management system provides all the tools you need for an exceptional reading experience
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