import ScrollReveal from "./ScrollReveal";

const wisdomItems = [
 
];

const WisdomSection = () => {
  return (
    <section className="section-full py-24">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-primary">
           
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16">
          <h3 className="heading-section text-foreground max-w-3xl">
           
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {wisdomItems.map((item, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="bg-secondary/30 rounded-lg p-6">
                <p className="text-muted-foreground font-body text-base">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WisdomSection;
