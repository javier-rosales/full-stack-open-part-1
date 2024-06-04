import { useState } from 'react'

const Button = ({text, onSubmitFeedback}) => {
  return (
    <button onClick={onSubmitFeedback}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = ((good * 1) + (bad * -1)) / all
  const positive = 100 / all * good

  return (
    all > 0
    ?
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={`${positive} %`} />
          </tbody>
        </table>
      </>
    :
      <div>
        No feedback given
      </div>
  )
}

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = newValue => () => setGood(newValue)
  const updateNeutral = newValue => () => setNeutral(newValue)
  const updateBad = newValue => () => setBad(newValue)

  return (
    <>
      <h1>Give feedback</h1>
      <Button text="Good" onSubmitFeedback={updateGood(good + 1)} />
      <Button text="Neutral" onSubmitFeedback={updateNeutral(neutral + 1)} />
      <Button text="Bad" onSubmitFeedback={updateBad(bad + 1)} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  )
}

export default App
