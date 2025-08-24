import { Button } from "@/components/ui/button";
import { Search, BookOpen, Users, Clock } from "lucide-react";
import libraryHero from "@/assets/library-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={libraryHero} 
          alt="Modern library interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block text-accent-warm">Great Read</span>
          </h1>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Access thousands of books, manage your reading journey, and connect with a community of book lovers. Your digital library awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-accent-warm hover:bg-accent-warm/90 text-accent-foreground shadow-glow transition-bounce">
              <Search className="h-5 w-5 mr-2" />
              Browse Catalog
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth">
              <BookOpen className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="text-white/90">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-accent-warm" />
              </div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm">Books Available</div>
            </div>
            <div className="text-white/90">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent-warm" />
              </div>
              <div className="text-2xl font-bold text-white">5K+</div>
              <div className="text-sm">Active Readers</div>
            </div>
            <div className="text-white/90">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-accent-warm" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm">Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;