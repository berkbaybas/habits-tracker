import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeHabit } from '../../actions/habitAction'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsCalendarDateFill } from 'react-icons/bs'

function Habit({ habit }) {
  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeHabit(id))
  }

  return (
    <div className="Habit-Item" key={habit.id}>
      <div className="Habit-Content">
        <p className="Habit-Content-Name">{habit.name}</p>
        <p className="Habit-Content-Description">{habit.description}</p>
      </div>
      <div className="Icon-Container">
        <Link to={`/ChainCalender/${habit.id}`} className="Calendar-link">
          <BsCalendarDateFill size={32} className="Habit-Icon" />
        </Link>
        <AiFillCloseCircle
          className="Habit-Icon"
          fill="red"
          stroke="white"
          size={32}
          onClick={() => handleRemove(habit.id)}
        />
      </div>
    </div>
  )
}

export default Habit
