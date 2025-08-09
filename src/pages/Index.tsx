import Header from "@/components/Header";
import TVFrame from "@/components/TVFrame";
import TerminalStats from "@/components/TerminalStats";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown, Wrench, Rocket, Users } from "lucide-react";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HackUnion",
    url: "/",
    description:
      "HackUnion trains and connects youth across Central Asia with practical tech skills, mentorship, and real-world startup experiences.",
  };

  return (
    <div className="min-h-screen text-foreground grain-overlay">
      <Header />
      <main>
        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fade-in">
              
              <h1 className="font-display text-5xl md:text-6xl leading-tight">
                Empowering the Next Generation of Innovators
              </h1>
              <p className="text-base text-muted-foreground max-w-prose">
                HackUnion trains and connects youth across Central Asia with practical tech skills, mentorship, and real-world startup experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="xl">
                  Join Us <ArrowRight />
                </Button>
                <Button variant="outlineNeon" size="xl">
                  Partner with Us <ArrowRight />
                </Button>
                <Button variant="link" className="text-primary">
                  <FileDown className="mr-1" /> Download pitch deck
                </Button>
              </div>
            </div>
            <TVFrame className="animate-scale-in" />
          </div>
        </section>

        <section id="programs" className="container py-12">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border/60 p-6 bg-secondary/30 hover-scale">
              <Wrench className="h-6 w-6 text-primary mb-3" aria-hidden />
              <h3 className="font-pixel text-primary mb-2">Workshops</h3>
              <p className="text-sm text-muted-foreground">Hands-on sessions led by industry mentors.</p>
            </div>
            <div className="rounded-xl border border-border/60 p-6 bg-secondary/30 hover-scale">
              <Rocket className="h-6 w-6 text-primary mb-3" aria-hidden />
              <h3 className="font-pixel text-primary mb-2">Hackathons</h3>
              <p className="text-sm text-muted-foreground">Community builds with real-world challenges.</p>
            </div>
            <div className="rounded-xl border border-border/60 p-6 bg-secondary/30 hover-scale">
              <Users className="h-6 w-6 text-primary mb-3" aria-hidden />
              <h3 className="font-pixel text-primary mb-2">Mentorship</h3>
              <p className="text-sm text-muted-foreground">Ongoing guidance to launch careers.</p>
            </div>
          </div>
        </section>

        <TerminalStats />

        <section id="partners" className="container py-16">
          <h2 className="font-display text-3xl mb-6">Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['UNICEF','Local NGOs','Tech Hubs','Universities'].map((p) => (
              <div key={p} className="rounded-md border border-border/60 bg-background/40 h-20 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                {p}
              </div>
            ))}
          </div>
        </section>

        <section id="events" className="container py-16">
          <h2 className="font-display text-3xl mb-6">Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="rounded-xl border border-border/60 p-6 bg-secondary/30">
              <h3 className="font-pixel text-primary mb-3">Upcoming Hackathons</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Stay tuned for upcoming hackathons across Central Asia. Follow our socials for announcements.</p>
              </div>
            </article>
            <article className="rounded-xl border border-border/60 p-6 bg-secondary/30">
              <h3 className="font-pixel text-primary mb-3">Past Hackathons</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="text-foreground font-medium">Tashkent Hackathon</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Date: 31 July</li>
                  <li>Location: Mfaktor building</li>
                  <li>10 teams participated</li>
                  <li>40+ students joined</li>
                  <li>$1,200+ in prizes awarded</li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
