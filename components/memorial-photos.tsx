"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialPhotosProps {
  className?: string;
}

// Photos from the memorial data
const photosData = [
  {
    id: "1",
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474612890_main_image_3.png",
    alt: "Главное фото",
  },
  {
    id: "2", 
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474650869_photo_3_1.png",
    alt: "Фотография из жизни",
  },
  {
    id: "3",
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474661759_photo_3_2.png", 
    alt: "Фотография из жизни 2",
  },
  {
    id: "4",
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474671075_photo_3_3.png",
    alt: "Фотография из жизни",
  },
  {
    id: "5", 
    url: "http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474680742_photo_3_4.png",
    alt: "Фотографи из жизни",
  }
];

export function MemorialPhotos({ className }: MemorialPhotosProps) {
  const [selectedPhoto, setSelectedPhoto] = useState(photosData[0]);

  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-10">
        <Typography.H2 className="text-white text-[40px] font-bold">
          Фотографии
        </Typography.H2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        {/* Photo menu - vertical list */}
        <div className="flex lg:flex-col gap-4 order-2 lg:order-1">
          {photosData.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={cn(
                "relative w-20 h-20 rounded-md overflow-hidden transition-all duration-200 flex-shrink-0",
                selectedPhoto.id === photo.id
                  ? "opacity-100 ring-2 ring-[#F6B95A]"
                  : "opacity-50 hover:opacity-75"
              )}
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Main photo */}
        <div className="relative w-full max-w-[600px] aspect-square rounded-lg overflow-hidden order-1 lg:order-2">
          <Image
            src={selectedPhoto.url}
            alt={selectedPhoto.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 600px"
            priority
          />
        </div>
      </div>
    </div>
  );
}