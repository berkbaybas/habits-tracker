import { Button } from 'antd'
import { GiCrossedChains, GiBreakingChain } from 'react-icons/gi'

function HabitButton({ setIsModalVisible }) {
  const showModal = () => {
    setIsModalVisible(true)
  }
  return (
    <div className="Button-Container">
      <img src={require('../../images/chain.png')} alt="chain" />
      <Button onClick={showModal}>
        Create Habit Chain
        <GiCrossedChains className="Button-Icon" size={32} />
      </Button>
    </div>
  )
}

export default HabitButton
