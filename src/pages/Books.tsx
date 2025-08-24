import { Helmet } from 'react-helmet-async';
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const sampleBooks = Array.from({ length: 12 }).map((_, i) => ({
  title: `Sample Book Title ${i+1}`,
  author: ["Jane Austen","Mark Twain","Alex Chen","Emma Thompson"][i % 4],
  cover: `https://picsum.photos/seed/library-${i}/400/600`,
  rating: (i % 5) + 1,
  genre: ["Fiction","Technology","Business","Science"][i % 4],
  status: (["available","borrowed","reserved"] as const)[i % 3],
  description: "A short description about this book to give context and entice readers to explore more."
}));

const Books = () => {
  return (
    <div>
      <Helmet>
        <title>Browse Books | LibraryDesk</title>
        <meta name="description" content="Explore thousands of books by title, author, or genre. Filter by availability and discover your next great read." />
        <link rel="canonical" href="/books" />
      </Helmet>

      <section className="border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Browse Catalog</h1>
          <p className="text-muted-foreground max-w-2xl">Use the search and filters to quickly find books across genres, authors, and topics.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search by title, author, or ISBN" className="pl-10" />
              </div>
            </div>
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-background">
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="fiction">Fiction</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-background">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="borrowed">Borrowed</SelectItem>
                  <SelectItem value="reserved">Reserved</SelectItem>
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
            {sampleBooks.map((b, idx) => (
              <BookCard key={idx} {...b} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;