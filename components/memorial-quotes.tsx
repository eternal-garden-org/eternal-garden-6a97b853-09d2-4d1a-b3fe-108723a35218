"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { Typography } from "@/components/ui/typography";

interface MemorialQuotesProps {
  className?: string;
}

const quotes = [
  {
    text: "Ты по жизни нас вел, ты себя не жалел, ты так рано ушел, ты так много успел. И не верит никто, что тебя рядом нет, что ушел в небытье. Сын, муж, дед, отец — ЧЕЛОВЕК!",
    author: "Цитата Александра",
  },
  {
    text: "Отец не просто дал мне жизнь — он показал, как наполнить её смыслом. Его мудрые советы и личный пример научили меня тому, что ценность жизни определяется не количеством прожитых лет, а тем, сколько добра ты успел сделать за это время.",
    author: "Воспоминания дочери",
  },
  {
    text: "Дедушка всегда говорил мне: 'София, мечтай смело, как будто неудачи не существует.' Благодаря ему я поверила в свои силы. Даже сейчас, когда его нет рядом, я слышу его голос, поддерживающий меня в трудную минуту.",
    author: "Слова внучки",
  },
  {
    text: "Александр Викторович был не просто коллегой, а наставником для всех нас. Его профессионализм, честность и умение найти подход к каждому сотруднику сделали нашу компанию одной семьей. Его наследие живет в каждом здании, которое мы создали вместе.",
    author: "От коллег",
  },
];

export function MemorialQuotes({ className }: MemorialQuotesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={cn("w-full py-16", className)}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
        }}
        setApi={setApi}
        className="w-full mx-auto max-w-4xl"
      >
        <CarouselContent>
          {quotes.map((quote, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative w-full">
                {/* Author badge - positioned at top center, half outside */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 py-2 text-[16px] font-light"
                  style={{ 
                    backgroundColor: '#F6B95A', 
                    borderRadius: '50px',
                    color: '#1F1F1F',
                    top: 0
                  }}
                >
                  {quote.author}
                </div>

                <div
                  className="relative p-8 md:p-12 rounded-lg shadow-lg mx-4 opacity-80"
                  style={{
                    backgroundColor: '#2D2D2D',
                    backgroundImage: `url("http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/6a97b853-09d2-4d1a-b3fe-108723a35218/photo/1757474699336_bg_card_pattern_3.png")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Left quote - positioned at top left, half outside */}
                  <Quote 
                    className="absolute text-white h-8 w-8 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ top: 0, left: '2rem' }}
                  />

                  {/* Right quote - positioned at bottom right, half outside */}
                  <Quote 
                    className="absolute text-white h-8 w-8 rotate-180 transform translate-x-1/2 translate-y-1/2"
                    style={{ bottom: 0, right: '2rem' }}
                  />

                  <blockquote>
                    <Typography.P className="text-white text-[18px] text-center leading-relaxed" style={{ margin: 0 }}>
                      {quote.text}
                    </Typography.P>
                  </blockquote>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "rounded-full transition-all duration-300 border-none",
                  index === current
                    ? "w-3 h-3 bg-[#F6B95A]"
                    : "w-2 h-2 bg-[#2D2D2D] hover:bg-[#F6B95A]/60"
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
}