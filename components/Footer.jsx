import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-4">
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <a
          href="https://github.com/Ronhawes"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>
        <a
          href="https://twitter.com/Ronhawes01"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ronnie-maganga-a63b7b23a"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>
        <a
          href="https://www.youtube.com/@ronhawes3453"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineYoutube
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
