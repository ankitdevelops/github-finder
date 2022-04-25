import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-light text-center text-lg-start fixed-bottom text-white bg-dark mt-5">
      <div
        className="text-center p-3"
        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
      >
        © 2022 Copyright:
        <Link className="text-dark" to="">
          Gitubfinder
        </Link>
      </div>
    </div>
  );
};

export default Footer;
