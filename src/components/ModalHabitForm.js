import { useDispatch } from 'react-redux'
import { Button, Modal, Form, Input } from 'antd'
import { Formik } from 'formik'
import { addHabit } from '../actions/habitAction'

function ModalHabitForm({ isModalVisible, setIsModalVisible }) {
  const dispatch = useDispatch()

  const handleForm = (values) => {
    dispatch(addHabit(values))
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal
      title="Habit Create Form"
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
    >
      <Formik
        initialValues={{ HabitName: '', HabitDescription: '' }}
        onSubmit={handleForm}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form
            labelCol={{
              span: 4
            }}
            layout="horizontal"
            initialValues={{
              size: 'default'
            }}
            size="large"
          >
            <Form.Item label="Name">
              <Input onChange={handleChange('HabitName')} />
            </Form.Item>
            <Form.Item label="Description">
              <Input onChange={handleChange('HabitDescription')} />
            </Form.Item>
            {/* <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item> */}
            <Form.Item>
              <Button onClick={handleSubmit}>Create</Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalHabitForm
