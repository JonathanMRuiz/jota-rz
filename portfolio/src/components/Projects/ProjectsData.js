import rickandmorty from '../Images/rickandmorty.png'
import foodstore from '../Images/foodstore.png'
import crud from '../Images/crud.png'
import portfolio from '../Images/myPortfolio.png'

const projectsData = [
    {
        img: rickandmorty,
        title:"Rick and morty API",
        desc:"This project was coded in React JS with HTML5, CSS3, Bootstrap, Rick and Morty API, hooks to show and filter content API and also has responsive design",
        age:"08/2021",
        link:"http://rick-and-morty-app-red.vercel.app/"
        
    },
    {
        img:foodstore,
        title:"Food Store",
        desc:"This project was coded in React JS with HTML5, Styled-components, Material UI, react-router-dom and has responsive design",
        age:"10/2021",
        link:"https://food-store-five.vercel.app/"
        

    },
    {
        img:crud,
        title:"CRUD of conctacs",
        desc:"This project was coded in React JS with HTML5, CSS3, Boostrap, react-router-dom, API Json, Json-server, Font Awesome ",
        age:"02/2022",
        link:"https://github.com/JonathanMRuiz/crud"
        

    }
    ,
    {
        img:portfolio,
        title:"My portfolio",
        desc:"This project was coded in React JS with HTML5, Sass, Font Awesome, react-redux and context hooks and has responsive design",
        age:"02/2022",
        link:"https://github.com/JonathanMRuiz/jota-rz/tree/main/portfolio"
        

    }
   
]; 

export default projectsData;