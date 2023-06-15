import { useState } from "react";
import TodoCreate from "../component/TodoCreate"
import TodoList from "../component/TodoList"
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "../component/TodoItem";


export interface ITodo {
    id: any;
    text: string;
    completed: false;
    isEditing: boolean
}

export const ToDoViewComponent = ({

}) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (todo: any) => {
        setTodos([
            ...todos,
            { id: uuidv4(), text: todo.text, completed: false ,isEditing:false},
        ]);
    }

    return <>
        <TodoCreate addTodo={addTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
    </>
}