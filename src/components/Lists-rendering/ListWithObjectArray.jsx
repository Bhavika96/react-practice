import {persons} from './person.js'

const List2 = () => {

    return (
        <>
            {
            persons.map(person => <h2 key={person.id}>I am {person.name}. My age is {person.age} &amp; I love to play {person.game}</h2>)
                
            }
        </>
    )
}
export default List2;