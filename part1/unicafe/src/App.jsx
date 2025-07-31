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

  return ( 
    <div> 
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
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

// all / total 

// average

// percentage of positive feedback (good/total)


export default App

