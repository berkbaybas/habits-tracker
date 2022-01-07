import React, { useState } from 'react'

import HabitList from './components/Habit/HabitList'
import ModalHabitForm from './components/ModalHabitForm'
import HabitButton from './components/Habit/HabitButton'

import './App.scss'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className="App">
      <ModalHabitForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <HabitList />
      <HabitButton setIsModalVisible={setIsModalVisible} />
    </div>
  )
}

export default App
