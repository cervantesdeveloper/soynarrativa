import { Link } from 'react-router-dom'

const PortfolioCard = ({title, img, link}) => {
  return (
    <Link to={`/portfolio/${link}`} aria-label='Ver más detalles sobre este proyecto'>
        <figure className='card-portfolio'>
        <img src={img} alt={title} />
        <div className="card-portfolio__title">
            <h4>{title}</h4>
        </div>
        </figure>
    </Link> 
    
  )
}

export default PortfolioCard
