import {useState } from "react";
import Person from './components/Person'

const App = () => { 
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('') // controlling the form input element

  // adding a new contact 
  const addContact = (event) => { 
    event.preventDefault()
    const personObject = {
      name: newName
    }

    // set the new contact 
    setPersons(persons.concat(personObject)) // add the object to the person list to be displayed
    setNewName('') // clear the input box to an empty string
  }

  // handler for adding contacts
  const handleNewContact = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNewContact}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <Person key={person.name} person={person}/>
        )}
      </div>
    </div>
  )
}

export default App