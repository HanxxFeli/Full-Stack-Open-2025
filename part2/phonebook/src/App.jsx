import { useState } from "react";
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => { 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('') // controlling the form input element
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('') // for filtering people by name

  // adding a new contact 
  const addContact = (event) => { 
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    // check if the contact is already existing. First check if the type is a string. If so, check if it matches
    const contactExists = persons.some(person => 
      person.name.toLowerCase() === personObject.name.toLowerCase()
    )
    console.log(contactExists)

    // if contact exists, send an alert. Otherwise, add the person to the phonebook
    if (contactExists) { 
      alert(`${newName} is already added to the phonebook`)
    } else { 
      // set the new contact 
    setPersons(persons.concat(personObject)) // add the object to the person list to be displayed
    setNewName('') // clear the input box to an empty string
    setNewNumber('')
    }
  }

  // handler for adding contacts
  const handleNewContact = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // handler for adding numbers
  const handleNewNumber = (event) => { 
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // handler for filtering people by name
  const handleNameFilter = (event) => { 
    let filterValue = event.target.value
    setNewFilter(filterValue)
    // console.log("filter value is", filterValue)

    // output filtered array of matching values
    const result = persons.filter(person => { 
      return (
        person.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    })

    // console.log("resulting array elements are", result)

    // person array will become the result array to display only the filtered results
    // console.log("the original data is", persons)
    result.length === 0 ? setFilteredPersons(persons) : setFilteredPersons(result)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onchange={handleNameFilter}/>

      <h2>add a new</h2>
      <PersonForm
        onSubmit={addContact}
        newName={newName}
        handleNewContact={handleNewContact}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>
      <div>
        {filteredPersons.length === 0 ? 
        persons.map(person => <Person key={person.name} person={person}/>) // display original persons list if filterPersons is empty
        : filteredPersons.map(person => <Person key={person.name} person={person}/>) // display filterPersons if > 0
        }
      </div>
    </div>
  )
}

export default App