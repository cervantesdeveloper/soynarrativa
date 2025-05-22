import data from "../assets/projects.json";

const HomeCarousel = () => {
    const images = data.map(img => img);

    return (
        <section className='home-hero__gallery'>
            <div className="home-hero__carousel">

                <div className="home-hero__image" key={images[0].id}>
                    <img src={images[0].image} alt={images[0].title} />
                </div>

                <div className="home-hero__image" key={images[8].id}>
                    <img src={images[8].image} alt={images[8].title} />
                </div>

                <div className="home-hero__image" key={images[11].id}>
                    <img src={images[11].image} alt={images[11].title} />
                </div>

                <div className="home-hero__image" key={images[10].id}>
                    <img src={`${images[10].gallery_folder}/2.webp`} alt={images[10].title} />
                </div>

                <div className="home-hero__image" key={images[12].id}>
                    <img src={`${images[12].gallery_folder}/5.webp`} alt={images[12].title} />
                </div>
                        
            </div>
        </section>
    )
}

export default HomeCarousel