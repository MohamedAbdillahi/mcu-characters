import React from "react";

const Badge = ({ text, href }) => {
  return (
    <h3
      className="inline-block bg-slate-800 hover:bg-slate-800/90 transition duration-300 text-white px-2 py-[1px] text-sm rounded-sm mr-2 mb-2"
      href={href}
      target={"_blank"}
    >
      {text}
    </h3>
  );
};

export default Badge;
