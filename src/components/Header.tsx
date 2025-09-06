import { Play, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // After adding backnd
  let isLoggedIn = true;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center space-x-2" to={"/"}>
          <Play className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            {/* Kya matlab i don't know how to name things */}
            LearningPlatform
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses, instructors, topics..."
              className="pl-10 bg-muted/50 border-0 focus:bg-background transition-smooth"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>Home</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>Courses</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>About</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive && isLoggedIn ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>Dashboard</NavLink>
          {
            isLoggedIn ??
            (
              <NavLink to="/register">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </NavLink>
            )
          }
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {
            isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />
          }
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur h-screen">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search courses..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" end className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground hover:text-primary py-2 transition-smooth"}>Home</NavLink>
              <NavLink to="/courses" className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground hover:text-primary py-2 transition-smooth"}>Courses</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-medium py-2" : "text-foreground hover:text-primary py-2 transition-smooth"}>About</NavLink>
              <NavLink to="/dashboard" className={({ isActive }) => isActive && isLoggedIn ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>Dashboard</NavLink>
              {
                isLoggedIn ??
                (
                  <NavLink to="/register">
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </NavLink>
                )
              }
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;