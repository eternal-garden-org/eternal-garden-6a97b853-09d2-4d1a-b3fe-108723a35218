import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialMediaProps {
  className?: string;
}

export function MemorialMedia({ className }: MemorialMediaProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-10">
        <Typography.H2 className="text-white text-[40px] font-bold">
          Медиафайлы
        </Typography.H2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="aspect-video rounded-lg overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Видео памяти 1"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="aspect-video rounded-lg overflow-hidden bg-black">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Видео памяти 2"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}