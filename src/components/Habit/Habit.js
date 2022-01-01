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
      <p>{habit.name}</p>
      <div className="Icon-Container">
        <Link to={`/ChainCalender/${habit.id}`}>
          <BsCalendarDateFill className="Habit-Icon" />
        </Link>
        <AiFillCloseCircle
          className="Habit-Icon"
          fill="red"
          size={20}
          onClick={() => handleRemove(habit.id)}
        />
      </div>
    </div>
  )
}

export default Habit
