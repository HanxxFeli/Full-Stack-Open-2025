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
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return ( 
    <div>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <h1>statistics</h1>
      <p>All {total}</p>
      <p>Average {((props.good * 1) + (props.neutral * 0) + (props.bad * -1))/total}</p>
      <p>Positive {props.good / total}</p>
    </div>
  )
}

const App = () => { 
  // save clicks of each button to its own state 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // create the handlers for each button
  const handleGoodClick = () => {

    // create the variable for the updated value 
    const updatedGood = good + 1
    setGood(updatedGood) // Increase good count and update component state
  }
  
  const handleBadClick = () => { 
    // create the variable for the updated value 
    const updatedBad = bad + 1

    setBad(updatedBad) // Increase bad count and update component state
  }

  const handleNeutralClick = () => { 
    // create the variable for the updated value 
    const updatedNeutral = neutral + 1

    setNeutral(updatedNeutral) // Increase neutral count and update component state
  }

  return ( 
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

