import { Helmet } from 'react-helmet-async';
import CourseCard from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const sampleCourses = Array.from({ length: 12 }).map((_, i) => ({
  title: `Complete Course ${i+1} - Master the Fundamentals`,
  instructor: ["Max Schwarzmüller","Dr. Angela Yu","Jonas Schmedtmann","Sarah Johnson"][i % 4],
  thumbnail: `https://picsum.photos/seed/course-${i}/400/225`,
  rating: (i % 5) + 1,
  category: ["Web Development","Data Science","Programming","Marketing"][i % 4],
  status: (["available","enrolled","completed"] as const)[i % 3],
  description: "A comprehensive course designed to take you from beginner to expert with hands-on projects and real-world applications.",
  duration: `${(i % 20) + 15}h ${(i % 30) + 15}m`,
  students: (i + 1) * 5000 + 10000,
  price: `$${(i % 50) + 49}.99`
}));

const Courses = () => {
  return (
    <div>
      <Helmet>
        <title>Browse Courses | LearningPlatform</title>
        <meta name="description" content="Explore thousands of courses by title, instructor, or category. Filter by enrollment status and discover your next learning opportunity." />
        <link rel="canonical" href="/courses" />
      </Helmet>

      <section className="border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Browse Courses</h1>
          <p className="text-muted-foreground max-w-2xl">Use the search and filters to quickly find courses across categories, instructors, and topics.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search by course title, instructor, or topic" className="pl-10" />
              </div>
            </div>
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-background">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="data-science">Data Science</SelectItem>
                  <SelectItem value="programming">Programming</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-background">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="enrolled">Enrolled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="secondary">Filter</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCourses.map((course, idx) => (
              // pass the if later from db
              <CourseCard key={idx} id = {idx.toString()} {...course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
