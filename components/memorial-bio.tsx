"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MemorialBioProps {
  className?: string;
}

const bioSections = [
  {
    title: "Биография",
    content: "Александр Викторович Карпук родился в Бресте. С ранних лет он проявлял интерес к науке и искусству. После окончания школы Александр поступил в университет, где изучал инженерное дело. В своей карьере он достиг значительных успехов, работая над различными проектами в области технологий. В свободное время Александр увлекается фотографией и путешествиями, что позволяет ему открывать новые горизонты и вдохновляться окружающим миром."
  },
  {
    title: "Увлечения",
    content: "Александр был страстным коллекционером старинных монет и марок. Он часами изучал историю каждого экземпляра, делился знаниями с друзьями-единомышленниками. В выходные любил отправляться в походы по живописным местам Беларуси, фотографируя природу и архитектурные памятники. Также увлекался шахматами и регулярно участвовал в местных турнирах."
  },
  {
    title: "Образование",
    content: "Александр окончил Брестский государственный технический университет по специальности 'Промышленное и гражданское строительство' с отличием. Продолжил обучение в аспирантуре, защитив кандидатскую диссертацию по теме современных строительных технологий. На протяжении карьеры постоянно повышал квалификацию, изучал международный опыт в области архитектуры и градостроительства."
  }
];

export function MemorialBio({ className }: MemorialBioProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <div className={cn("w-full py-16", className)}>
      <Accordion 
        type="multiple" 
        className="space-y-5"
        value={openItems}
        onValueChange={setOpenItems}
      >
        {bioSections.map((section, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className={cn(
              "border rounded-lg px-6 py-4 transition-colors",
              openItems.includes(`item-${index}`) 
                ? "border-white" 
                : "border-[#2D2D2D]"
            )}
          >
            <AccordionTrigger className="hover:no-underline py-2">
              <Typography.H3 className="text-white text-[20px] font-bold text-left">
                {section.title}
              </Typography.H3>
              <ChevronDown className="h-4 w-4 text-[#8B8B8B] shrink-0 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <Typography.P 
                className="text-[#8B8B8B] text-[16px] leading-relaxed"
                style={{ margin: 0 }}
              >
                {section.content}
              </Typography.P>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}