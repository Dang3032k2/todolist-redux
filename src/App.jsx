import { Button, Space, Table, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskModal from "./components/TaskModal";
import { addTask, deleteTask, updateTask } from "./store/slices/todosSlice";

function App() {
  const todolist = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const generateId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const columns = [
    {
      title: "Task",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Due date",
      dataIndex: "duedate",
      key: "duedate",
      render: (text) => {
        const isOverDue = dayjs().isAfter(dayjs(text));
        return (
          <Typography.Text type={isOverDue ? "danger" : "success"}>
            {dayjs(text).format("DD/MM/YYYY")}
          </Typography.Text>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="update-btn"
            onClick={() => handleClickUpdate(record)}
          >
            Update
          </Button>
          <Button danger onClick={() => handleClickDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatingTask, setUpdatingTask] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setUpdatingTask();
  };

  const onFinish = (values) => {
    const payload = {
      content: values.content,
      duedate: values.duedate.$d,
      createdAt: new Date(),
      id: updatingTask ? updatingTask.id : generateId(),
    };
    dispatch(updatingTask ? updateTask(payload) : addTask(payload));
    setIsModalOpen(false);
    setUpdatingTask();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleClickUpdate = (record) => {
    setIsModalOpen(true);
    setUpdatingTask(record);
  };
  const handleClickDelete = (task) => {
    dispatch(deleteTask(task));
  };
  return (
    <div className="main-container">
      <Space direction="vertical" className="main-container__space">
        <Button type="primary" onClick={showModal}>
          Thêm task
        </Button>
        <TaskModal
          isModalOpen={isModalOpen}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          handleCancel={handleCancel}
          updatingTask={updatingTask}
        />
        <Table columns={columns} dataSource={todolist} pagination={false} />
      </Space>
    </div>
  );
}

export default App;
