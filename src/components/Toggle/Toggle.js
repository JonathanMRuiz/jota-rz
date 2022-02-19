import './Toggle.scss';
import { FaSun, FaMoon } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../../context'


const Toggle = () => {
   

    const theme = useContext(ThemeContext);
    
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        
        <div className="container">
        <div className="toggle">
            <span className="sunIcon"><FaSun /></span>
            <span className="moonIcon"><FaMoon /></span>
            <div className="toggleBtn" onClick={handleClick} style={{left:theme.state.darkMode ? 0 : 42}}></div>
        </div>
        </div>
    )
}

export default Toggle;