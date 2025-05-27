import { useState} from "react";

const Contact = () => {

    const [errors, setErrors] = useState({});

    const submitHandler = (formData)=>{
        const data = {
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message")
        }
    } 

    const handleChange = (e)=>{
        let value = e.target.value,
            pattern = e.target.pattern || "^.{1,255}$",
            regEx = new RegExp(pattern),
            message = e.target.nextElementSibling;

            if(value == ""){
                message.classList.add("empty");
                setErrors(preValue=> {
                    return(
                       {...preValue, [e.target.id] : "empty"}
                    )
                })
            } else if (!regEx.exec(value)){
                message.classList.add("error");
                setErrors(preValue=> {
                    return(
                        {...preValue, [e.target.id] : "error"}
                    )
                })
            } else {
                message.classList.remove("error");
                message.classList.remove("empty");

                setErrors(preValue=>{
                    return(
                        {...preValue, [e.target.id] : "fullfill"}
                    )
                })
            }
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
                        <strong>¿Tienes alguna pregunta? ¿Tienes algún proyecto en mente? </strong> <br/>Contáctanos hoy, ¡estamos aquí para ayudarte!
                    </p>
                </div>

                <div className="contact__form">
                    <form action="https://usebasin.com/f/a2025de19ff8" method="POST">
                        <label htmlFor="name">Nombre(s)*</label>
                        <input 
                            tabIndex="1"
                            type="text" 
                            name="name" 
                            id="name" 
                            required
                            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                            onChange={handleChange}
                        />
                        <p>
                            {
                                errors.name == "empty"
                                ? "Este campo es obligatorio. Por favor, ingresa tu nombre."
                                : "El nombre solo debe contener letras. Por favor, verifica que esté escrito correctamente."
                            }
                        </p>

                        <label htmlFor="lastname">Apellido(s)*</label>
                        <input 
                            tabIndex="2"
                            type="text" 
                            name="lastname" 
                            id="lastname" 
                            required
                            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                            onChange={handleChange}
                        />
                        <p >
                            {
                                errors.lastname == "empty"
                                ? "Este campo es obligatorio. Por favor, ingresa tu apellido"
                                : "El apellido parece tener un formato no válido. Asegúrate de no incluir números ni caracteres especiales."
                            }
                        </p>

                        <label htmlFor="email">E-mail*</label>
                        <input 
                            tabIndex="3"
                            type="email" 
                            name="email" 
                            id="email" 
                            required
                            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                            onChange={handleChange}
                        />
                        <p >
                            {
                                errors.email == "empty"
                                ? "Necesitamos tu correo electrónico para continuar. Por favor, no dejes este campo vacío."
                                : "El formato del correo no es válido. Asegúrate de incluir un '@' y un dominio como ejemplo@correo.com."
                            }
                        </p>

                        <label htmlFor="subject">Asunto*</label>
                        <input 
                            tabIndex="4"
                            type="text" 
                            name="subject" 
                            id="subject" 
                        />

                        <label htmlFor="message">Mensaje</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            required
                            onChange={handleChange}
                        >
                        </textarea>
                        <p >
                             {
                                errors.message == "empty"
                                ? "El campo de mensaje no puede estar vacío. Cuéntanos brevemente qué necesitas o en qué podemos ayudarte."
                                : "¡Ups! El mensaje excede el límite permitido. Intenta resumirlo en 255 caracteres o menos."
                            }
                        </p>

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
