const Contact = () => {

    const submitHandler = (formData)=>{
        const data = {
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message")
        }

        console.log(data);
    } 

    return (
        <main className='contact container'>
            <div className='heading'>
                <h1>CONTACTO</h1>
            </div>

            <div className="contact__main">
                <div className="contact__hero">
                    <h2>Hablemos de tus proyectos y veamos cómo podemos ayudarte.</h2>
                    <p>
                        En <strong>Narrativa</strong>, siempre estamos disponibles para discutir tus ideas, responder tus preguntas o guiarte a través de tus proyectos digitales. Si está buscando una solución a medida o simplemente quiere saber más sobre nuestros servicios, estaremos encantados de ayudarle.
                    </p>

                    <p>
                        <strong>¿Tienes alguna pregunta? ¿Tienes algún proyecto en mente? </strong>Contáctanos hoy, ¡estamos aquí para ayudarte!
                    </p>
                </div>

                <div className="contact__form">
                    <form action={submitHandler}>
                        <label htmlFor="name">Nombre(s)</label>
                        <input type="text" name="name" id="name" />

                        <label htmlFor="lastname">Apellido(s)</label>
                        <input type="text" name="lastname" id="lastname" />

                        <label htmlFor="email">e-mail</label>
                        <input type="email" name="email" id="email" />

                        <label htmlFor="subject">Asunto</label>
                        <input type="text" name="subject" id="subject" />

                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message"></textarea>

                        <button type="submit" className="btn btn__cta">
                            ENVIAR
                        </button>
                        
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact
