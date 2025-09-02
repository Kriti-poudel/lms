import { Button } from "@/components/ui/button";
import { Search, Play, Users, Clock } from "lucide-react";
import libraryHero from "@/assets/library-hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={libraryHero}
          alt="Modern learning environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master New Skills
            <span className="block text-accent-warm">With Expert Courses</span>
          </h1>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Access thousands of online courses, learn from industry experts, and advance your career with our comprehensive learning platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/courses" className=" flex justify-center align-center bg-accent-warm p-2 rounded-md hover:bg-accent-warm/90 text-accent-foreground shadow-glow " >
              <Search size={24} />
              Explore Courses
            </Link>
            <Button variant="secondary" size="lg" className="text-primary-foreground transition-smooth bg-neutral-500">
              <Play className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="text-white/90">
              <div className="flex items-center justify-center mb-2">
                <Play className="h-6 w-6 text-accent-warm" />
              </div>
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm">Courses Available</div>
            </div>
            <div className="text-white/90">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent-warm" />
              </div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm">Active Learners</div>
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