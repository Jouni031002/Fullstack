import Name from './Name'

const Persons = ({ persons, removeName }) => {
  return (
    <ul>
      {persons.map((name) => (
        <Name key={name.id || name.name} name={name} removeName={() => removeName(name.id)} />
      ))}
    </ul>
  )
}

export default Persons