import ScrollReveal from "./ScrollReveal";

const IntroSection = () => {
  return (
    <section className="section-full">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <ScrollReveal>
          <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed">
            You're doing everything you're supposed to do.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-foreground text-xl md:text-2xl font-body leading-relaxed">
             And it still feels
            <span className="text-primary font-semibold"> wrong.</span>.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed">
            You've been looking for words to describe this feeling for months.

            <span className="text-foreground font-semibold">
               
            </span>
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.45}>
          <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed">
            Maybe years.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
