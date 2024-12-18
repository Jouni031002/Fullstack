const Name = ({ name, removeName }) => {
  const handleRemove = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name.name}?`)
    if (confirmDelete) {
      removeName(name.id)
    }
  }
  
  return (
      <li>{name.name} {name.number}
       <button onClick = {handleRemove}> delete</button>
      </li>
    )
  }

export default Name