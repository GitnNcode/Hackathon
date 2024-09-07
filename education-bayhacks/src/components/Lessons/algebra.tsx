// src/Algebra.tsx
import React, { useState } from "react";
import Board from "./leaderboard.png";
import "./algebra.css";
import P5Wrapper from "../../P5Wrapper.tsx";
import p5Sketch from "../../p5sketch.ts";

const Algebra: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  return (
    <div className="container">
      <div className="left-half">
        <div className="top-section">
          <h2>Video Lesson</h2>
        </div>
        <div className="bottom-section">
          <img src={Board} alt="Leaderboard" className="leaderboard-image" />
        </div>
      </div>
      <div className="right-half">
        <h2>Video Lessons</h2>
        <ul className="video-list">
          <li onClick={() => setSelectedLesson("Algebra 1.1")}>Algebra 1.1</li>
          <li onClick={() => setSelectedLesson("Algebra 1.2")}>Algebra 1.2</li>
          <li onClick={() => setSelectedLesson("Algebra 1.3")}>Algebra 1.3</li>
          <li onClick={() => setSelectedLesson("Algebra 1.4")}>Algebra 1.4</li>
          <li onClick={() => setSelectedLesson("Algebra 1.5")}>Algebra 1.5</li>
          <li onClick={() => setSelectedLesson("Algebra 1.6")}>Algebra 1.6</li>
          <li onClick={() => setSelectedLesson("Algebra 1.7")}>Algebra 1.7</li>
        </ul>
        {selectedLesson && (
          <div className="p5-container">
            <P5Wrapper sketch={p5Sketch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Algebra;
