import React from 'react'
import { useSelector } from 'react-redux'
import Habit from './Habit'
import './habit.scss'

function HabitList() {
  const habits = useSelector((state) => state.habit)
  console.log(habits)
  return (
    <div className="Habit">
      <h2 className="Habit-Title">HABITS</h2>
      <div className="Habit-List">
        {habits.length > 0 ? (
          habits.map((habit) => <Habit key={habit.id} habit={habit}></Habit>)
        ) : (
          <p>Create a habit now and start chaining</p>
        )}
      </div>
    </div>
  )
}

export default HabitList
