import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-main.avif";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2">
                <span className="text-white text-lg font-medium">Hi There</span>
                <span className="text-2xl">👋</span>
                <span className="text-white text-lg font-medium">I'm</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
                Shreya
                <br />
                Shere
              </h1>

              <div className="flex items-center gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-primary">AI ENGINEER + DEVELOPER</h2>
                <span className="text-2xl">💻</span>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Graduate Software Engineering student at Arizona State University with 2+ years of professional
                development experience. I design and deploy scalable AI systems from clinical note summarization to
                intelligent workflow agents delivering measurable efficiency gains. My focus: building ethical,
                research-driven AI that solves real-world problems.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                    Hire Me
                  </Button>
                </Link>
                <div className="flex items-center gap-6">
                  <a
                    href="https://drive.google.com/file/d/1aZlW77EBZwNuwjJaUX27fTucndbTyWoG/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FileText className="w-5 h-5 inline mr-2" />
                    Resume
                  </a>
                  <a
                    href="https://linkedin.com/in/shreya-shere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5 inline" />
                  </a>
                  <a
                    href="https://github.com/Shreyaa-Shere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5 inline" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Avatar/Image */}
            {/* Right Content – Avatar / Image */}
            <div className="relative lg:flex justify-center items-center">
              <div className="relative w-full max-w-[400px] aspect-square group">
                {/* soft radial glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full blur-3xl opacity-60
                 bg-[radial-gradient(55%_60%_at_65%_40%,theme(colors.primary/35),transparent_70%)]"
                />

                {/* slow rotating conic ring (halo) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 rounded-full
                 [mask-image:radial-gradient(circle,black_62%,transparent_64%)]"
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-40
                      bg-[conic-gradient(from_0deg,theme(colors.primary)_0%,transparent_20%,theme(colors.primary)_40%,transparent_60%,theme(colors.primary)_80%,transparent_100%)]
                      animate-[spin_30s_linear_infinite]"
                  />
                </div>

                {/* glossy border frame */}
                <div
                  className="absolute inset-0 rounded-full p-[3px]
                    bg-gradient-to-br from-white/10 via-white/5 to-transparent"
                >
                  <div
                    className="relative h-full w-full overflow-hidden rounded-full
                      bg-black/30 backdrop-blur-xl ring-1 ring-white/10"
                  >
                    {/* your image */}
                    <img
                      src="https://i.postimg.cc/G2g43VSY/GHCProfile-pic.jpg"
                      alt="Shreya Shere - AI Engineer"
                      className="h-full w-full object-cover rounded-full
                     scale-[1.02] transition-transform duration-700 ease-out
                     group-hover:scale-105"
                    />

                    {/* soft specular highlights */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-full opacity-30 mix-blend-soft-light
                     bg-[radial-gradient(circle_at_35%_18%,white_10%,transparent_40%),radial-gradient(circle_at_80%_80%,white_8%,transparent_28%)]"
                    />
                  </div>
                </div>

                {/* small badge – optional */}
                <span
                  className="absolute bottom-4 right-5 inline-flex items-center gap-2
                     rounded-full bg-white/5 px-3 py-1 text-xs text-white/80
                     ring-1 ring-white/10 backdrop-blur-md"
                >
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
