import { useState } from 'react'

// button to randomize anecdotes
const Button = ({onClick, text}) => { 
  return (
    <button onClick={onClick}>{text}</button>
  )
}

// display anecdote with the most number of votes
const DisplayAnecdote = ({votes, anecdotes}) => { 
  // find the index of the highest value in the votes array
  const highestValue = Math.max(...votes)

  // if there are no votes yet, display that there are no highest voted anecdote
  if (highestValue === 0) { 
    return ( 
      <div>
        There is no highest voted anecdote yet!
      </div>
    )
  } else { 
      // find the index of the highest value in the array
    const match = votes.findIndex(value => value === highestValue) // gets the first matching highest value in the votes array
    return(
      <div>
        <p>{anecdotes[match]}</p>
        <p>has {votes[match]}</p>
      </div>
    )
  }
}

const App = () => { 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  // handler for randomizing anecdotes
  const handleRandAnecdotes = () => { 
    let randomNumber = Math.floor(Math.random() * 8)

    // set the new anecdote based on the random number
    setSelected(randomNumber)
  }

  // handler for votes 
  const handleVotes = () => { 
    const newVotes = [...votes]

    // increment the values inside the array based on the selected anecdote 
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>
      <Button onClick={handleVotes} text='vote' />
      <Button onClick={handleRandAnecdotes} text='next anecdote' />

      <h1>Anecdote with most votes</h1>
      <DisplayAnecdote votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App