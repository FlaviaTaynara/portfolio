import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechnologies, setVisibleTechnologies] = useState(10);

  const loadMore = () => {
    setVisibleTechnologies((prevVisible) => prevVisible + 10);
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div
            className="w-28 h-28"
            key={index}
            style={{ display: index < visibleTechnologies ? "block" : "none" }}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {visibleTechnologies < technologies.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="bg-gradient-to-r from-green-300 to-pink-500 text-white py-1 px-3 rounded-full"
            style={{ padding: "5px", margin: "25px 0" }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
