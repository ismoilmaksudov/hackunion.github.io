import { useEffect, useState } from "react";

interface Stat {
  label: string;
  to: number;
  suffix?: string;
}

const TerminalStats = () => {
  const stats: Stat[] = [
    { label: "Youth Reached", to: 2500, suffix: "+" },
    { label: "Workshops", to: 120, suffix: "+" },
    { label: "Mentors", to: 80, suffix: "+" },
  ];

  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const durations = stats.map(() => 1200);
    const starts = performance.now();

    const raf = (now: number) => {
      const elapsed = now - starts;
      setValues((prev) =>
        prev.map((_, i) => {
          const p = Math.min(1, elapsed / durations[i]);
          return Math.floor(stats[i].to * (1 - Math.pow(1 - p, 2)));
        })
      );
      if (elapsed < Math.max(...durations)) requestAnimationFrame(raf);
    };

    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="impact" className="container py-20">
      <div className="rounded-xl border border-border/60 bg-secondary/40 p-6">
        <div className="text-primary font-mono text-xs uppercase mb-4 tracking-wide">$ tail -f impact.log<span className="animate-pulse">_</span></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="p-4 rounded-lg bg-background/40 border border-border/60">
              <div className="text-3xl font-semibold text-foreground">
                {values[i].toLocaleString()}<span className="text-primary">{s.suffix ?? ""}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerminalStats;
