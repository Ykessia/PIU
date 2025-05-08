import "./Teste.css"

function Teste (){
    const label = "Mensagem"
    function handleClick(){
        return(
            <div>
                <h1>oii</h1>
            </div>
        )
    }
    return (
        <>
        <div id="teste">
            <h2>Testando aqui</h2>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>

        </>
    )
}

export default Teste