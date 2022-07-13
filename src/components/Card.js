import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Card = ({ character }) => {
  return (
    <Link to={`/details/${character.id}`}>
      <motion.div
        className={
          " block max-w-[225px] overflow-hidden cursor-pointer"
        }
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img
          src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
        />
        <div className=" py-2 px-2 text-xs  rounded-br-xl rounded-tr-xl  text-gray-700">
          <h1>{character.name}</h1>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
