import React, { useEffect, useRef } from "react";
import { words } from "../constant/index.js";
import { introAnimation, collapseWords, progressAnimation } from "../utils/animations.js";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    if (timeline) {
      timeline.clear(); // Clear the timeline to ensure fresh animation
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
    }
  }, [timeline]);

  return (
    <div className="loader__wrapper">
      <div className="loader__progressWrapper">
        <div className="loader__progress" ref={progressRef}></div>
        <span className="loader__progressNumber" ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className="loader" ref={loaderRef}>
        <div className="loader__words">
          <div className="loader__overlay"></div>
          <div ref={wordGroupsRef} className="loader__wordsGroup">
            {words.map((word, index) => (
              <span key={index} className="loader__word">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
