import ScrollReveal from "./ScrollReveal";
import { useNavigate } from "react-router-dom";

const IntroSection = () => {
  const navigate = useNavigate();

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
            <span className="text-primary font-semibold"> wrong.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed">
            You've been looking for words to describe this feeling for months.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <p className="text-muted-foreground text-lg md:text-xl font-body leading-relaxed">
            Maybe years.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.6}>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate("/product")}
            className="px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-md active:scale-[0.96] border border-border"
          >
            Own The Book
          </button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default IntroSection;