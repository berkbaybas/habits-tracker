import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { handleChain } from '../actions/habitAction'
import { Calendar } from 'antd'
import ChainIcon from './Icons/ChainIcon'
import { GrClose } from 'react-icons/gr'
import { BiArrowBack } from 'react-icons/bi'
import moment from 'moment'

function ChainCalender() {
  const urlParams = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const habits = useSelector((state) => state.habit)
  const [habit, SetHabit] = useState({
    id: 1,
    name: 'Duolingo çaliş',
    chain: ['2022-01-01']
  })

  useEffect(() => {
    const filteredHabit = habits.find((habit) => habit.id == urlParams.id)
    SetHabit(filteredHabit)
  }, [habits])

  useEffect(() => {
    console.log(habit)
  }, [habit])

  function dateCellRender(value) {
    if (habit !== null && value !== null) {
      const IsExist = habit.chain.includes(value.format('YYYY-MM-DD'))
      // if (IsExist) {
      //   return <ChainIcon width="100%" height="90%" />
      // }
      if (IsExist) {
        return <GrClose size="92%" width="100%" height="90%" />
      }
    }
  }

  const handleChange = (date) => {
    dispatch(handleChain(habit.id, date.format('YYYY-MM-DD')))
  }

  return (
    <div className="Calendar-Container">
      <BiArrowBack
        size={64}
        onClick={() => {
          navigate('/')
        }}
        className="Calendar-Back-Icon"
      />
      <Calendar
        dateCellRender={dateCellRender}
        className="Calendar"
        onChange={handleChange}
        validRange={[moment('2022-01-01'), moment('2022-12-30')]}
      />
    </div>
  )
}

export default ChainCalender
