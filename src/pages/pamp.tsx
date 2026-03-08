import { motion } from "framer-motion";
import { trackEvent } from "@/utils/analytics";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, delay },
});

const Pamp = () => {
  return (
    <div
      className="text-foreground min-h-screen relative overflow-hidden" >
        <motion.h1
        className="font-bold text-2xl sm:text-3xl md:text-4xl"
        style={{ fontFamily: "'Integral CF', sans-serif" }}
>     </motion.h1>
      {/* Background GIF */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://bemorehuman.co.in/BeMoreHumanGIF.gif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 z-0 bg-background/80" />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-xl text-center space-y-10">

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight text-foreground/90"
            {...fade(0.3)}
          >
            You're functioning.
            <br />
            But are you actually living?
          </motion.h1>

          <motion.div className="space-y-1" {...fade(0.8)}>
            <p className="text-muted-foreground text-sm md:text-base">
              
            </p>
            <p className="text-foreground/80 text-base md:text-lg">
               You found this book the moment <br/>
              you needed it most.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
            {...fade(1.3)}
          >
            <a
            href="/readbook"
            onClick={() => {
              trackEvent("click_read_book", { page: "pamp" });
            }}
            className="px-6 py-3 text-xs tracking-[0.1em] uppercase bg-foreground/10 text-foreground/70 hover:bg-foreground/15 transition-colors duration-700"
          >
            Read the Book
          </a>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 2.5, duration: 2 }}
        >
          <motion.div
            className="w-px h-10 bg-muted-foreground"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </section>

      {/* SECTION 2 */}
      <section
        id="reclaim"
        className="relative z-10 min-h-[80vh] flex items-center px-6 md:px-16 lg:px-24"
      >
        <motion.div className="max-w-lg" {...fade()}>
          <p className="text-muted-foreground/40 text-[10px] tracking-[0.4em] uppercase mb-10">
            [i]
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-tight text-foreground/85 mb-6">
            This isn't burnout.
            <br />
            This isn't a breakdown.
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            It's something quieter and a lot more common than anyone admits.
          </p>
        </motion.div>
      </section>

      {/* SECTION 3 */}
      <section className="relative z-10 min-h-[80vh] flex items-center justify-end px-6 md:px-16 lg:px-24">
        <motion.div className="max-w-lg text-right" {...fade()}>
          <p className="text-muted-foreground/40 text-[10px] tracking-[0.4em] uppercase mb-10">
            [ii]
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-tight text-foreground/85 mb-6">
            The system taught you how to perform.
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Nobody taught you <span className="text-foreground/70">how to be.</span>
          </p>
        </motion.div>
      </section>

      {/* SECTION 4 */}
      <section className="relative z-10 min-h-[80vh] flex items-center justify-center px-6">
        <motion.div className="max-w-md text-center" {...fade()}>
          <p className="text-muted-foreground/40 text-[10px] tracking-[0.4em] uppercase mb-10">
            [iii]
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-tight text-foreground/85 mb-2">
            Not fixing you.
          </h2>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-tight text-muted-foreground mb-8">
            Not upgrading you.
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Just bringing you back to yourself.
          </p>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 min-h-[80vh] flex items-center justify-center px-6">
        <motion.div className="max-w-md text-center" {...fade()}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight text-foreground/90 mb-6">
            If you've ever felt like you're living someone else's version of your life 
          </h2>

          <p className="text-foreground/60 text-base md:text-lg mb-14">
            this book was written for that feeling.
          </p>

         <a
            href="/readbook"
              className="px-6 py-3 text-xs tracking-[0.1em] uppercase bg-foreground/10 text-foreground/70 hover:bg-foreground/15 transition-colors duration-700"
          >
            Read the Book
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 text-center">
        <p className="text-muted-foreground/25 text-[10px] tracking-[0.4em] uppercase">
          Be More Human
        </p>
      </footer>

    </div>
  );
};

export default Pamp;