import React from 'react'

function Habit({ habit }) {
  return (
    <div className="habit" key={habit.id}>
      <p>{habit.name}</p>
    </div>
  )
}

export default Habit
