import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import data from "../assets/projects.json";


const ProjectDetail = () => {
    const params = useParams();
    const [project, setProject] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(()=>{
        data.map(el=>{
            if(el.id == params.id){
                setProject({
                    id: el.id,
                    title: el.title,
                    img: el.image,
                    service: el.service,
                    description: el.description,
                    folder: el.gallery_folder,
                    total_images: el.total_images
                });

                for(let i = 2; i <= el.total_images; i++){
                    setImages(preVal=>{
                        return (
                            [...preVal, <img key={i} src={`${el.gallery_folder}/${i}.webp`} />]
                        )
                    })
                    
                }
                
            }
        })

    },[params.id]);
    
    return (
        !project
        ? <h1>Loading...</h1>
        : (
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
                    {images}
                </div>
            </main> 
        )
        
    )
}

export default ProjectDetail
