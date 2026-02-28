import ScrollReveal from "./ScrollReveal";

const FooterSection = () => {
  return (
    <section className="section-full py-24">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="heading-section text-primary">
            You can spend another year adjusting yourself to fit. Or you can start building in your actual element.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mt-12">
          <p className="text-muted-foreground font-body text-base leading-relaxed max-w-xl mx-auto">
            You were never behind. You were just learning to stand up without losing yourself.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5} className="mt-12">
          <div className="border-t border-border pt-10 flex flex-col items-center gap-8">
            
            {/* Apple-like minimal button */}
            <button
              onClick={() => console.log("Continue")}
              className="
                px-8 py-3
                rounded-full
                bg-foreground text-background
                text-sm font-medium tracking-wide
                transition-all duration-200 ease-out
                hover:scale-[1.02] hover:shadow-md
                active:scale-[0.96]
                border border-border
              "
            >
              Own The Book 
            </button>

            <div>
              <p className="text-muted-foreground font-body text-sm">
              Tomorrow looks the same. Unless you stop pretending.              </p>
              <p className="text-foreground font-display text-sm tracking-[0.3em] mt-4">
                B M/ . Human
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FooterSection;