"use client";
import { useState } from "react";

export function Video() {
  const [videoStyles, setVideoStyles] = useState({
    transition: "all 1.5s",
    transform: "scale(2, 2)",
    marginLeft: "300px",
  });

  const playVideo = (e) => {
    e.target.play();
    setVideoStyles({
      transition: "all 1.5s",
      transform: "scale(2, 2)",
      marginLeft: "0px",
    });
  };
  const stopVideo = (e) => {
    e.target.pause();
    setVideoStyles({
      transition: "all 1.5s",
      transform: "scale(1, 1)",
      marginLeft: "0px",
    });
  };
  return (
    <div>
      <div style={{ margin: "30px" }}>
        <video
          onMouseEnter={playVideo}
          onMouseLeave={stopVideo}
          width="500"
          height="400"
          style={videoStyles}
          controls
        >
          <source
            src={"https://www.w3schools.com/html/mov_bbb.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
