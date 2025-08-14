import Button from './Button'


// adding new Persons
const Person = ({person, onDelete}) => { 
    return(
        <div>
            <span>{person.name} {person.number}</span>
            <Button onClick={() => onDelete(person)} text="delete"/>
        </div>
    )
}


export default Person