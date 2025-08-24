import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedBooks = () => {
  // Sample book data
  const featuredBooks = [
    {
      title: "The Psychology of Learning",
      author: "Dr. Sarah Johnson",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      genre: "Psychology",
      status: "available" as const,
      description: "An comprehensive guide to understanding how we learn and retain information, with practical applications for students and educators."
    },
    {
      title: "Modern Web Development",
      author: "Alex Chen",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      genre: "Technology",
      status: "borrowed" as const,
      description: "Master the latest web technologies including React, TypeScript, and modern deployment strategies."
    },
    {
      title: "Digital Marketing Essentials",
      author: "Maria Rodriguez",
      cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      genre: "Business",
      status: "available" as const,
      description: "Learn how to build effective digital marketing campaigns that convert visitors into customers."
    },
    {
      title: "Data Science Fundamentals",
      author: "Dr. Michael Park",
      cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      genre: "Data Science",
      status: "reserved" as const,
      description: "From basic statistics to machine learning, this book covers everything you need to start your data science journey."
    },
    {
      title: "Creative Writing Workshop",
      author: "Emma Thompson",
      cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      genre: "Literature",
      status: "available" as const,
      description: "Unlock your creative potential with exercises and techniques used by professional writers."
    },
    {
      title: "Sustainable Living Guide",
      author: "Green Earth Collective",
      cover: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      genre: "Lifestyle",
      status: "available" as const,
      description: "Practical tips and strategies for reducing your environmental impact while maintaining a fulfilling lifestyle."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Featured Books
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the most popular and highly-rated books across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Books
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;