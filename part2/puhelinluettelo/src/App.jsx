import { useState, useEffect } from 'react'
import Name from './components/Name'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'
import nameService from './services/names'
import Notification from './components/Notification'

const App = () => {

  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newId, setNewId] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [addedMessage, setAddedMessage] = useState(null)

  const addName = (event) => {
    event.preventDefault()


    for (let i=0; i<persons.length; i++){
      if (event.target[0].value === persons[i].name)
        //{
        //  if (window.confirm((event.target[0].value) + "is already added to phonebook, replace the old number with a new one?")){
        //    nameService
        //      .changeNumber(nameObject)
        //      .then(response => {
        //        setPersons(persons.concat(response.data))
        //       setNewName('')
        //      })
        //  }
        //} 
        {alert(event.target[0].value + " is already in the phonebook")
          return
        }
      }

    const nameObject = {
      name: newName,
      number: newNumber,
    }

    console.log(nameObject.name, nameObject.number, nameObject.id)
    const updatedPersons = persons.concat(nameObject)

    setPersons(updatedPersons)
    setPersonsToShow(updatedPersons)
    setNewName('')
    setNewNumber('')

    nameService
      .create(nameObject)
      .then(response => {
        //setPersons(updatedPersons)
        const personWithId = response.data
        const finalPersons = persons.concat(personWithId)
        setPersons(finalPersons)
        setPersonsToShow(finalPersons)
        setAddedMessage(`Added ${personWithId.name}`)
        setTimeout(() => {setAddedMessage(null)}, 5000)
      })
      .catch(error => {
        console.error('Error adding person:', error)
      })

  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    var nykyinen = event.target.value
    setNewFilter(event.target.value)
    if(event.target.value == '') {
      setPersonsToShow(persons)
      return
    }
    setPersonsToShow(persons.filter((name) => name.name.toLowerCase().includes(nykyinen.toLowerCase())))
  }

  useEffect(() => {
    nameService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setPersonsToShow(response.data)
  })},[])

  const removeName = id =>{
    nameService
      .deleteName(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setPersonsToShow(personsToShow.filter(person => person.id !== id))
        const poistettu = persons.filter(person => person.id === id)
        setAddedMessage(`Deleted ${poistettu[0].name}`)
        setTimeout(() => {setAddedMessage(null)}, 5000)
      })
      .catch(error => {
        alert("Error deleting contact")
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {addedMessage}/>
      <Filter
      newFilter={newFilter}
      handleFilterChange={handleFilterChange}
      />
      <form onSubmit={addName}>
        <h2>Add a new</h2>
        <div>name: <input
          value={newName}
          onChange={handleNameChange}
          />
          </div>  
        number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} removeName={removeName}/>
    </div>
  )

}

export default App
