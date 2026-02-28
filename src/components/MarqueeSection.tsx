import ScrollReveal from "./ScrollReveal";

const MarqueeSection = () => {
  const leftItems = [
    "Purpose before personality", "Personality before clarity", "Your work doesn't need applause", "Love is ordinary action repeated",

  ];

  const rightItems = [
    "BeMoreHuman", "BeMoreHuman", "BeMoreHuman", "BeMoreHuman",
    "BeMoreHuman", "BeMoreHuman", "BeMoreHuman",
  ];

  return (
    <section className="py-24 overflow-hidden">
      <ScrollReveal>
        <h2 className="heading-section text-foreground text-center px-6 mb-16">
          
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <h3 className="heading-section text-center text-muted-foreground px-6 mb-12">
         
        </h3>
      </ScrollReveal>

      {/* Marquee rows */}
      <div className="space-y-4">
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...leftItems, ...leftItems].map((item, i) => (
              <span
                key={i}
                className="font-display text-lg md:text-2xl font-bold text-primary mx-6"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <ScrollReveal className="text-center py-4">
          <span className="text-muted-foreground font-body text-lg tracking-widest">
            If something here feels familiar, that's enough.
          </span>
        </ScrollReveal>

        <div className="overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: "marquee 25s linear infinite reverse",
            }}
          >
            {[...rightItems, ...rightItems].map((item, i) => (
              <span
                key={i}
                className="font-display text-lg md:text-2xl font-bold text-foreground mx-6"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
