import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="section-full relative overflow-hidden flex items-center justify-center">
      <motion.div
        className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src="/BeMoreHuman.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-body">
          you adapted to everything.
          did you adapt away from yourself too?
        </span>
        <motion.div
          className="w-px h-8 bg-muted-foreground/40"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;