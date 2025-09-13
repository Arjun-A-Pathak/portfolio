import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 flex items-center gap-3"
      >
        <Sparkles className="w-6 h-6" /> {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

export default Section;