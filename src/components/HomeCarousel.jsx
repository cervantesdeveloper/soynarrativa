import data from "../assets/projects.json";

const HomeCarousel = () => {
    const images = data.map(img => img.image);

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