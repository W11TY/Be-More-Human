import ScrollReveal from "./ScrollReveal";

const FeelingsSection = () => {
  return (
    <section className="section-full py-24">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-foreground max-w-3xl">
           
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12">
          <h3 className="heading-section text-primary max-w-2xl">
            
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <p className="stat-number text-foreground"></p>
              <p className="text-muted-foreground font-body text-lg mt-3"></p>
              <p className="text-primary font-display text-2xl font-bold mt-1">
                
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <p className="stat-number text-foreground"></p>
              <p className="text-muted-foreground font-body text-lg mt-3"></p>
              <p className="text-primary font-display text-2xl font-bold mt-1">
               
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <p className="stat-number text-foreground"></p>
              <p className="text-muted-foreground font-body text-lg mt-3"></p>
              <p className="text-primary font-display text-xl font-bold mt-1">
               
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FeelingsSection;
