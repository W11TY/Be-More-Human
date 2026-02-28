import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const words = [
  { text: "misalignment", size: "text-3xl md:text-5xl", bold: true },
  { text: "borrowed air", size: "text-xl md:text-3xl", bold: false },
  { text: "wrong place", size: "text-3xl md:text-5xl", bold: true },
  { text: "your own element", size: "text-sm md:text-lg", bold: false },
  { text: "performing", size: "text-xl md:text-3xl", bold: false },
  { text: "stop adjusting", size: "text-sm md:text-lg", bold: false },
  { text: "clarity without purpose", size: "text-3xl md:text-5xl", bold: true },
  { text: "observation without destination", size: "text-xl md:text-3xl", bold: false },
  { text: "rest doesn't work", size: "text-sm md:text-lg", bold: false },
  { text: "body stores", size: "text-xl md:text-3xl", bold: false },
  { text: "inherited", size: "text-sm md:text-lg", bold: false },
  { text: "alignment", size: "text-4xl md:text-6xl", bold: true },
  { text: "you thin out", size: "text-xl md:text-3xl", bold: false },
  { text: "you keep going", size: "text-sm md:text-lg", bold: false },
  { text: "coherent", size: "text-xl md:text-3xl", bold: false },
  { text: "loosen quietly", size: "text-sm md:text-lg", bold: false },
  { text: "you notice", size: "text-xl md:text-3xl", bold: false },
  { text: "stays quiet", size: "text-xs md:text-sm", bold: false },
  { text: "direction first", size: "text-xl md:text-3xl", bold: false },
  { text: "trust yourself", size: "text-sm md:text-lg", bold: false },
  { text: "be human", size: "text-3xl md:text-5xl", bold: true },
  { text: "from the outside", size: "text-xl md:text-3xl", bold: false },
  { text: "you assume", size: "text-sm md:text-lg", bold: false },
  { text: "something hasn't caught up", size: "text-xl md:text-3xl", bold: false }
];

const WordCloudSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-full py-24" ref={ref}>
      <div className="max-w-5xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="heading-section text-foreground max-w-4xl text-center mx-auto">
            What kept showing up
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mt-16">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className={`font-display ${word.size} ${
                word.bold ? "font-bold" : "font-light"
              } ${i % 3 === 0 ? "text-primary" : i % 3 === 1 ? "text-foreground" : "text-muted-foreground"}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.02 * i,
                ease: "easeOut",
              }}
            >
              {word.text}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordCloudSection;
