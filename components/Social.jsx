import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Social = () => {
  return (
    <div className="hidden md:fixed md:bottom-0 md:z-10 md:block md:w-32 ">
      <ul className=" flex flex-col items-center space-y-6 after:block after:h-28 after:w-0.5 after:bg-white">
        <li>
          <a href="https://github.com/Ronhawes" target="_blank" rel="noreferrer">
            <AiOutlineGithub
              className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
              size={25}
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Ronhawes01"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter
              className="cursor-pointer text-white transition-transform hover:-translate-y-1"
              size={25}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ronnie-maganga-a63b7b23a"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin
              className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
              size={25}
            />
          </a>
        </li>
        <li className="last:pb-6">
          <a
            href="https://www.youtube.com/@ronhawes3453"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineYoutube
              className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
              size={25}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
