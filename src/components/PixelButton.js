import React, { useEffect, useRef } from "react";
import "../css/PixelButton.css"
const PixelButton = ({ onClick, children, color = "#00ffe5", width = 180, height = 60 }) => {
  const buttonRef = useRef();

  useEffect(() => {
    const button = buttonRef.current;
    const pixelContainer = button.querySelector(".pixel-container");

    const pixSize = 10;
    const cols = Math.floor(width / pixSize);
    const rows = Math.floor(height / pixSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.left = `${col * pixSize}px`;
        pixel.style.top = `${row * pixSize}px`;

        const delay = Math.random() * 0.5;
        pixel.style.transitionDelay = `${delay}s`;

        const tx = (Math.random() - 0.5) * 30;
        const ty = (Math.random() - 0.5) * 30;

        pixel.style.setProperty("--tx", `${tx}px`);
        pixel.style.setProperty("--ty", `${ty}px`);

        pixelContainer.appendChild(pixel);
      }
    }
  }, [width, height]);

  return (
    <button
      ref={buttonRef}
      className="pixel-btn"
      onClick={onClick}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span>{children}</span>
      <div className="pixel-container" style={{ "--clr": color }}></div>
    </button>
  );
};

export default PixelButton;