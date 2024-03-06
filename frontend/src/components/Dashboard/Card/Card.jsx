import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

const Card = (props) => {
  return (
    <AnimateSharedLayout>
      <CompactCard param={props} />
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param }) {
  return (
    <motion.div
      className="AppGlass2 shadow-md rounded p-4"
      layoutId="expandableCard"
    >
      <span className="AppGlass2 text-gray-700 font-semibold">{param.title}</span>
      <div className="text-blue-500 text-2xl">{param.value}</div>
    </motion.div>
  );
}

export default Card;