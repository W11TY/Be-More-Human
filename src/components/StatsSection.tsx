import ScrollReveal from "./ScrollReveal";

const StatsSection = () => {
  return (
    <section className="section-full py-24">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-primary max-w-3xl">
          This book doesn't explain what feels off.          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-12">
          <p className="text-muted-foreground font-body text-lg">
            It doesn't tell you to work harder.
            It doesn't give you routines.
            It doesn't convince you of anything.
            It doesn't make you feel better.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-24">
          <h3 className="heading-section text-foreground max-w-4xl">
            It slows you down long enough to notice,
            <span className="text-primary">where you're already human</span>{" "}
            before you try to become anything else.
          </h3>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default StatsSection;
