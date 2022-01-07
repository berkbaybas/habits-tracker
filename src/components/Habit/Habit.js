import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeHabit } from '../../actions/habitAction'
import { IconContext } from 'react-icons'
import { IoIosCloseCircleOutline } from 'react-icons/io'
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
        <IoIosCloseCircleOutline
          className="Habit-Icon"
          size={44}
          color="red"
          onClick={() => handleRemove(habit.id)}
        />
      </div>
    </div>
  )
}

export default Habit
