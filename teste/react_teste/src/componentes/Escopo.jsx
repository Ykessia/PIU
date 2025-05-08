import "./Escopo.css"

function Escopo (){
    const label = "Clique aqui"
    function handleClick(){
        return(
            alert("Alerta")
        )
    }
    return (
        <>
        <div>
            <h2>Teste de componentes</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nemo temporibus ratione, accusamus aliquam tenetur corporis excepturi error doloremque dolorem sequi, ullam deserunt amet deleniti sed, corrupti illo reprehenderit soluta.</p>
        </div>
        <div>
            <button onClick={()=>console.log("você clicou aqui!!")}>{label}</button>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo