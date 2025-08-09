import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/lovable-uploads/f4fa17a9-2407-45cb-b72e-2eefda0eec18.png" alt="HackUnion logo" className="h-6 w-6 rounded-sm shadow-neon" />
            <span className="font-semibold">HackUnion</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">Training and connecting youth across Central Asia with practical tech skills, mentorship, and community-driven hackathons.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Our Socials</h3>
          <nav className="text-sm text-muted-foreground grid gap-2 mb-6">
            <a href="#" aria-label="Telegram" className="hover:text-foreground">Telegram</a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground">Instagram</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground">LinkedIn</a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground">YouTube</a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-foreground">X (Twitter)</a>
            <a href="#" aria-label="TikTok" className="hover:text-foreground">TikTok</a>
          </nav>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <nav className="text-sm text-muted-foreground grid gap-2">
            <a href="#programs" className="hover:text-foreground">Programs</a>
            <a href="#impact" className="hover:text-foreground">Impact</a>
            <a href="#partners" className="hover:text-foreground">Partners</a>
            <a href="#events" className="hover:text-foreground">Events</a>
          </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-3">Get updates and upcoming events.</p>
          <div className="flex gap-2">
            <Input placeholder="you@example.com" aria-label="Email" />
            <Button variant="neon">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} HackUnion. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
