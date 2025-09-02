import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About | Learning Platform</title>
        <meta name="description" content="Learn about Learning Platform—our mission to make knowledge accessible with a modern, minimal library experience." />
        <link rel="canonical" href="/about" />
      </Helmet>

      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-display font-semibold mb-4">About Learning Platform</h1>
          <p className="text-primary-foreground/80 max-w-2xl">We believe learning thrives in calm, focused spaces. Learning Platform brings that experience online with a modern interface and thoughtful features designed for students and lifelong learners.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[{
            icon: BookOpen, title: 'Curated Collections', desc: 'We highlight high‑quality books and learning resources so you can focus on what matters.'
          },{
            icon: GraduationCap, title: 'Built for Learners', desc: 'Simple workflows for browsing, borrowing, and tracking your learning goals.'
          },{
            icon: Sparkles, title: 'Minimal by Design', desc: 'Clean, fast, and accessible—no clutter, just what you need.'
          }].map((f, i) => (
            <Card key={i} className="border-0 bg-gradient-card hover:shadow-soft transition-transform hover:-translate-y-1">
              <CardContent className="p-8">
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;