import { Button } from "@/components/ui/button";
import { Search, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh] flex justify-center items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      {/* Content */}
      <div className="mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-center text-gray-900 dark:text-gray-100">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Unlock Your Potential <br />
            <span className="text-primary block mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
              Master New Skills with Experts
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl mb-10 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Join thousands of learners worldwide. Explore in-depth courses, gain
            industry insights, and level up your career with our expert-led
            learning platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <Button
              onClick={() => navigate("/register")}
              size="lg"
              className="px-6 py-5 text-lg font-medium shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 transition-all rounded-2xl"
            >
              <Search className="h-5 w-5 mr-2" />
              Get Started Free
            </Button>

            <Button
              onClick={() => navigate("/courses")}
              variant="secondary"
              size="lg"
              className="px-6 py-5 text-lg font-medium border border-gray-400 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all rounded-2xl"
            >
              <Play className="h-5 w-5 mr-2" />
              Browse Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
