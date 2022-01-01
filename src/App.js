import React, { useState } from 'react'
import { Button } from 'antd'

import HabitList from './components/Habit/HabitList'
import ModalHabitForm from './components/ModalHabitForm'

import './App.scss'
import { GiCrossedChains, GiBreakingChain } from 'react-icons/gi'

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
        <Button onClick={showModal}>
          Create Habit Chain
          <GiCrossedChains className="Button-Icon" size={32} />
        </Button>
      </div>
    </div>
  )
}

export default App
