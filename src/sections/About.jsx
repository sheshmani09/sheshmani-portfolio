import { TrendingUp, CodeXml, Brain, Users } from "lucide-react";

const highlights = [
  {
    icon: CodeXml,
    title: "Clean Code",
    description:
      "Writing well-structured and maintainable code focusing on readability, efficiency, and scalability.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description:
      "Using the concepts of DSA and logic to divide the challenge into more manageable parts.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively in team environments with clear communication and shared ownership.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "Constantly improving myself in the areas of Java programming, MySQL, and software development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Driven by curiosity,
              <span className="font-serif italic font-normal text-white">
                {" "}
                built through consistency.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a Computer Science graduate currently pursuing advanced
                training in Java and database systems at CDAC ACTS, Pune, with a
                strong foundation in object-oriented programming, data
                structures, and modern web development.
              </p>
              <p>
                I enjoy building responsive and intuitive applications that
                combine clean design with efficient functionality. I have gained
                expertise in various areas including JavaScript, API
                integration, Tailwind CSS, problem solving through practical
                application-based learning.
              </p>
              <p>
                With the aspiration of becoming a software developer, I’m
                focused on continuously strengthening my technical skills,
                writing clean and maintainable code, and building software that
                is reliable, scalable, and thoughtfully engineered.
              </p>
            </div>
          </div>
          {/* Right column -highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in " style={{animationDelay:`${(idx+1)*100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
