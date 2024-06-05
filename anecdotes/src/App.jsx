import { useState } from 'react'

const App = () => {
  
  function getRandomElementIndex(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)

    return randomIndex
  }

  const anecdotesList = [
    {
      content: 'If it hurts, do it more often.',
      votes: 0
    },
    {
      content: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      content: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      content: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      content: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },
    {
      content: 'The only way to go fast, is to go well.',
      votes: 0
    }
  ]

  const [anecdotes, setAnecdotes] = useState(anecdotesList)
  const [selected, setSelected] = useState(0)

  const mostVotedAnecdote = anecdotes.reduce((currentMostVoted, anecdote) => 
    (anecdote.votes > currentMostVoted.votes) ? anecdote : currentMostVoted
  )

  const updateVotes = () => {
    const newAnecdotes = [...anecdotes]
    newAnecdotes[selected].votes += 1

    setAnecdotes(newAnecdotes)
  }

  const updateSelected = () => {
    const randomElementIndex = getRandomElementIndex(anecdotes)
    setSelected(randomElementIndex)
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        {anecdotes[selected].content}
      </div>
      <div>
        has {anecdotes[selected].votes} votes
      </div>
      <button onClick={updateVotes}>
        Vote
      </button>
      <button onClick={updateSelected}>
        Next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <div>
        {mostVotedAnecdote.content}
      </div>
    </>
  )
}

export default App
