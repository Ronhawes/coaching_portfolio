import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div className="flex h-16 flex-col items-center justify-center md:hidden">
        <ul className="flex flex-row items-center space-x-6">
          <li>
            <a
              href="https://github.com/Ronhawes"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub
                className="cursor-pointer text-white  transition-transform hover:-translate-y-1 "
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
                className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
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
                className="cursor-pointer text-white  transition-transform hover:-translate-y-1"
                size={25}
              />
            </a>
          </li>
          <li>
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
    </footer>
  )
}

export default Footer
