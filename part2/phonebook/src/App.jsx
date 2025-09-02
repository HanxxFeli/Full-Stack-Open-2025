import { useState, useEffect } from "react";
import phoneBookService from './services/notes'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => { 
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('') // controlling the form input element
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('') // for filtering people by name
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // fetching data from the server using axios 
  useEffect(() => {
    phoneBookService
      .displayAll()
      .then(initialContacts => { 
        setPersons(initialContacts)
      })
  }, [])

  // check if filter exists, if yes, filter the person list
  const displayedContacts = filter
    ? persons.filter(person => 
      person.name.toLowerCase().includes(filter.toLowerCase())
    ) : persons

  // adding a new contact 
  const addContact = (event) => { 
    event.preventDefault()
    const personObject = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber,
    }

    // check if the contact is already existing. First check if the type is a string. If so, check if it matches
    const contactExists = persons.some(person => 
      person.name.toLowerCase() === personObject.name.toLowerCase()
    )
    console.log('Does the contact exist', contactExists)

    // if contact exists, send an alert. Otherwise, add the person to the phonebook
    if (contactExists) { 
      if (window.confirm(`${newName} is already added to the phonebook, replace the older number with a new one?`)) { 
        
        // identify the person to be updated 
        const existingContact = persons.find(person => person.name === newName)
        console.log("the existing contact details are:", existingContact)

        // create a new persons array containing the updated number
        const updatedPersons = persons.map(person => {
          if (person.id === existingContact.id) { 
            return {...person, number: newNumber}
          }
          return person
        })

        // update the person object with the matching name with the new number
        phoneBookService
          .updateContact(existingContact)
          .then(() => { 
            setPersons(updatedPersons)
            setNewName('')
            setNewNumber('')
            setSuccessMessage(`Updated number of ${existingContact.name}`)
          })
      }
    } 
    else { 
    // send data to the server to create the phone contact 
    phoneBookService
      .addContact(personObject)
      .then(createdContact => { 
        setPersons(persons.concat(createdContact))
        setNewName('')
        setNewNumber('')
        setSuccessMessage(`Added ${personObject.name}`)

        // adding a timeout for successfully adding a contact
        setTimeout(() => { 
          setSuccessMessage(null)
        }, 5000)
      })
    } // end of else statement
  } // end of addContact

  // handler for adding contacts
  const handleNewContact = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  } // handleNewContact

  // handler for adding numbers
  const handleNewNumber = (event) => { 
    console.log(event.target.value)
    setNewNumber(event.target.value)
  } // handleNewNumber

  // handler for filtering people by name
  const handleNameFilter = (event) => { 
    const filterValue = event.target.value
    setNewFilter(filterValue)
    // console.log("filter value is", filterValue)
  } // handleNameFilter

  // handler for removing contact
  const handleRemoveContact = (contactToDelete) => {  
    // window confirmation 
    if (window.confirm(`Delete ${contactToDelete.name}`)) { 
            // function to identify person to be removed    
      const personToDelete = (id) => { 
        setPersons(persons.filter(person => person.id !== id))
      }

      phoneBookService
        .removeContact(contactToDelete.id)
        .then(() => personToDelete(contactToDelete.id))
        .catch(error => { 
          setErrorMessage(`Information of ${contactToDelete.name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
        })
      }
  } // handleRemoveContact

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} type ='success'/>
      <Notification message={errorMessage} type ='error'/>
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
        {displayedContacts.map(person => 
          <Person key={person.name} person={person} onDelete={handleRemoveContact}/>)
        }
      </div>
    </div>
  ) // return
} // App

export default App