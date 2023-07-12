import './Botao.css'

const Botao = (props) =>{
    return (<button className='Botao'>
        {props.children}
        </button>)
}

export default Botao