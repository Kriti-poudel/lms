// Mock courses data and this should be deleted and use actial api/ backend db to fetch courses

// Some course link might say "Course Not Found" cuz it's not added in this mock data so that
// should be fixed when connected to actual backend :)
export const courses = [
  {
    id: "web-development-basics-1756809991388",
    title: "Web Development Basics",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Perfect for beginners starting their journey in web development.",
    instructor: {
      name: "John Smith",
      avatar: "/instructors/john-smith.jpg",
      bio: "Senior Web Developer with 10+ years of experience",
      rating: 4.8,
      students: 1500
    },
    category: "Web Development",
    level: "Beginner",
    duration: "10 weeks",
    totalHours: 30,
    rating: 4.7,
    totalRatings: 245,
    enrolledStudents: 1500,
    price: "$79",
    lastUpdated: "2025-08-28",
    language: "English",
    certificate: true,
    progress: 60,
    status: "active",
    thumbnail: "/courses/web-dev-basics.jpg",
    modules: [
      {
        id: 1,
        title: "HTML Fundamentals",
        description: "Learn the basics of HTML structure and elements",
        duration: "3 hours",
        lessons: 5,
        completed: 3,
        materials: [
          { id: 1, title: "Introduction to HTML", type: "video", duration: "20 min", completed: true },
          { id: 2, title: "HTML Elements & Tags", type: "video", duration: "25 min", completed: true },
          { id: 3, title: "HTML Forms", type: "video", duration: "30 min", completed: true },
          { id: 4, title: "HTML5 Features", type: "video", duration: "25 min", completed: false },
          { id: 5, title: "HTML Quiz", type: "quiz", duration: "15 min", completed: false }
        ]
      }
      // onece more once more
    ]
  },
  {
    id: "complete-react-developer-course-2024-1756810625310",
    title: "Complete React Developer Course 2024",
    description: "Master modern React development with Hooks, Redux, Context API, and best practices. Build real-world applications from scratch.",
    instructor: {
      name: "David Wilson",
      avatar: "/instructors/david-wilson.jpg",
      bio: "Lead React Developer with 8+ years of experience in building enterprise applications",
      rating: 4.9,
      students: 2500
    },
    category: "Web Development",
    level: "Intermediate",
    duration: "12 weeks",
    totalHours: 42,
    rating: 4.9,
    totalRatings: 380,
    enrolledStudents: 2500,
    price: "$89.99",
    lastUpdated: "2025-09-01",
    language: "English",
    certificate: true,
    progress: 0,
    status: "active",
    thumbnail: "/courses/react-dev-course.jpg",
    modules: [
      {
        id: 1,
        title: "React Fundamentals",
        description: "Core concepts and modern React features",
        duration: "6 hours",
        lessons: 8,
        completed: 0,
        materials: [
          { id: 1, title: "Introduction to React", type: "video", duration: "30 min", completed: false },
          { id: 2, title: "Components & Props", type: "video", duration: "45 min", completed: false },
          { id: 3, title: "State & Hooks", type: "video", duration: "50 min", completed: false },
          { id: 4, title: "Event Handling", type: "video", duration: "40 min", completed: false },
          { id: 5, title: "Component Lifecycle", type: "video", duration: "45 min", completed: false },
          { id: 6, title: "React Hooks Deep Dive", type: "video", duration: "60 min", completed: false },
          { id: 7, title: "Practice Project", type: "project", duration: "90 min", completed: false },
          { id: 8, title: "Module Quiz", type: "quiz", duration: "20 min", completed: false }
        ]
      },
      {
        id: 2,
        title: "Advanced React Patterns",
        description: "Learn advanced patterns and best practices",
        duration: "8 hours",
        lessons: 6,
        completed: 0,
        materials: [
          { id: 9, title: "Higher Order Components", type: "video", duration: "45 min", completed: false },
          { id: 10, title: "Render Props Pattern", type: "video", duration: "40 min", completed: false },
          { id: 11, title: "Context API & Providers", type: "video", duration: "50 min", completed: false },
          { id: 12, title: "Custom Hooks", type: "video", duration: "55 min", completed: false },
          { id: 13, title: "Advanced Project", type: "project", duration: "120 min", completed: false },
          { id: 14, title: "Pattern Quiz", type: "quiz", duration: "30 min", completed: false }
        ]
      },
      {
        id: 3,
        title: "State Management with Redux",
        description: "Master Redux and state management",
        duration: "10 hours",
        lessons: 7,
        completed: 0,
        materials: [
          { id: 15, title: "Redux Basics", type: "video", duration: "45 min", completed: false },
          { id: 16, title: "Actions & Reducers", type: "video", duration: "50 min", completed: false },
          { id: 17, title: "Redux Middleware", type: "video", duration: "55 min", completed: false },
          { id: 18, title: "Redux Toolkit", type: "video", duration: "60 min", completed: false },
          { id: 19, title: "Async Actions", type: "video", duration: "50 min", completed: false },
          { id: 20, title: "Redux Project", type: "project", duration: "180 min", completed: false },
          { id: 21, title: "Redux Quiz", type: "quiz", duration: "30 min", completed: false }
        ]
      }
    ]
  },
  {
    id: "digital-marketing-masterclass-1756809991389",
    title: "Digital Marketing Masterclass",
    description: "Master digital marketing strategies including SEO, social media marketing, and content marketing. Learn to create effective online marketing campaigns.",
    instructor: {
      name: "Emily Chen",
      avatar: "/instructors/emily-chen.jpg",
      bio: "Digital Marketing Expert with extensive industry experience",
      rating: 4.9,
      students: 2000
    },
    category: "Marketing",
    level: "Intermediate",
    duration: "12 weeks",
    totalHours: 36,
    rating: 4.8,
    totalRatings: 320,
    enrolledStudents: 2000,
    price: "$89",
    lastUpdated: "2025-08-25",
    language: "English",
    certificate: true,
    progress: 45,
    status: "active",
    thumbnail: "/courses/digital-marketing.jpg",
    modules: [
      {
        id: 1,
        title: "SEO Fundamentals",
        description: "Learn the basics of Search Engine Optimization",
        duration: "4 hours",
        lessons: 6,
        completed: 2,
        materials: [
          { id: 1, title: "Introduction to SEO", type: "video", duration: "25 min", completed: true },
          { id: 2, title: "Keyword Research", type: "video", duration: "30 min", completed: true },
          { id: 3, title: "On-Page SEO", type: "video", duration: "35 min", completed: false },
          { id: 4, title: "Off-Page SEO", type: "video", duration: "30 min", completed: false },
          { id: 5, title: "Technical SEO", type: "video", duration: "40 min", completed: false },
          { id: 6, title: "SEO Quiz", type: "quiz", duration: "20 min", completed: false }
        ]
      }
      // Add more modules as needed
    ]
  }
  // Add more courses as needed
];

export const getCourseById = (courseId: string) => {
  // First try exact match
  let course = courses.find(course => course.id === courseId);
  
  if (!course) {
    // Try matching without timestamp
    const baseId = courseId.replace(/-\d+$/, '');
    course = courses.find(course => course.id.startsWith(baseId));
  }
  
  if (!course) {
    // Try matching by converting title to URL format
    course = courses.find(course => {
      const urlTitle = course.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return courseId.startsWith(urlTitle);
    });
  }
  
  return course;
};

export const getAllCourses = () => {
  return courses;
};
