import React from "react";
import { motion } from "framer-motion";

const TransitionWrapper = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the section is visible
    transition={{ duration: 1, ease: "easeOut" }}
  >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
