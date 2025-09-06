import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Curated Collections",
      desc: "We share resources that matter, so you spend less time searching and more time learning.",
    },
    {
      icon: GraduationCap,
      title: "Made for Learners",
      desc: "Browse, save, and track progress with simple tools that don’t get in your way.",
    },
    {
      icon: Sparkles,
      title: "Minimal Approach",
      desc: "Clean and fast design—nothing extra, just what helps you learn.",
    },
  ];

  return (
    <div className="h-screen overflow-x-hidden">
      <Helmet>
        <title>About | Learning Platform</title>
        <meta
          name="description"
          content="Learn about Learning Platform—our mission to make knowledge accessible in a simple, minimal way."
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      {/* Intro */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Learning Platform
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Learning Platform is built for people who want a calm space to
            learn. No clutter, no noise just useful tools and quality
            resources.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card
              key={i}
              className="border bg-white dark:bg-gray-800 hover:shadow-md transition"
            >
              <CardContent className="p-6">
                <f.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {f.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
