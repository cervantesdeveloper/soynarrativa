import data from "../assets/projects.json";

const HomeCarousel = () => {
    // const images = data.map(img => img.image);
    const images = data.filter(img => parseInt(img.id) <= 5);

    const ids = data.map(img=> parseInt(img.id))
    console.log(images)
    return (
        <section className='home-hero__gallery'>
            <div className="home-hero__carousel">
                {
                    images.map(el =>{
                        return (
                            <div className="home-hero__image" key={el.id}>
                                <img src={el.image} alt={el.title} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HomeCarousel