import React from "react";
import { motion } from "framer-motion";

const TransitionWrapper = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const pageTransition = {
    duration: 1,
    type: "tween",
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
