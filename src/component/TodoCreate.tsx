import { Button, Col, Form, Input, Row, Space } from "antd";
import { useState } from "react"
import { TodoItem } from "./TodoItem";


const TodoCreate = ({ addTodo }: any) => {
    const [form] = Form.useForm();
    const [inputVal, setInputVal] = useState<string>();


    const onFinish = (value: any) => {
        addTodo(value)
        form.resetFields();
    };

    return <>
        <Space>
            <Form form={form} onFinish={onFinish} className="TodoForm">
                <Form.Item
                    label="Todo"
                    name="text"
                    rules={[{ required: true, message: 'please enter a to-do!' }]}
                >
                    <Input placeholder="todo" />
                </Form.Item>
                <Button type="primary" htmlType="submit" >Ekle</Button>
            </Form>
        </Space>
        <br />

    </>
}

export default TodoCreate