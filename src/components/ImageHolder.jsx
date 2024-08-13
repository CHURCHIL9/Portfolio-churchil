import React from "react";
import profile_image from "../assets/profile-img.png";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const ImageHolder = ({ imageClassses }) => {
  return (
    <div className="w-full bg-[#172e2c] bg-opacity-40 py-6 flex flex-col justify-center items-center">
      <div className={` mb-4 lg:mx-4 rounded-full overflow-hidden ${imageClassses}`}>
        <img src={profile_image} className="w-full h-full object-cover" alt="My image" />
      </div>

      <div className="flex flex-col items-center gap-1 justify-center mb-4">
        <h3 className="text-xl font-bold tracking-widest">
          CHURCHIL OMONDI
        </h3>
        <p className="text-lg tracking-wider">Data Scientist & Statistician</p>
      </div>

      <div className="flex list-none justify-center gap-8">
        <li>
          <a href="#">
            <FaSquareFacebook size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagramSquare size={24} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/churchil-omondi-691992217" target="_blank">
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaXTwitter size={24} />
          </a>
        </li>
        <li>
          <a href="https://github.com/CHURCHIL9/" target="_blank">
            <FaSquareGithub size={24} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default ImageHolder;
