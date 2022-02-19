import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Footer.scss'
const Footer = () => {
    return (
        <div className="f">
            <div className="icons">
                <a target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: "none" }} href="https://github.com/JonathanMRuiz"><i><FaGithub /></i></a>
                <a target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: "none" }} href="https://www.linkedin.com/in/jonathanmruiz/"><i><FaLinkedin /></i></a>
                <a target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: "none" }} href="https://www.instagram.com/joni.m.r"><i><FaInstagram /></i></a>
                
            </div>
            <div className="text"><p>Jonathan Ruiz</p></div>
        </div>
    )
}

export default Footer