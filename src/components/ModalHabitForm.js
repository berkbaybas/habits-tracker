import { Button, Modal, Form, Input } from 'antd'
import { Formik } from 'formik'
function ModalHabitForm({ isModalVisible, setIsModalVisible }) {
  const handleForm = (values) => {
    console.log(values)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      footer={null}
      onCancel={handleCancel}
    >
      <h2>Form</h2>
      <Formik initialValues={{ HabitName: '' }} onSubmit={handleForm}>
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
            <Form.Item label="Input">
              <Input onChange={handleChange('HabitName')} />
            </Form.Item>
            {/* <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item> */}
            <Form.Item>
              <Button onClick={handleSubmit}>Button</Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default ModalHabitForm
