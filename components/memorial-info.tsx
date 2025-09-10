import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialInfoProps {
  className?: string;
}

export function MemorialInfo({ className }: MemorialInfoProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column */}
        <div className="space-y-8">
          <div className="space-y-3">
            <Typography.H2 className="text-white text-[40px] font-bold">
              Семья
            </Typography.H2>
            <Typography.P className="text-[#8B8B8G] text-[16px] leading-relaxed" style={{ margin: 0 }}>
              Александр прожил счастливую жизнь с женой Ольгой Сергеевной. Вместе
              они воспитали двоих замечательных детей — Виктора и Елену. Виктор
              пошёл по стопам отца, став инженером, а Елена выбрала медицину и
              стала врачом. У Александра было трое внуков, которых он обожал:
              Максим, Полина и София. Он всегда говорил, что внуки — это главный
              подарок жизни.
            </Typography.P>
          </div>

          <div className="space-y-3">
            <Typography.H2 className="text-white text-[40px] font-bold">
              Каким он был
            </Typography.H2>
            <Typography.P className="text-[#8B8B8G] text-[16px] leading-relaxed" style={{ margin: 0 }}>
              Его знали как человека с добрым сердцем и невероятной щедростью. Он
              всегда находил время для друзей, был душой компании и мастером
              анекдотов.
            </Typography.P>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-3">
          <Typography.H2 className="text-white text-[40px] font-bold">
            Кем он был
          </Typography.H2>
          <div className="space-y-4">
            <Typography.P className="text-[#8B8B8G] text-[16px] leading-relaxed" style={{ margin: 0 }}>
              По профессии Александр был архитектором, и его работы до сих пор
              украшают Брест. Главная площадь города, несколько школ, жилые
              кварталы — всё это носит отпечаток его таланта. Он обожал своё
              дело и часто говорил: 'Архитектор не просто строит дома, он
              создаёт места, где рождаются истории.'
            </Typography.P>
            <Typography.P className="text-[#8B8B8G] text-[16px] leading-relaxed" style={{ margin: 0 }}>
              Но его жизнь — это не только чертежи и проекты. Александр любил
              проводить время с семьёй, играть в шахматы и читать исторические
              романы. Его особенной страстью был сад — во дворе всегда цвели
              розы, которые он ухаживал с особой любовью.
            </Typography.P>
          </div>
        </div>
      </div>
    </div>
  );
}