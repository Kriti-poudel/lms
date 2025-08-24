import { Book, Search, User, Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            LibraryDesk
          </span>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search books, authors, ISBN..."
              className="pl-10 bg-muted/50 border-0 focus:bg-background transition-smooth"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>Home</NavLink>
          <NavLink to="/books" className={({isActive}) => isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>Books</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>About</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-smooth"}>Dashboard</NavLink>
          <NavLink to="/admin" className={({isActive}) => isActive ? "text-red-600 font-medium" : "text-foreground hover:text-red-600 transition-smooth"}>
            <Shield className="h-4 w-4 mr-1 inline" />
            Admin
          </NavLink>
          <NavLink to="/auth">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search books..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" end className={({isActive}) => isActive ? "text-primary font-medium py-2" : "text-foreground hover:text-primary py-2 transition-smooth"}>Home</NavLink>
              <NavLink to="/books" className={({isActive}) => isActive ? "text-primary font-medium py-2" : "text-foreground hover:text-primary py-2 transition-smooth"}>Books</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-primary font-medium py-2" : "text-foreground hover:text-primary py-2 transition-smooth"}>About</NavLink>
              <NavLink to="/dashboard" className={({isActive}) => isActive ? "text-primary font-medium py-2" : "text-foreground hover:text-primary py-2 transition-smooth"}>Dashboard</NavLink>
              <NavLink to="/admin" className={({isActive}) => isActive ? "text-red-600 font-medium py-2" : "text-foreground hover:text-red-600 py-2 transition-smooth"}>
                <Shield className="h-4 w-4 mr-2 inline" />
                Admin
              </NavLink>
              <NavLink to="/auth" className="mt-2">
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;