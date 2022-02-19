import './Projects.scss';
import projectData from './ProjectsData'
const Projects = () => {
  return (
    <div className="projects">


      {projectData.map((item, id) => (
        
          <div className="containerProject">
            <div className="borderProject">
              <a rel="noreferrer" target="_blank" href={item.link}><img className="imgProject" src={item.img} alt=".." /></a>
              <p className="ageProject">{item.age}</p>
            </div>

            <div className="textProject">
              <h1 className="titleProject">{item.title}</h1>
              <p className="descProject">{item.desc}</p>
            </div>


          </div>
        
      ))}

    </div>

  )
}

export default Projects