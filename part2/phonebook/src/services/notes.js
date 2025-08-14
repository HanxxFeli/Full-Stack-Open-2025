import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const displayAll = () => { 
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addContact = newObject => { 
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const removeContact = (contactID) => { 
    const request = axios.delete(`${baseUrl}/${contactID}`)
    return request.then(response => console.log(`Contact with Contact ID ${contactID} has been deleted successfully`, response.data)) // checking if the value has been removed
}

export default {displayAll, addContact, removeContact}