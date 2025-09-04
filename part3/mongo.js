const mongoose = require('mongoose')

if (process.argv.length < 3 ) { 
    console.log("provide password as argument")
    process.exit(1)
}

// accessing the command line 2nd param
const password = process.argv[2]

// setting up the url for mongodb using the uri
const url = `mongodb+srv://hgvfeliciano10_db_user:${password}@phonebook-cluster.l7oyr8q.mongodb.net/?retryWrites=true&w=majority&appName=Phonebook-cluster`

mongoose.set('strictQuery', false)

// connecting to mongoose 
mongoose.connect(url)

// create the database schema for the contacts
const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Contact = mongoose.model("Contact", contactSchema)

// creating new contacts for testing 
const contact = new Contact({ 
    name: process.argv[3],
    number: process.argv[4],
})

// save the created contact
contact.save().then(result => { 
    console.log(`added ${result.name} number ${result.number} to phonebook`)
})

// retrieving all the contacts 
if (process.argv.length === 3) { 
    Contact.find({}).then(contacts => { 
        contacts.forEach(contact => {
            console.log(contact)
        });

        mongoose.connection.close()
    })
}


