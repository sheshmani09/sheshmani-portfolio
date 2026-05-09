const educations = [
  {
    period: "Feb 2026 - Aug 2026",
    course: "PGCP-Advance Computing",
    institute: "CDAC ACTS, Pune",
    current: true,
  },
  {
    period: "Oct 2021 - July 2025",
    course: "B.Tech CSE",
    institute:
      "Shri Shankaracharya Institute of Proffessional Management and Technology, Raipur",
    current: false,
  },
  {
    period: "June 2019 - Apr 2020",
    course: "12th PCM",
    institute: "Vardhaman The School, Raipur",
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* section header  */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that shaped my&nbsp;
            <span className="font-serif italic font-normal text-white">
              technical foundation
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            The academic path that built my understanding of computer science
            principles and shaped my approach to software development.
          </p>
        </div>

        {/* timeline  */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-5 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* education items  */}
          <div className="space-y-12">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-17 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                {edu.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>}
                </div>
                {/* content  */}
                <div className={`pl-8 md:pl-0 ${idx%2===0?"md:pr-16 md:text-right":"md:col-start-2 md:pl-16" }`}>
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">{edu.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{edu.course} </h3>
                    <p className="text-muted-foreground">{edu.institute}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
