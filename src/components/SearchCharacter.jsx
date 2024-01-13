function SearchCharacter ({changeSearch,search,filterCharacter}) {
    const handleInput = (event) => {
        changeSearch((event.target.value))
    };
    const handleCancel = (event) => {
        event.preventDefault();
        changeSearch((""));
        setFilteredCharacter
    };
    const handleSearch = (event) => {
        event.preventDefault();
        filterCharacter();                                                                                                                     

    };
    return (
        <>
            <form>
                <label htmlFor="">Indica el personaje</label>
                <input type="text" name="" id="" onChange={handleInput} value={search}></input>
                <input type="submit" value="Buscar" onClick={handleSearch}/>
                <input type="submit" value="Cancelar" onClick={handleCancel}/>
            </form>
        </>
    )
}

export default SearchCharacter;