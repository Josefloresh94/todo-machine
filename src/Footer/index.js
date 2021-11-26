import React from "react";
import './Footer.css'
import { SiPlatzi, SiLinkedin, SiGithub } from "react-icons/si"

function Footer() {
    return(
        <div className="Footer">
            <a href="https://platzi.com/p/jose-flores477/" target="__blank"><SiPlatzi
                className="icon"
            /></a>
            <a href="https://www.linkedin.com/in/jose-floresh94/" target="__blank"><SiLinkedin
                className="icon"
            /></a>
            <a href="https://github.com/Josefloresh94" target="__blank"><SiGithub
                className="icon"
            /></a>
        </div>
    );
}

export { Footer };