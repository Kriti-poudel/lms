import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

// Predefined categories and tags for courses
export const COURSE_CATEGORIES = [
  "Programming",
  "Data Science",
  "Web Development",
  "Mobile Development",
  "DevOps",
  "Design",
  "Business",
  "Marketing",
  "Language",
  "Music",
  "Health & Fitness",
  "Other"
] as const;

export const COURSE_DIFFICULTY = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "All Levels"
] as const;

interface CourseFormData {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  price: string;
  thumbnail: string;
  tags: string[];
  requirements: string[];
  learningObjectives: string[];
  duration: string;
  language: string;
}

interface CourseFormProps {
  initialData?: Partial<CourseFormData>;
  onSubmit: (data: CourseFormData) => void;
  isEditing?: boolean;
}

const CourseForm = ({ initialData, onSubmit, isEditing = false }: CourseFormProps) => {
  const [formData, setFormData] = useState<CourseFormData>({
    title: initialData?.title || "",
    description: initialData?.description || "",
    category: initialData?.category || "",
    difficulty: initialData?.difficulty || "All Levels",
    price: initialData?.price || "",
    thumbnail: initialData?.thumbnail || "",
    tags: initialData?.tags || [],
    requirements: initialData?.requirements || [],
    learningObjectives: initialData?.learningObjectives || [],
    duration: initialData?.duration || "",
    language: initialData?.language || "English"
  });

  const [newTag, setNewTag] = useState("");
  const [newRequirement, setNewRequirement] = useState("");
  const [newObjective, setNewObjective] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(newTag.trim())) {
        setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
      }
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addRequirement = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newRequirement.trim()) {
      e.preventDefault();
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement("");
    }
  };

  const addObjective = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newObjective.trim()) {
      e.preventDefault();
      setFormData(prev => ({
        ...prev,
        learningObjectives: [...prev.learningObjectives, newObjective.trim()]
      }));
      setNewObjective("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit Course" : "Create New Course"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Complete Web Development Bootcamp"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Course Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Provide a detailed description of your course..."
                className="min-h-[150px]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={value => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE_CATEGORIES.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <Select
                  value={formData.difficulty}
                  onValueChange={value => setFormData(prev => ({ ...prev, difficulty: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE_DIFFICULTY.map(level => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="e.g., 49.99"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={e => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  placeholder="e.g., 8 weeks"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input
                id="thumbnail"
                type="url"
                value={formData.thumbnail}
                onChange={e => setFormData(prev => ({ ...prev, thumbnail: e.target.value }))}
                placeholder="Enter image URL for course thumbnail"
                required
              />
            </div>
          </div>

          <Separator />

          {/* Tags */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Tags</h3>
            <div className="space-y-2">
              <Label htmlFor="tags">Add Tags</Label>
              <Input
                id="tags"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onKeyDown={addTag}
                placeholder="Type and press Enter to add tags"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map(tag => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Requirements */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Requirements</h3>
            <div className="space-y-2">
              <Label htmlFor="requirements">Add Requirement</Label>
              <Input
                id="requirements"
                value={newRequirement}
                onChange={e => setNewRequirement(e.target.value)}
                onKeyDown={addRequirement}
                placeholder="Type and press Enter to add requirement"
              />
              <ul className="list-disc list-inside space-y-2 mt-2">
                {formData.requirements.map((req, index) => (
                  <li key={index} className="text-sm">
                    {req}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          requirements: prev.requirements.filter((_, i) => i !== index)
                        }));
                      }}
                      className="ml-2 text-destructive hover:text-destructive/80"
                    >
                      <X className="h-3 w-3 inline" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator />

          {/* Learning Objectives */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Learning Objectives</h3>
            <div className="space-y-2">
              <Label htmlFor="objectives">Add Learning Objective</Label>
              <Input
                id="objectives"
                value={newObjective}
                onChange={e => setNewObjective(e.target.value)}
                onKeyDown={addObjective}
                placeholder="Type and press Enter to add learning objective"
              />
              <ul className="list-disc list-inside space-y-2 mt-2">
                {formData.learningObjectives.map((obj, index) => (
                  <li key={index} className="text-sm">
                    {obj}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          learningObjectives: prev.learningObjectives.filter((_, i) => i !== index)
                        }));
                      }}
                      className="ml-2 text-destructive hover:text-destructive/80"
                    >
                      <X className="h-3 w-3 inline" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button type="submit" size="lg">
          {isEditing ? "Update Course" : "Create Course"}
        </Button>
      </div>
    </form>
  );
};

export default CourseForm;
