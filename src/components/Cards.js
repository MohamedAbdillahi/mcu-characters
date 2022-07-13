import React from "react";
import Card from "./Card";

import { motion } from "framer-motion";

const Cards = ({ characters }) => {
  return (
    <motion.div
      className="grid grid-cols-3 md:grid-cols-5 gap-8 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {characters.map((character) => (
        <Card character={character} key={character.name} />
      ))}
    </motion.div>
  );
};

export default Cards;
