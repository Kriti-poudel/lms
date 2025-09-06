import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookmarkPlus, Play, Clock, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  rating: number;
  category: string;
  status: "enrolled" | "available" | "completed";
  description: string;
  duration: string;
  students: number;
  price: string;
}

const CourseCard = ({ id, title, instructor, thumbnail, rating, category, status, description, duration, students, price }: CourseCardProps) => {
  const navigate = useNavigate();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-secondary-accent text-secondary-foreground";
      case "enrolled": return "bg-primary text-primary-foreground";
      case "completed": return "bg-accent-warm text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={`${title} thumbnail`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Play className="h-6 w-6 text-white fill-current" />
          </div>
        </div>
        <Badge className={`absolute top-3 right-3 ${getStatusColor(status)} shadow-soft`}>
          {status === "enrolled" && "Enrolled"}
          {status === "available" && "Available"}
          {status === "completed" && "Completed"}
        </Badge>
        <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90 text-foreground">
          {category}
        </Badge>
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {duration}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'text-accent-warm fill-current' : 'text-muted-foreground'}`} 
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({rating}/5)</span>
        </div>
        
        <Link to={`/courses/${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`} className="block">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-secondary-accent font-medium mb-3">{instructor}</p>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-3">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {students.toLocaleString()} students
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 gap-2">
        <Button 
          className="flex-1" 
          variant={status === "available" ? "default" : "outline"}
          disabled={status === "completed"}
          onClick={() => navigate(`/courses/${id}`)}
        >
          {status === "available" && `Enroll Now - ${price}`}
          {status === "enrolled" && "Continue Learning"}
          {status === "completed" && "Course Completed"}
        </Button>
        <Button variant="ghost" size="icon" className="shrink-0">
          <BookmarkPlus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Play className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
