const express = require('express')
const app = express()

app.use(express.json()) // use the json parser from express

let contacts = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// testing for working backend
app.get('/', (request, response) => { 
  response.send('<h1>This is the contact landing page</h1>')
})

// getting all the contacts 
app.get('/api/contacts', (request, response) => { 
    response.json(contacts)
})

// getting a single contact 
app.get('/api/contacts/:id', (request, response) => { 
  const getId = request.params.id // request parameter on the url is the id as indicated by the colon 
  const contact = contacts.find(contact => contact.id === getId)

  // error handling for existing or not existing contact
  if (contact) { 
    response.json(contact)
  } else { 
    response.status(404).end() // 404 if id does not exist
  }
})

// get how many entries are in the phonebook at the time the request was processed
app.get('/info', (request, response) => { 
  const contactCount = contacts.length // get the number of contacts 
  const processingTime = new Date() // get the current date


  const infoContent = `
    <div>
      <p>Phonebook has info for ${contactCount} people</p>

      ${processingTime.toString()}
    </div>
  `;

  response.send(infoContent)
})

// function to generate an id for the contacts to be used by POST
const generateContactId = () => { 
  let min = contacts.length + 1
  let max = 9999

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// adding a new contact 
app.post('/api/contacts', (request, response) => { 
  const body = request.body // get the data that was sent in the request

  // if the body content is empty, send a 400 error code and message
  if (!body.name) { 
    return response.status(400).json({
      error: 'Name value missing'
    })
  } else if (!body.number) { 
    return response.status(400).json({
      error: 'Number value missing'
    })
  } else if (contacts.find(contact => contact.name === body.name)) { 
    return response.status(409).json({
      error: 'name must be unique'
    })   
  }

  // create the content body to be sent 
  const contact = { 
    id: generateContactId(),
    name: body.name,          // what the user added as the name
    number: body.number,      // what the user added as the number
  }

  contacts = contacts.concat(contact)

  response.json(contact)
})

// deleting a contact 
app.delete('/api/contacts/:id', (request, response) => { 
  const deleteId = request.params.id
  contacts = contacts.filter(contact => contact.id !== deleteId) // return the array that does not contain the deleted contact and update contacts 

  response.status(204).end()
})


const PORT = 3001
app.listen(PORT) // ensuring the script continues running and oes not exit
console.log(`App is running on Port ${PORT}`)