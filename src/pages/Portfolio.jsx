import data from "../assets/projects.json";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  const images = data.map(img => img);


  return (
    <main className='portfolio'>
      {
        images.map(el =>{
          return(
            <PortfolioCard 
              key={el.id}
              img={el.image}
              title={el.title}
              link={el.id}
            />
          )
        })
      }
    </main>
  )
}

export default Portfolio
