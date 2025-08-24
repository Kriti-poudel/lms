import { Book, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-accent-warm" />
              <span className="text-2xl font-bold">LibraryDesk</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your digital gateway to knowledge and learning. Discover, borrow, and manage your reading journey with ease.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent-warm hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent-warm hover:bg-primary-foreground/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent-warm hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/browse" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Browse Books</a></li>
              <li><a href="/categories" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Categories</a></li>
              <li><a href="/new-arrivals" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">New Arrivals</a></li>
              <li><a href="/popular" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Popular Books</a></li>
              <li><a href="/my-account" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">My Account</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="/digital-lending" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Digital Lending</a></li>
              <li><a href="/book-reservations" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Book Reservations</a></li>
              <li><a href="/reading-lists" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Reading Lists</a></li>
              <li><a href="/research-help" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Research Help</a></li>
              <li><a href="/mobile-app" className="text-primary-foreground/80 hover:text-accent-warm transition-smooth">Mobile App</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent-warm" />
                <span className="text-sm">info@librarydesk.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent-warm" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent-warm" />
                <span className="text-sm">123 Library St, Reading City</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-primary-foreground/80 mb-3">Subscribe for book recommendations</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm" className="bg-accent-warm hover:bg-accent-warm/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 LibraryDesk. All rights reserved. Built with ❤️ for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;