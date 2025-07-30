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
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  // create the handlers for each button
  const handleGoodClick = () => {
    console.log('average before', average) 
    // create the variable for the updated value 
    const updatedGood = good + 1

    setGood(updatedGood) // Increase good count and update component state

    const total = updatedGood + neutral + bad // create a variable to hold the total
    setAll(total) //update the component state of the total

    // good feedback is equivalent to 1. Add to the total average
    const goodFeedback = 1
    const newAverage = ((average + goodFeedback) / total)

    setAverage(newAverage)
    console.log('average after', average) 
  }
  
  const handleBadClick = () => { 
    // create the variable for the updated value 
    const updatedBad = bad + 1

    setBad(updatedBad) // Increase bad count and update component state
    setAll(good + neutral + updatedBad) //update the component state of the total
  }

  const handleNeutralClick = () => { 
    // create the variable for the updated value 
    const updatedNeutral = neutral + 1

    setNeutral(updatedNeutral) // Increase neutral count and update component state
    setAll(good + updatedNeutral + bad) //update the component state of All
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
        <p>All {all}</p>
        <p>Average {average}</p>
        <p>positive {positive}</p>
      </div>
    </div>
  )
}

// all / total 

// average

// percentage of positive feedback (good/total)


export default App

