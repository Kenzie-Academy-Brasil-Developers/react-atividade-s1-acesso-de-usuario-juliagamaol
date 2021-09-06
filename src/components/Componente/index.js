//prop = say Hello
//props.sayHello
const MeuComponente = (props) =>{
    //sem retornar
    const {sayHello, nome} = props
    return(
        <div>
            {sayHello ? `Hello ${nome}`: 'PropssayHello não encontrada'}
        </div>
        
    )
}

export default MeuComponente