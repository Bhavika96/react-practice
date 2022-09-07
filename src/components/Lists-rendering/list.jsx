const List = () => {

    const fruits = ["Apple", "Banana", "Orange", "Pineapple"]

    return (
        <>
            {
                fruits.map(fruit => <h2 key={fruit}>{fruit}</h2>)
            }
        </>
    )
}

export default List