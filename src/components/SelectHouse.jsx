

function SelectHouse ({changeHouse, house}) {
    const handleChange = (event) => {
        changeHouse(event.target.value)
    }

    return (
        <select name="id" onChange={handleChange} value={house}> 
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
        </select>
    )
}

export default SelectHouse;