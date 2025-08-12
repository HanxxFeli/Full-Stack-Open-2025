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

export default {displayAll, addContact}