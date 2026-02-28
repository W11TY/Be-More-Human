import ScrollReveal from "./ScrollReveal";

const BigChangesSection = () => {
  return (
    <section className="section-full py-24">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-foreground">
            When you know what matters, decisions simplify.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h3 className="heading-section text-primary mt-12 max-w-3xl">
            You stop shifting based on who is in the room or what is expected.
          </h3>
        </ScrollReveal>

        <div className="flex flex-wrap gap-6 mt-12">
          {["Not because you are rigid,Because you are coherent"].map((item, i) => (
            <ScrollReveal key={item} delay={0.15 * i}>
              <span className="text-foreground font-display text-3xl md:text-5xl font-bold">
                {item}{i < 2 ? "," : ""}
              </span>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-16">
          <p className="text-muted-foreground font-body text-xl">
            Some people left jobs that paid well but drained them.
            Some moved to places that felt right instead of impressive.
            Some stopped explaining every decision.
            Some let relationships loosen without forcing closure.
            Some chose alignment over applause.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-24">
          <h3 className="heading-section text-foreground max-w-3xl">
            Because they stopped adjusting themselves to fit spaces that were never theirs.
          </h3>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BigChangesSection;
