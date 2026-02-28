import ScrollReveal from "./ScrollReveal";

const InspirationSection = () => {
  const mentions = [
    { name: "Effort costs more than it used to."},
    { name: "Rest doesn't reset you the same way."},
    { name: "Days move efficiently, but not deeply.",},
  ];

  const extras = [
    
  ];

  return (
    <section className="section-full py-24">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-muted-foreground mb-4">
            
          </h2>
          <h2 className="heading-section text-primary mt-16 mb-12 max-w-2xl">
             
          </h2>
        </ScrollReveal>


        <div className="space-y-6 mt-12">
          {mentions.map((item, i) => (
            <ScrollReveal key={item.name} delay={0.1 * i} direction="left">
              <div className="flex items-baseline gap-6">
                <span className="text-foreground font-display text-xl md:text-2xl font-bold">
                  {item.name}
                </span>
                <span className="text-primary font-display text-lg font-semibold">
                  {item.count} 
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        

        <div className="mt-12 space-y-4">
          {extras.map((name, i) => (
            <ScrollReveal key={name} delay={0.1 * i}>
              <div className="flex items-center gap-3">
                <span className="text-primary text-2xl">+</span>
                <span className="text-muted-foreground font-body text-lg">{name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <h3 className="heading-section text-foreground">
           <span>You assume this is maturity. You assume everyone else is managing better. <span>If something were obviously wrong, you could fix it.</span></span>
          </h3>
        </ScrollReveal> 
        <ScrollReveal delay = {1}>
            <h2 className="heading-section text-primary mt-16 mb-12 max-w-2xl">
             Instead, you adjust yourself.
            </h2>
        </ScrollReveal>
          
        
      </div>
    </section>
  );
};

export default InspirationSection;
