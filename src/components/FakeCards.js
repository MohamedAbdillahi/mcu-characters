import React from "react";
import FakeCard from "./FakeCard";
import _ from "lodash";
import { motion } from "framer-motion";
const FakeCards = () => {
  return (
    <motion.div
      className="grid grid-cols-3 md:grid-cols-5 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {_.range(20).map((character) => (
        <FakeCard  key={character} />
      ))}
    </motion.div>
  );
};

export default FakeCards;
