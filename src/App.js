import React, { useState } from 'react'
import { Button } from 'antd'

import HabitList from './components/Habit/HabitList'
import ModalHabitForm from './components/ModalHabitForm'

import './App.scss'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  return (
    <div className="App">
      <ModalHabitForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <HabitList />
      <div className="Button-Container">
        <Button size="large" onClick={showModal}>
          Create Habits
        </Button>
      </div>
    </div>
  )
}

export default App
