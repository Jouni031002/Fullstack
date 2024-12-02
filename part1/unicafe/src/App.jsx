import { useState } from 'react'

const App = () => {
  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h2>Statistics</h2>
      <Statistics good ={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const allClicks = good + neutral + bad
  const average = (good - bad)/allClicks
  const positive = (good / allClicks) * 100
  if (allClicks > 0) return(
    <table>
      <tbody>
      <tr>
        <td>good</td>
        <td>{good}</td>
        </tr>
        <tr>
        <td>neutral</td>
        <td>{neutral}</td>
        </tr>
        <tr>
        <td>bad</td>
        <td>{bad}</td>
        </tr>
        <tr>
        <td>all</td>
        <td>{allClicks}</td>
        </tr>
        <tr>
        <td>average</td>
        <td>{average}</td>
        </tr>
        <tr>
        <td>positive</td>
        <td>{positive}</td>
        <td>%</td>
        </tr>
      </tbody>
    </table>
  )
  return(
    <div>
      <p>No feedback given</p>
    </div>
  )
}

//const StatisticLine = ({text, value}) => {
//  if (text == "positive") return(
//    <div>
//      <p>{text} {value}</p>
//    </div>
//  )
//  return(
//    <div>
//      <p>{text} {value}</p>
//    </div>
//  )
//}

export default App