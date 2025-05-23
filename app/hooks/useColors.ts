import { useState } from "react";


export function useColors() {
  const [color, setColor] = useState("rgb(255, 255, 255)");

  const switchColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return { color, switchColor };
}