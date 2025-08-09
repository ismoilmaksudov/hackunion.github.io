import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md">
          <img src="/lovable-uploads/f4fa17a9-2407-45cb-b72e-2eefda0eec18.png" alt="HackUnion logo" className="h-8 w-8 rounded-sm shadow-neon" />
          <span className="font-semibold tracking-tight">HackUnion</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a className="hover:text-foreground transition-colors" href="#about">About</a>
          <a className="hover:text-foreground transition-colors" href="#programs">Programs</a>
          <a className="hover:text-foreground transition-colors" href="#impact">Impact</a>
          <a className="hover:text-foreground transition-colors" href="#partners">Partners</a>
          <a className="hover:text-foreground transition-colors" href="#events">Events</a>
          <a className="hover:text-foreground transition-colors" href="#blog">Blog</a>
          <a className="hover:text-foreground transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outlineNeon" size="sm">Partner with Us</Button>
          <Button variant="neon" size="sm"><Save className="mr-1" /> Join Us</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
