import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookmarkPlus, ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  rating: number;
  genre: string;
  status: "available" | "borrowed" | "reserved";
  description: string;
}

const BookCard = ({ title, author, cover, rating, genre, status, description }: BookCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-secondary-accent text-secondary-foreground";
      case "borrowed": return "bg-destructive text-destructive-foreground";
      case "reserved": return "bg-accent-warm text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 overflow-hidden">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={cover} 
          alt={`${title} cover`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <Badge className={`absolute top-3 right-3 ${getStatusColor(status)} shadow-soft`}>
          {status}
        </Badge>
        <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90 text-foreground">
          {genre}
        </Badge>
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
        
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
        <p className="text-secondary-accent font-medium mb-3">{author}</p>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 gap-2">
        <Button 
          className="flex-1" 
          variant={status === "available" ? "default" : "outline"}
          disabled={status === "borrowed"}
        >
          {status === "available" && "Borrow Now"}
          {status === "borrowed" && "Not Available"}
          {status === "reserved" && "Join Waitlist"}
        </Button>
        <Button variant="ghost" size="icon" className="shrink-0">
          <BookmarkPlus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="shrink-0">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;