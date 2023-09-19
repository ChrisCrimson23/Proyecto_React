import { useRef, useState } from "react"
import './formulario_styles.css'

function Formulario () {

    const [form, setForm] = useState ({nombre:"", apellidop:"", apellidom:"", numtel:"", direccion:"", edad:"", email:"", vehiculo:"",})
    const nombre = useRef ()
    const apellidop = useRef ()
    const apellidom = useRef ()
    const numtel = useRef ()
    const direccion = useRef ()
    const edad = useRef ()
    const email = useRef ()
    const vehiculo = useRef ()

    const handleClick = (event) => {
        event.preventDefault () 
            if (nombre.current !== undefined)   {
                 setForm ((prevState) => ({
                    ...prevState, nombre: nombre.current.value 
                })) 
            } 
            if (apellidop.current !== undefined) {
                setForm ((prevState) => ({
                    ...prevState, apellidop: apellidop.current.value
                }))
            }
            if (apellidom.current !== undefined) {
              setForm ((prevState) => ({
                ...prevState, apellidom: apellidom.current.value
              }))
            }
            if (numtel.current !== undefined) {
              setForm ((prevState) => ({
                ...prevState, numtel: numtel.current.value
              }))
            }
            if (direccion.current !== undefined) {
              setForm ((prevState) => ({
                ...prevState, direccion: direccion.current.value
              }))
            }
            if (edad.current !== undefined) {
              setForm ((prevState) => ({
                ...prevState, edad: edad.current.value
              }))
            }
            if (email.current !== undefined) {
              setForm ((prevState) => ({
                ...prevState, email: email.current.value
              }))
            }
            if (vehiculo.current !== undefined) {
              setForm ((prevState) => ({
                ...prevState, vehiculo: vehiculo.current.value
              }))
            }
            console.log ("form:", form)
    }

    return (
        <section className="Formulario">
          <article className="Datos">
        <h1>Formulario de Cuestionario</h1>
        <form id="cuestionarioForm">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" required ref={nombre} />
          <br />
          <label for="apellido_paterno">Apellido Paterno:</label>
          <input type="text" id="apellido_paterno" required ref={apellidop}/>
          <br />
          <label for="apellido_materno">Apellido Materno:</label>
          <input type="text" id="apellido_materno" required ref={apellidom}/>
          <br />
          <label for="numero">Número de teléfono:</label>
          <input type="tel" id="numero" required ref={numtel}/>
          <br />
          <label for="direccion">Dirección:</label>
          <input type="text" id="direccion" required ref={direccion}/>
          <br />
          <label for="edad">Edad:</label>
          <input type="number" id="edad" required ref={edad}/>
          <br />
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" required ref={email}/>
          <br />
          <label for="tipoVehiculo">Tipo de vehículo:</label>
          <select id="tipoVehiculo" required ref={vehiculo}>
            <option value="sedan">Sedan</option>
            <option value="van">Van</option>
            <option value="carga">Carga</option>
          </select>
          <br />
          <input  onClick={handleClick} id="Enviar" type="submit" value="Enviar" />
        </form>
      </article>
      </section>
    )
}
export default Formulario