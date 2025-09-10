import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialHeaderProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  className?: string;
}

export function MemorialHeader({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  className,
}: MemorialHeaderProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const age = differenceInYears(deathDay, birthDay);

  return (
    <div
      className={cn(
        "w-full relative overflow-hidden",
        className,
      )}
      style={{
        backgroundImage: `url("http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474627837_bg_image_3.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 min-h-[480px]">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-full lg:w-[480px] h-[480px] overflow-hidden rounded-lg">
              <Image
                src={photoUrl}
                alt={`Фото ${fullName}`}
                fill
                className="object-cover"
                sizes="480px"
                priority
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 flex flex-col justify-between text-left">
            <div className="space-y-6">
              {/* Name */}
              <Typography.H1 
                className="text-white font-bold text-[40px] leading-tight"
                style={{ margin: 0 }}
              >
                {fullName}
              </Typography.H1>

              {/* Age badge */}
              <div className="mt-10">
                <span 
                  className="inline-block px-4 py-2 text-[16px] font-light"
                  style={{ 
                    backgroundColor: '#F6B95A', 
                    borderRadius: '50px',
                    color: '#1F1F1F'
                  }}
                >
                  {age} лет жизни
                </span>
              </div>

              {/* Dates */}
              <div className="flex items-baseline gap-4 mt-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-[#8B8B8B] font-light text-[20px]">{birthDayMonth}</span>
                  <span className="text-white font-bold text-[20px] ml-1">{birthYear}</span>
                </div>
                <span className="text-white text-[20px] font-bold">–</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-bold text-[20px]">{deathYear}</span>
                  <span className="text-[#8B8B8B] font-light text-[20px] ml-1">{deathDayMonth}</span>
                </div>
              </div>
            </div>

            {/* Location blocks */}
            <div className="space-y-4 mt-8">
              {/* Birth place */}
              <div className="space-y-1">
                <div className="flex items-center text-[#8B8B8B] text-[14px]">
                  <MapPin size={16} className="text-[#8B8B8B] mr-2" />
                  Место рождения
                </div>
                <Typography.P className="text-white text-[20px] font-bold" style={{ margin: 0 }}>
                  {birthPlace}
                </Typography.P>
              </div>

              {/* Death place */}
              <div className="space-y-1">
                <div className="flex items-center text-[#8B8B8B] text-[14px]">
                  <MapPin size={16} className="text-[#8B8B8B] mr-2" />
                  Место смерти
                </div>
                <Typography.P className="text-white text-[20px] font-bold" style={{ margin: 0 }}>
                  {deathPlace}
                </Typography.P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}