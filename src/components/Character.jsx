import img from "../images/imageharry.jpg"
function Character ({char}) {

    return( 
        <article>
            <h2>{char.name}</h2>
            <p>{char.gender}</p>
            {char.image ? <img className="imageCard" src={char.image} alt={`Imagen de ${char.name}`}/> :<img className="imageCard" src={img}/>}
        </article>
    )
}

export default Character;