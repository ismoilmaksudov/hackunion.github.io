import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface TVFrameProps {
  className?: string;
}

const TVFrame = ({ className }: TVFrameProps) => {
  const slides = useMemo(
    () => [
      {
        title: "Workshops",
        copy: "Hands-on learning",
      },
      {
        title: "Hackathons",
        copy: "Build real projects",
      },
      {
        title: "Mentorship",
        copy: "Grow with guidance",
      },
    ],
    []
  );

  return (
    <div className={cn("group relative rounded-2xl border border-border/60 p-3 bg-secondary/20 shadow-neon hover:shadow-neon-strong transition-all duration-300", className)}>
      <div className="rounded-xl border border-border/60 bg-background/70 overflow-hidden">
        <div className="aspect-video w-full scanlines crt-flicker flex items-center justify-center">
          <div className="w-full h-full grid grid-cols-3">
            {slides.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center justify-center border-r border-border/40 last:border-r-0">
                <div className="h-10 w-10 rounded-sm bg-primary/80 shadow-neon mb-3" aria-hidden />
                <p className="font-pixel text-primary text-lg">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -inset-1 rounded-2xl pointer-events-none transition-transform duration-300 group-hover:rotate-[0.5deg]" aria-hidden />
    </div>
  );
};

export default TVFrame;
