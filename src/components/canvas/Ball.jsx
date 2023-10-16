import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const BallCanvas = ({ icon, index }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[150px] w-[130px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-[130px] green-pink-gradient p-[1px] rounded-[55px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[55px] py-5 h-[130px] flex justify-evenly items-center flex-col"
          style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
        >
          <img src={icon} alt="Technology Icon" />
        </div>
      </motion.div>
    </Tilt>
  );
};

export default BallCanvas;
