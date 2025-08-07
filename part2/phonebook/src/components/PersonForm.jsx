const PersonForm = ({
    onSubmit,
    newName,
    handleNewContact,
    newNumber,
    handleNewNumber
  }) => { 
    return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={handleNewContact} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>        
    )
}

export default PersonForm