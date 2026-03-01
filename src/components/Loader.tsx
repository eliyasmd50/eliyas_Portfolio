import React, { useEffect, useState } from "react";
import "./Loader.css";

const words = ["eat", "sleep", "code", "repeat"];

// Array of VS Code-like colors
const bracketColors = [
  "#dcdcaa", // yellow
  "#569cd6", // blue
  "#c586c0", // purple
  "#9cdcfe", // light blue
  "#ce9178", // orange
];

const Loader: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [bracketColor, setBracketColor] = useState("#dcdcaa");

  useEffect(() => {
    const interval = setInterval(() => {
      // Update word index
      setIndex((prev) => (prev + 1) % words.length);

      // Pick a random color from the array
      const randomColor =
        bracketColors[Math.floor(Math.random() * bracketColors.length)];
      setBracketColor(randomColor);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-overlay">
      <h1 className="loader-text">
        {words[index]}
        <span className="loader-brackets" style={{ color: bracketColor }}>
          ()
        </span>
      </h1>
    </div>
  );
};

export default Loader;
