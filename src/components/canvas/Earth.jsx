import React, { useState, useEffect } from "react";
import earth from "/planet/earth.png";

const EarthCanvas = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const minZoom = 0.4;
  const maxZoom = 1.4;
  const handleMouseScroll = (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      setZoomLevel((prevZoom) => Math.max(minZoom, prevZoom - 0.1));
    } else {
      setZoomLevel((prevZoom) => Math.min(maxZoom, prevZoom + 0.1));
    }
  };

  useEffect(() => {
    const img = document.getElementById("earth-image");
    img.addEventListener("wheel", handleMouseScroll, { passive: false });

    return () => {
      img.removeEventListener("wheel", handleMouseScroll);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={earth}
        alt="Earth"
        id="earth-image"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${zoomLevel})`,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default EarthCanvas;
