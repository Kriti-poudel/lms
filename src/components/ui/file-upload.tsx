import { ChangeEvent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB ofc
  label?: string;
  currentFile?: string;
}

export function FileUpload({
  onFileSelect,
  accept = "image/*",
  maxSize = 5, // Default 5MB
  label = "Upload File",
  currentFile
}: FileUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentFile || null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);

    if (!file) return;

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Create preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }

    onFileSelect(file);
  };

  return (
    <div className="space-y-4">
      <Label>{label}</Label>
      
      <Card className="border-dashed">
        <CardContent className="pt-6 space-y-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-3 bg-primary/10 rounded-full">
              <UploadCloud className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Drag and drop your file here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground">
                Maximum file size: {maxSize}MB
              </p>
            </div>
            <Input
              type="file"
              accept={accept}
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
              Select File
            </Button>
          </div>

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          {preview && accept.startsWith('image/') && (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
