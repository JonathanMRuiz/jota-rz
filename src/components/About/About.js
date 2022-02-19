import './About.scss'
import AboutImg from '../Images/about.png'
import {
    FaReact,FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt,
    FaFigma, FaBootstrap, FaPhp, FaPython,
    FaGithub, FaGitAlt, FaSass, FaJira, FaGitlab, FaTrello,FaNpm
}
    from "react-icons/fa";


const About = () => {
    const data = [
        {
            icon: <FaReact />,
            name:"React"

        },
        {
            icon: <FaNodeJs />,
            name:"Node"

        },
        {
            icon: <FaNpm/>,
            name:"Npm"

        }
        ,
        {
            icon: <FaJsSquare />,
            name:"Javascript"

        }
        ,
        {
            icon: <FaHtml5 />,
            name:"HTML5"

        }
        ,
        {
            icon: <FaCss3Alt />,
            name:"CSS3"

        }
        ,
        {
            icon: <FaBootstrap />,
            name:"Bootstrap"

        }
        ,

        {
            icon: <FaSass />,
            name:"Sass"
        }
        ,
        {
            icon: <FaFigma />,
            name:"Figma"
        }
        ,
        {
            icon: <FaPhp />,
            name:"Php"
        }
        ,
        {
            icon: <FaPython />,
            name:"Python"
        }
        ,
        {
            icon: <FaGithub />,
            name:"GitHub"
        }
        ,
        {
            icon: <FaGitAlt />,
            name:"Git"
        }
        ,
        {
            icon: <FaJira />,
            name:"Jira"
        }
        ,
        {
            icon: <FaTrello />,
            name:"Trello"
        }
        ,
        {
            icon: <FaGitlab />,
            name:"GitLab"
        }



    ]
    return (
        <div className="about">
            
            <div className="aboutLeft">

                <div className="aboutCard">
                    <img className="aboutImg" src={AboutImg} alt="" />
                </div>
            </div>
            
            <div className="aboutRight">
            <div className="col-xs-12">
                <div className="aboutDescriptionContainer">
                    <h1 className="aboutTitle">About Me</h1>
                    <p className="aboutSub">Frontend Developer specialized in React.</p>
                    <p className="aboutDescription">
                        A person proactive, self-taught person, always willing to learn. I like to learn and teach my knowledge once mastered.
                        Ready to work as a team, gain experience and improve my work performance.
                    </p>
                </div>
                <div className="skills">
                <h1 className="aboutSkill">Skills</h1>
                    <div className="aboutSkillContainer">
                        
                        {data.map((e,id) => (
                            <div className="borderSkill" key={id}>
                                <span  className="icon">{e.icon}</span>
                                <p>{e.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About