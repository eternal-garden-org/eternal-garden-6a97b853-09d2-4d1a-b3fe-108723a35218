import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface CustomAudioPlayerProps {
  className?: string;
}

export function CustomAudioPlayer({ className }: CustomAudioPlayerProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <Typography.H2 className="text-white text-[40px] font-bold">
          Песня Александра
        </Typography.H2>
        
        <audio controls className="w-full max-w-md mx-auto">
          <source src="https://example.com/audio.mp3" type="audio/mpeg" />
          Ваш браузер не поддерживает аудио элемент.
        </audio>
      </div>
    </div>
  );
}