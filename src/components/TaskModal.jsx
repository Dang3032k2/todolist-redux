import { Button, DatePicker, Form, Input, Modal } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";

const TaskModal = ({
  isModalOpen,
  handleCancel,
  onFinish,
  onFinishFailed,
  updatingTask,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (updatingTask) {
      form.setFieldsValue({
        content: updatingTask.content,
        duedate: dayjs(updatingTask.duedate),
      });
    }
  }, [updatingTask, form, isModalOpen]);
  const onSubmit = (values) => {
    onFinish(values);
    form.resetFields();
  };
  return (
    <Modal
      title={updatingTask ? "Sửa task" : "Thêm task"}
      open={isModalOpen}
      onCancel={() => {
        handleCancel();
        form.resetFields();
      }}
      footer={[]}
    >
      <Form
        name="basic"
        layout="vertical"
        form={form}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nội dung"
          name="content"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập nội dung!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ngày đến hạn"
          name="duedate"
          wrapperCol={{
            span: 24,
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập ngày đến hạn!",
            },
          ]}
        >
          <DatePicker className="date-picker" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default TaskModal;
