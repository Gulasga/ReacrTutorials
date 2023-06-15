import { Button, Checkbox, Space } from "antd";
export interface ITodo {
    id: any;
    text: string;
    completed: false;
    isEditing:boolean
}

export interface Props {
    key: any;
    todo: ITodo;
    deleteTodo: (val: number) => void;
    toggleComplete: (val: number) => void;
    editTodo: (val: number) => void;
}

export const TodoItem = ({ todo, deleteTodo, toggleComplete,editTodo }: Props) => {
    return <>
        <Space>
            <div className="Todo">

                <Checkbox checked={todo.completed ? true : false} onClick={() => toggleComplete(todo.id)} />
                {/* <p style={{ color: 'red' }}>{todo.id}</p> */}
                <p style={{ color: 'blue' }} >{todo.text}</p>
                <Button onClick={() => editTodo(todo.id)}>Düzenle</Button>
                <Button onClick={() => deleteTodo(todo.id)}>Sil</Button>
            </div>
        </Space>
    </>
}