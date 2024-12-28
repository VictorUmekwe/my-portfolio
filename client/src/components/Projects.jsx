import projectItems from "../assets/projectItems"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className=' py-5' id='projects'>
        <div className=' container'>
            <h2 className=' mb-5 text-center'>My Projects</h2>
            <div className=' row g-4'>
                 {
                    projectItems.map((project) => <ProjectCard key={project.id} projectImage={project.projectImg} projectName={project.projectTitle} projectDesc={project.projectDescription}/>  )
                 }
            </div>
        </div>
    </div>
  )
}

export default Projects