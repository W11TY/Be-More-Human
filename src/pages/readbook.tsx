import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";

const page = {
  chapter: "ACT III",
  title: "LOVE MISUNDERSTOOD",
  content: [
    "Most arguments between parents and children are not about who is right.",
    "They are about two people who never learned to speak each other's language. One generation learned that love means holding steady. Providing. Enduring without complaint. The other learned that love means being heard. Being understood. Being given a reason before being given a rule.",
    "They grew up in environments where responsibility was felt rather than discussed. Where care was demonstrated through provision, consistency, and restraint. Endurance was not just a skill it was proof of love. Silence carried meaning. Strength was measured by how much could be carried without complaint.",
    "And on the other side  a generation growing up where identity forms in public. Where comparison is constant. Where silence does not feel neutral. It feels ambiguous. And ambiguity feels like judgment waiting to happen. They want to understand before they comply. They want context before commitment.",
    "Neither was wrong. Both were incomplete. And in that gap  every conversation that went quiet when it should have gone deeper. And somewhere in that silence something was waiting to be said."
  ]  
};

const ReadBook = () => {
  const navigate = useNavigate();

  const variants = {
    enter: { opacity: 0, x: 60, scale: 0.98 },
    center: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden"
      onTouchStart={(e) => {
        const startX = e.touches[0].clientX;
        const handleEnd = (ev: TouchEvent) => {
          const diff = startX - ev.changedTouches[0].clientX;
          if (diff > 100) navigate("/product");
          document.removeEventListener("touchend", handleEnd);
        };
        document.addEventListener("touchend", handleEnd);
      }}
      style={{
        backgroundColor: "#f5f0e8",
        fontFamily: "'Times New Roman', 'Georgia', serif"
      }}>

      <motion.div
        variants={variants}
        initial="enter"
        animate="center"
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-[680px]"
        style={{
          backgroundColor: "#faf6ee",
          boxShadow:
            "4px 4px 20px rgba(0,0,0,0.15), -1px 0 3px rgba(0,0,0,0.05), inset -2px 0 8px rgba(0,0,0,0.04)",
          minHeight: "85vh",
          padding: "clamp(2rem, 6vw, 4rem) clamp(2rem, 6vw, 3.5rem)"
        }}>

        {/* Subtle page edge texture */}
        <div className="absolute top-0 right-0 w-px h-full" style={{ backgroundColor: "rgba(0,0,0,0.06)" }} />
        <div className="absolute top-0 right-[3px] w-px h-full" style={{ backgroundColor: "rgba(0,0,0,0.03)" }} />

        {/* Header */}
        <header className="text-center mb-10">
          <p className="uppercase tracking-[0.35em] text-xs mb-8" style={{ color: "#6b6358" }}>
            {page.chapter}
          </p>
          <h1 className="text-xl sm:text-2xl font-normal tracking-wide mb-1" style={{ color: "#2a2520" }}>
            {page.title}
          </h1>
          <div className="mx-auto mt-6 w-16" style={{ borderTop: "1px solid #c4b8a8" }} />
        </header>

        {/* Body text */}
        <div className="space-y-5">
          {page.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-[1.85] text-justify"
              style={{
                color: "#2e2923",
                textIndent: i > 0 ? "2em" : undefined,
                fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)"
              }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Page number */}
        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <span className="text-sm tracking-wider" style={{ color: "#9a8f82" }}>1</span>
        </footer>
      </motion.div>

      {/* Navigation — next goes to product page */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button disabled className="p-2 rounded-full transition-opacity disabled:opacity-20" style={{ color: "#6b6358" }}>
          <ChevronLeft size={24} />
        </button>
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#9a8f82", fontFamily: "'Times New Roman', serif" }}>
          1 / 2
        </span>
        <button
          onClick={() => navigate("/product")}
          className="p-2 rounded-full transition-opacity"
          style={{ color: "#6b6358" }}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ReadBook;