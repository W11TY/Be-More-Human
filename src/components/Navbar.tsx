import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 px-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}>

      <span className="font-display text-sm md:text-base tracking-[0.3em] text-foreground font-medium">

      </span>
    </motion.nav>);

};

export default Navbar;