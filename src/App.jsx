import { useState } from "react";

const App = () => {
  // (1) Circle ON/OFF
  const [circleColor, setCircleColor] = useState("black");

  const toggleCircleColor = () => {
    setCircleColor(prev => (prev === "black" ? "yellow" : "black"));
  };

  // (2) Image toggle
  const [image, setImage] = useState("img1");

  const toggleImage = () => {
    setImage(prev => (prev === "img1" ? "img2" : "img1"));
  };

  // (3) Text toggle
  const [text, setText] = useState("Welcome");

  const toggleText = () => {
    setText(prev => (prev === "Welcome" ? "Hello User" : "Welcome"));
  };

  // (4) Shape toggle: square → circle → triangle → square
  const [shape, setShape] = useState("square");

  const toggleShape = () => {
    setShape(prev =>
      prev === "square"
        ? "circle"
        : prev === "circle"
        ? "triangle"
        : "square"
    );
  };

  return (
    <>
      {/* (1) Circle ON/OFF */}
      <div style={{ margin: "20px" }}>
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: circleColor,
            margin: "auto"
          }}
        ></div>
        <button
          style={{ marginTop: "10px", padding: "10px" }}
          onClick={toggleCircleColor}
        >
          {circleColor === "black" ? "Turn ON" : "Turn OFF"}
        </button>
      </div>

      {/* (2) Image toggle */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <img
          src={
            image === "img1"
              ? "https://wallpapers.com/images/featured/spiderman-p4ashmgeamn2mvkn.jpg"
              : "https://img.goodfon.com/wallpaper/big/4/44/avengers-doomsday-doctor-doom-2026-movies-marvel-cinematic-u.webp"
          }
          width={250}
          height={200}
          style={{ borderRadius: "15px", objectFit: "cover" }}
          alt="hero"
        />
        <br />
        <button
          style={{ marginTop: "10px", padding: "10px" }}
          onClick={toggleImage}
        >
          {image === "img1" ? "Show Avengers" : "Show Spiderman"}
        </button>
      </div>

      {/* (3) Text toggle */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <h2>{text}</h2>
        <button style={{ padding: "10px" }} onClick={toggleText}>
          Toggle Text
        </button>
      </div>

      {/* (4) Shape toggle */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <div
          style={{
            width: "150px",
            height: "150px",
            margin: "auto",
            backgroundColor: shape === "triangle" ? "transparent" : "blue",
            borderRadius: shape === "circle" ? "50%" : "0",
            clipPath:
              shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
          }}
        ></div>

        <button
          style={{ marginTop: "10px", padding: "10px" }}
          onClick={toggleShape}
        >
          Change Shape
        </button>
      </div>
    </>
  );
};

export default App;
