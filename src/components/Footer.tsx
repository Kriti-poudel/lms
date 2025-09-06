import { Book, Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-accent-warm" />
            <span className="text-lg font-semibold">Learning Platform</span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-5 text-sm text-primary-foreground/80">
            <li><a href="/browse" className="hover:text-accent-warm">Browse</a></li>
            <li><a href="/categories" className="hover:text-accent-warm">Categories</a></li>
            <li><a href="/courses" className="hover:text-accent-warm">Courses</a></li>
            <li><a href="/about" className="hover:text-accent-warm">About</a></li>
            <li><a href="/contact" className="hover:text-accent-warm">Contact</a></li>
          </ul>

          {/* Socials */}
          <div className="flex space-x-3">
            <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-accent-warm">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-accent-warm">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-accent-warm">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-center text-xs text-primary-foreground/60">
          <p>© 2024 Learning Platform. Built with ❤️ for learners.</p>
          <div className="flex justify-center gap-4 mt-2 text-xs">
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> info@learning.com</span>
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
