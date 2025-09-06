import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedCourses = () => {
  // Sample course data
  const featuredCourses = [
    {
      title: "Complete React Developer Course 2024",
      instructor: "Max nigesh",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "Web Development",
      status: "available" as const,
      description: "Learn React from scratch with hands-on projects. Build real-world applications and master modern React patterns.",
      duration: "42h 30m",
      students: 125000,
      price: "$89.99"
    },
    {
      title: "Python for Data Science and Machine Learning",
      instructor: "Dr. Angela davidsom",
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      category: "Data Science",
      status: "enrolled" as const,
      description: "Master Python programming and apply it to data science, machine learning, and AI projects.",
      duration: "38h 15m",
      students: 89000,
      price: "$94.99"
    },
    {
      title: "Digital Marketing Masterclass",
      instructor: "Diddy",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      category: "Marketing",
      status: "available" as const,
      description: "Learn digital marketing strategies that drive real results. From SEO to social media marketing.",
      duration: "25h 45m",
      students: 67000,
      price: "$79.99"
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Mehta sahab",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "Design",
      status: "completed" as const,
      description: "Master the principles of user interface and user experience design with practical projects.",
      duration: "31h 20m",
      students: 45000,
      price: "$84.99"
    },
    {
      title: "Complete JavaScript Course 2024",
      instructor: "Jethlal Gada",
      thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      category: "Programming",
      status: "available" as const,
      description: "From fundamentals to advanced concepts, learn JavaScript and become a confident developer.",
      duration: "48h 10m",
      students: 156000,
      price: "$99.99"
    },
    {
      title: "Business Strategy & Entrepreneurship",
      instructor: "Roshan Singh Sodi",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      category: "Business",
      status: "available" as const,
      description: "Learn how to start, grow, and scale your business with proven strategies and frameworks.",
      duration: "22h 35m",
      students: 78000,
      price: "$74.99"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and highly-rated courses from industry experts across various fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center">

          {/* meh ^_*  */}
          <Link to="/courses">
          <Button  size="lg" variant="outline" className="group">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
