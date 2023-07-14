import './CampoTexto.css'


const CampoTexto = (props)=>{

    let valor =''

    const aoDigitado = (evento) =>{
        valor= evento.target.value
        console.log(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
    }
export default CampoTexto