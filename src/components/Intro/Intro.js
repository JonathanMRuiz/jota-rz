import './Intro.scss';
import Profile from '../Images/profile.png'
const Intro = () => {
  return (
    <div className="intro">
      <div className="introLeft">
        <div className="introLeftWrapper">
          <h2 className="introText">Hello, my name is</h2>
          <h1 className="introName">Jonathan Ruiz</h1>
          <div className="introTitle">
            <div className="introTitleWrapper">
              <div className="introTitleItem">Frontend Developer</div>
              <div className="introTitleItem">React JS</div>
              <div className="introTitleItem">Javascript</div>
            </div>
          </div>
          <p className="introDescription">
            HELLO, I'M A JR FRONT-END DEVELOPER. I AM 25 YEARS OLD. I LIKE TO
            LAYOUT WEB DESIGN USING REACT JS WHEN I CODE       
          </p>    
        </div>
        
          
       
        
      </div>

      <div className="introRight">
        <div className="introBg">
        </div>
        
        
      </div>
    </div>
  )
}

export default Intro;
