import React from "react";
import "./title.css";
import { AiFillInstagram } from "react-icons/ai";
const Title = () => {
  return (
    <div className="title">
      <h1>3D Workshop</h1>
      <a href="https://www.instagram.com/3dwork_shop/">
        <AiFillInstagram />
      </a>
      <h2>Gallery</h2>
      <p>
        This is a website to showcase all the 3D model I created using blender
        app
      </p>
    </div>
  );
};

export default Title;
