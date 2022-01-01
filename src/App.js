import React, { useState } from 'react'
import { Button } from 'antd'

import 'antd/dist/antd.css'
import './App.css'
import ModalHabitForm from './components/ModalHabitForm'

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
      <div className="Button-Container">
        <Button size="large" onClick={showModal}>
          Create Habits
        </Button>
      </div>
    </div>
  )
}

export default App
