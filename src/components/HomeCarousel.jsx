import React from 'react';

import data from "../assets/projects.json";
console.log(data[0].image);

const HomeCarousel = () => {
    const images = data.map(img => img.image);
    console.log(images)

    return (
        <section className='home-hero__gallery'>
            <div className="home-hero__carousel">
                {
                    images.map(el =>{
                        return (
                            <div className="home-hero__image" key={el}>
                                <img src={el} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HomeCarousel