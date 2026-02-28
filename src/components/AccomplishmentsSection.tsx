import ScrollReveal from "./ScrollReveal";

const accomplishments = [
  
];

const AccomplishmentsSection = () => {
  return (
    <section className="section-full py-24">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-foreground max-w-4xl">
           
            <span className="text-primary"></span>{" "}
            
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {accomplishments.map((text, i) => (
            <ScrollReveal key={i} delay={0.06 * i}>
              <p className="body-quote text-muted-foreground border-l-2 border-primary/20 pl-6 py-2">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
