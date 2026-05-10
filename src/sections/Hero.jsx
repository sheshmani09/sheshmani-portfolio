import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "Java",
  "Javascript",
  "MySQL",
  "React",
  "C++",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "DSA",
  "OOP",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg  */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/hero-bg.jpg"
          alt="main-background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content  */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column text content */}
          <div className="space-y-8">
            <div className="animate-fade-in "></div>

            {/* headline  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-100">
                Hi, I'm Sheshmani Sahu — a budding software engineer currently
                ongoing specialized training(PGCP-AC) at CDAC ACTS Pune. I
                currently have hands-on pratice in Javascript , React.js, Java,
                MySQL database. Focused on building scalable and user centric
                web applications.
              </p>
            </div>
            {/* CTAs  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                <a href="#contact">Contact Me</a>{" "}
                <ArrowRight className="w-5 h-5" />{" "}
              </Button>
              <a
                href="https://drive.google.com/file/d/1xB7FTOvUbA256R8ShMcnjhhf-SdTnuno/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>Download Resume</AnimatedBorderButton>
              </a>
            </div>
          </div>
          {/* Right profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile-image  */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="src/assets/image.png"
                  alt="Sheshmani"
                  className="w-full aspect-4/5  object-cover rounded-2xl"
                />

                {/* foating badge  */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span>Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section  */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center font-bold">
            My Tech Stack
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skills, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skills}
                  </span>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-muted-foreground w-5 mx-auto mt-5">
          <a href="#about" className="flex-col justify-center">
            <div>Scroll</div> <ChevronDown className="animate-bounce ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
