"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const images = ["slide_1.jpg", "slide_2.jpg", "slide_3.jpg", "slide_4.jpg"];

export default function Slideshow() {
  return (
    <Fade duration={2000} indicators infinite arrows={false}>
      {images.map((each, index) => (
        <img
          key={index}
          style={{ width: "100%", height: "500px" }}
          src={each}
        />
      ))}
    </Fade>
  );
}
