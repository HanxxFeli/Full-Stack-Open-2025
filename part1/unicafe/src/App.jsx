import { useState } from 'react'

const Button = ({onClick, text}) => { 
  return ( 
    <button onClick={onClick}> {text}</button>
  )
}

const App = () => { 
  // save clicks of each button to its own state 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1))/total
  const positive = (good / total) * 100

  // create the handlers for each button
  const handleGoodClick = () => {
    console.log('average before', average) 

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
      <h1>statistics</h1>
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {total}</p>
        <p>Average {average}</p>
        <p>positive {positive} %</p>
      </div>
    </div>
  )
}

// all / total 

// average

// percentage of positive feedback (good/total)


export default App

