import { useState } from 'react'

// button component
const Button = ({onClick, text}) => { 
  return ( 
    <button onClick={onClick}> {text}</button>
  )
}

// statistics component
const Statistics = (props) => { 
  const total = props.good + props.neutral + props.bad

  if (total === 0) { 
    return ( 
      <div>
        No feedback given
      </div>
    )
  }
  return ( 
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good}/>
          <StatisticLine text='neutral' value={props.neutral}/>
          <StatisticLine text='bad' value={props.bad}/>
          <StatisticLine text='all' value={total}/>
          <StatisticLine text='average' value={((props.good * 1) + (props.neutral * 0) + (props.bad * -1))/total}/>
          <StatisticLine text='positive' value={`${(props.good / total) * 100}%`}/>
        </tbody>
      </table>
    </div>
  )
}

// statisticLine subcomponent to be used by the statistics component
const StatisticLine = ({text, value}) => { 
  return ( 
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => { 

  // save clicks of each button to its own state 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // create the handlers for each button
  const handleGoodClick = () => {
    setGood(good + 1) // Increase good count and update component state
  }
  
  const handleBadClick = () => { 
    setBad(bad + 1) // Increase bad count and update component state
  }

  const handleNeutralClick = () => { 
    setNeutral(neutral + 1) // Increase neutral count and update component state
  }

  return ( 
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

