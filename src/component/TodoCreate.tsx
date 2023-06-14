import { Button, Col, Form, Input, Row, Space } from "antd";
import { useState } from "react"
import { TodoItem } from "./TodoItem";


const TodoCreate = ({ addTodo }: any) => {

    const [inputVal, setInputVal] = useState<string>();


    const onFinish = (value: any) => {
        addTodo(value)
    };

    return <>
        <Space>
            <Form onFinish={onFinish} className="TodoForm">
                <Form.Item
                    label="Todo"
                    name="text"
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