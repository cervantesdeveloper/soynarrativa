import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import data from "../assets/projects.json";


const ProjectDetail = () => {
    const params = useParams();
    const [project, setProject] = useState(null);

    useEffect(()=>{
        data.map(el=>{
            if(el.id == params.id){
                setProject({
                    id: el.id,
                    title: el.title,
                    img: el.image,
                    service: el.service,
                    description: el.description,
                    folder: el.gallery_folder
                })
            }
        })
    },[params.id]);

    const Detail = ()=>{
        return(
            <main className="project-detail">
                <img src={project.img} alt={project.title} />
                <div className="project-detail__heading">
                    <h1>{project.title}</h1>
                    <p>{project.service}</p>
                </div>
                <div className="project-detail__description">
                    <h2>Nuestra contribución</h2>
                    <p>
                        {project.description}
                    </p>
                </div>
                <div className="project-detail__gallery">
                    <img src={`${project.gallery_folder}/01.webp`} alt={`${project.title} image 01`} />
                    <img src={`${project.gallery_folder}/02.webp`} alt={`${project.title} image 02`} />
                    <img src={`${project.gallery_folder}/03.webp`} alt={`${project.title} image 03`} />
                    <img src={`${project.gallery_folder}/04.webp`} alt={`${project.title} image 04`} />
                    <img src={`${project.gallery_folder}/05.webp`} alt={`${project.title} image 05`} />
                </div>
            </main>
            
        )
    }

    return (
        
        !project
        ? <h1>Loading...</h1>
        : <Detail />
        
    )
}

export default ProjectDetail
