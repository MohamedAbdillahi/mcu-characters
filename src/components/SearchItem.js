import React from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
const SearchItem = ({ id, name, src, description, hider }) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        "flex gap-4 bg-gray-200 hover:bg-gray-300 transition-all py-2 px-4 rounded-lg cursor-pointer"
      }
      onClick={() => {
        navigate(`/details/${id}`);
        if (hider) {
          hider();
        }
      }}
    >
      <img src={src} alt="" className="w-16 h-16" />
      <div>
        <h2 className="text-gray-700">{name}</h2>
        <h3 className="text-gray-700 text-xs mt-2">
          {_.truncate(description, { length: 140 })}
        </h3>
      </div>
    </div>
  );
};

export default SearchItem;
