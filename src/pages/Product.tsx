import { useState} from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { trackEvent } from "@/utils/analytics";

import book from "@/assets/bemorehuman.jpg"
import book1 from "@/assets/bemorehumanfront.jpg";
import book2 from "@/assets/bemorehumanback.jpg";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const images = [book1, book2, book];
  const [selectedImage, setSelectedImage] = useState(0);

  // Auto slide every 3 seconds
  
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Top bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-8 md:px-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-xs tracking-[0.2em] uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <span className="font-display text-sm tracking-[0.3em] text-foreground font-medium">
          B M /. HUMAN
        </span>
      </motion.nav>

      {/* Product layout */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left — Image Section */}
        <motion.div
          className="lg:w-1/2 flex items-center justify-center p-8 pt-28 lg:pt-8 lg:sticky lg:top-0 lg:h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-full max-w-md">
  <div className="relative w-full aspect-[3/4] border border-border overflow-hidden">
    
    <div className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Book cover"
          className="w-full h-full object-contain flex-shrink-0 snap-center"
        />
      ))}
    </div>

  </div>
</div>
        </motion.div>

        {/* Right — Details */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:py-32">
          <ScrollReveal>
            <p className="text-muted-foreground font-body text-xs tracking-[0.3em] uppercase mb-6">
              Limited Edition
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="heading-editorial text-3xl md:text-5xl lg:text-6xl mb-4">
              BE MORE<br />
              <span className="text-primary">HUMAN</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md mb-10">
            A printed confrontation with the world we’ve normalized and the self we’ve quietly abandoned.
            <span className="text-primary"> <br/> Be More Human</span> is not here to comfort you; <p>it’s here to wake something up.</p>

            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="border-t border-border pt-8 mb-8">
              <div className="flex items-baseline gap-4 mb-1">
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  ₹499
                </span>
                <span className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase">
                  
                </span>
              </div>
              <p className="text-muted-foreground font-body text-xs">
                
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              {/* Quantity */}
              <div className="flex items-center gap-6">
                <span className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase w-20">
                  Qty
                </span>
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-12 text-center font-display text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <button
                onClick={() =>
                  (window.location.href =
                    "https://blueroseone.com/store/product/be-more-human")
                }
                className="w-full border border-foreground py-4 font-display text-sm tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Add to Cart
              </button>

              <button
              onClick={() => {
                trackEvent("click_buy_book", { page: "pamp" });

                setTimeout(() => {
                  window.location.href =
                    "https://blueroseone.com/store/product/be-more-human";
                }, 120);
              }}
              className="w-full bg-primary py-4 font-display text-sm tracking-[0.3em] uppercase text-primary-foreground hover:bg-primary/80 transition-colors duration-300"
            >
              Buy Book
            </button>
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <ScrollReveal delay={0.5} className="mt-16">
            <div>
              {[
                {
                  title: "Details",
                  content:
                    "Softcover with a gloss finish. 200 pages, 5 × 8 inches, printed on 148gsm uncoated stock.",
                },
                {
                  title: "Shipping",
                  content:
                    "Ships within 5–7 business days. Free worldwide tracked shipping included.",
                },
                {
                  title: "Returns",
                  content:
                    "30-day return policy. Book must be in original condition.",
                },
              ].map((item, i) => (
                <details key={i} className="border-t border-border group">
                  <summary className="flex items-center justify-between py-5 cursor-pointer font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors list-none">
                    {item.title}
                    <Plus className="w-3 h-3 group-open:rotate-45 transition-transform duration-300" />
                  </summary>
                  <p className="pb-5 text-muted-foreground font-body text-sm leading-relaxed">
                    {item.content}
                  </p>
                </details>
              ))}
              <div className="border-t border-border" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Product;