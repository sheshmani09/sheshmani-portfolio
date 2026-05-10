import { ArrowUpRight, ExternalLink, Link } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A minimal expense tracker to keep track of your personal finance",
    image: "src/assets/projects/budget.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://sheshmani09.github.io/Budget-Buddy/",
    github: "https://github.com/sheshmani09/Budget-Buddy",
  },
  {
    title: "AeroCast - Weather Forecast",
    description: "A modern weather forecast web app",
    image: "src/assets/projects/aerocast.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "API Integration"],
    link: "https://sheshmani09.github.io/AeroCast/",
    github: "https://github.com/sheshmani09/AeroCast",
  },
  // {
  //     title: "Home Smart",
  //     description: "Landing page of home furnishings store",
  //     image: "src/assets/projects/homesmart.png",
  //     tags: ["HTML","Tailwind CSS"],
  //     link: "https://sheshmani09.github.io/HomeSmart/",
  //     github:"https://github.com/sheshmani09/HomeSmart"
  // },
  // {
  //     title: "Brand Studio",
  //     description: "Landing page of a ",
  //     image: "src/assets/projects/brand.png",
  //     tags: ["HTML","CSS"],
  //     link: "https://sheshmani09.github.io/Brand-Studio/",
  //     github:"https://github.com/sheshmani09/Brand-Studio"
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* section header  */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured work
          </span>
          <h2 className="my-4 text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building solutions through <br />
            <span className="font-serif italic font-normal text-white">
              code and creativity
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Each project represents practical learning, problem-solving, and my
            growing ability to build clean and efficient software solutions.
          </p>
        </div>
        {/* project grid  */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* image  */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-foreground transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-foreground transition-all"
                  >
                    <Link className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content  */}
              <div className="p-6 space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}{" "}
                </p>
                <div className="flex flex-wrap gap-2">
                  {" "}
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}{" "}
                    </span>
                  ))}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all cta button  */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
