import Character from "./Character";

function ListCharacters ({characters, filteredCharacter}) {

    return (<>   
            <h2>Listado de Personajes</h2>
        {filteredCharacter.map((char) => <Character char={char} key={char.id}/>)}
        </>)
    
}

export default ListCharacters;