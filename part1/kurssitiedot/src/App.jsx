const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total total = {course.parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
      <p>Name of course: {props.course}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <>
     <p>{props.parts[0].name}</p>
     <p>{props.parts[1].name}</p>
     <p>{props.parts[2].name}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p>Total number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
  )
}

export default App