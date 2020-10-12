import React from "react";
import "./BoardGames.css";
import { motion } from "framer-motion";

function BoardGames({ name, image, description }) {
  return (
    <motion.div layout className="card">
      <div className="card-header">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default BoardGames;
