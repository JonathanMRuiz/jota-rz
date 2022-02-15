import './Contact.scss'
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import BtnDownload from '../BtnDownload/BtnDownload';


const Contact = () => {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h48esit', 'template_hv4g62d', formRef.form.current, 'user_w4ytvAFzwFah4Y0RELf3q')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });



  }
  return (

    <div className="contact">

      <div className="left">

        <div className="icons">


          <span><i><FaMobileAlt /></i>(+54)011 66409685</span>



          <span><i><AiOutlineMail /></i>ruizmjonathan@hotmail.com</span>



          <span><i><IoLocationOutline /></i>Buenos Aires, Argentina</span>

          <BtnDownload/>
        </div>
      </div>
      <div className="right">

        <form className="form" ref={formRef} onSubmit={handleSubmit} >
          <input type="email" style={{ backgroundColor: darkMode && "#222" }} placeholder="Email" name="email" autoComplete="off" />
          <input type="text" style={{ backgroundColor: darkMode && "#222" }} placeholder="Subject" name="subject" autoComplete="off" />
          <textarea rows="5" style={{ backgroundColor: darkMode && "#222" }} type="text" placeholder="Your message" name="message" autoComplete="off" />
          <button type="submit">Submit</button>

        </form>


      </div>
    </div>



  )
}

export default Contact