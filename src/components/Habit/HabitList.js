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
          habits.map((habit) => <Habit habit={habit}></Habit>)
        ) : (
          <p>there is no habit</p>
        )}
      </div>
    </div>
  )
}

export default HabitList
