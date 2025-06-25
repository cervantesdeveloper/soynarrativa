import { Link } from "react-router-dom";
import Btn from "../components/Btn";

const About = () => {
  return (
    <main className='about'>
      <section className="container">

      <div className='heading'>
        <h1>¿Quién está detrás?</h1>
      </div>

      <div className="about__text">

        <div className="about__about">
          <h2><i>Hola, soy Ale.</i></h2>
          <p>Desde siempre he creído en el poder de una buena historia. Narrativa nació de esa pasión: la de crear marcas que no solo se vean bien, sino que conecten, inspiren y se queden en la memoria.
          <br /><br />
          Después de más de 10 años trabajando en distintas empresas y proyectos creativos, decidí dar el salto y formar este colectivo donde puedo poner todo lo que soy y todo lo que he aprendido al servicio de las marcas que buscan algo más: un propósito, una voz, un camino claro.
          <br /><br />
          Aquí estoy, lista para ayudarte a contar la historia de tu marca de la manera más auténtica y con una estética que la haga brillar.</p>
        </div>

        <div className="about__adn">
          <img src="./Ale.jpeg" alt="Alejandra" />
        </div>
      </div>
      </section>

      <section className="process">
        <h2>Nuestro Proceso...</h2>
        <dl className="process_steps">
          <div className="process_step">
            <h3>1. Encuentro</h3>
            <p>Conversamos contigo para entender la esencia de tu proyecto y definir el punto de partida.</p>
          </div>
          
          <div className="process_step">
            <h3>2. Exploración</h3>
            <p>
            Investigamos y desarrollamos dos rutas visuales que traduzcan tu visión en una narrativa estratégica.
            </p>
          </div>

          <div className="process_step">
            <h3>3. Dirección + Diseño</h3>
            <p>
            Con la dirección elegida, diseñamos bajo el Sonte Branding Method: una propuesta clara, estética y con propósito.
            </p>
          </div>

          <div className="process_step">
            <h3>4. Entrega</h3>
            <p>
            Al finalizar, te entregamos todos los archivos listos para que tu marca comience a contar su historia.
            </p>
          </div>

        </dl>
      </section>

      <section className="call-to-action">
        <h2>¿Estás listo para trabajar con Narrativa?</h2>
        <Link to="contact">
          <Btn text="CONTACTÁNOS"/>
        </Link>
      </section>
      
    </main>
  )
}

export default About
