import ScrollReveal from "./ScrollReveal";

const quotes = [
  "You cannot fix the surface without addressing what is underneath.",
  "Effort costs more when the direction isn't yours.",
  "A large part of human exhaustion comes from living in borrowed air.",
  " people try to fix their thinking before they understand what their thinking is supposed to serve.",
];

const ShowUpSection = () => {
  return (
    <section className="section-full py-24">
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-primary mb-4">
            You notice it 
          </h2>
          <h2 className="heading-section text-foreground max-w-xl">
            when progress doesn't register.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {quotes.map((quote, i) => (
            <ScrollReveal key={i} delay={0.08 * i} direction={i % 2 === 0 ? "left" : "right"}>
              <p className="body-quote text-muted-foreground italic border-l-2 border-primary/30 pl-6 py-2">
                {quote}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowUpSection;
