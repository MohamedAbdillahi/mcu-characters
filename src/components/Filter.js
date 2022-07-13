import React, { useState } from "react";
import InputHints from "react-input-hints";

import { motion } from "framer-motion";
import SearchItem from "./SearchItem";

const Filter = () => {
  const [show, setShow] = useState(false);
  const [me, setMe] = useState(false);
  const [characters, setCharacters] = useState([]);

  const handleSearch = (searchString) => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?offset=0&nameStartsWith=${searchString}&apikey=6a85c8d6f249a662ea39e8012ee02359`
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" mb-8 relative z-100">
      <div className="flex ">
        <InputHints
          type="text"
          id="search-input"
          name="search-input"
          className={`bg-slate-300 py-2 px-2 rounded-bl-md rounded-tl-md placeholder:text-gray-500 focus:bg-slate-200 text-gray-600  w-80  ${
            me ? "md:w-9/12" : ""
          } md:focus:w-9/12 transition-all duration-300 text-sm`}
          placeholders={[
            "Steve Rogers (Captain America)",
            "Tony Stark (Iron Man)",
            "Peter Parker (Spider-Man)",
            "Bruce Banner (Hulk)",
          ]}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <button className="bg-slate-500 hover:bg-slate-600 text-white px-4 rounded-br-md rounded-tr-md">
          Search
        </button>
      </div>
      {(show || me) && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-white w-full md:w-9/12 mt-2 absolute z-0 min-h-[50px] rounded-md px-6 py-2 shadow-md border-[1px] flex flex-col gap-2"
          onMouseEnter={() => setMe(true)}
          onMouseLeave={() => setMe(false)}
        >
          {characters.length !== 0 &&
            characters.map((character) => (
              <SearchItem
                key={character.name}
                id={character.id}
                name={character.name}
                src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
                description={character.description}
                hider={()=>{
                    setShow(false);
                    setMe(false)
                }}
              />
            ))}
          {characters.length === 0 && (
            <div className="text-center">
              <h1 className="text-gray-700">Nothing found!</h1>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Filter;
