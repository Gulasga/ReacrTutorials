import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react'

export interface ITodo {
  id: any;
  text: string;
}

export const EditTodoForm = ({editTodo, todo}: any) => {
  
  const [value, setValue] = useState(todo.text);
  const [form] = Form.useForm();
  const onFinish = () => {
    editTodo(value, todo.id);
    form.resetFields()
  };
debugger;
  return (
    <>

      <Form onFinish={onFinish} form={form} className="Todo">
        <Form.Item
          label="Todo"
          name="text"
          style={{marginBottom:'0px'}}
        >
          <Input placeholder={value} onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setValue(e.target.value)} />
        </Form.Item>
        <Button type="dashed" htmlType="submit" >Düzenle</Button>
      </Form>
    </>
  )
}
