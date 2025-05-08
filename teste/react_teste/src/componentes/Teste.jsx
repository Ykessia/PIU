import "./Teste.css"

function Teste (){
    const label = "Mensagem"
    function handleClick(){
        return(
            <>
            <h5>DEU CERTO!!!</h5>
            </>
        )
    }
    return (
        <>
        <div>
            <h2>Testando aqui</h2>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>

        </>
    )
}

export default Teste