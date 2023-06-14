import { useState } from "react"
import { TodoItem } from "./TodoItem";


export interface ITodo {
    id: any;
    text: string;
    completed: false;
}

interface Props {
    todos: Array<ITodo>
    setTodos: (todos : any) => void
}


 const TodoList = ({todos, setTodos}: Props) => {


    const deleteTodo = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id: number) => {
        setTodos(
            todos.map((todo: any) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }
    return <>
     <div className="todos">
                {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />
            )}
            </div>
    </>
}

export default TodoList