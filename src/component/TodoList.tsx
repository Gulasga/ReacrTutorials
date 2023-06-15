import { useState } from "react"
import { EditTodoForm } from "./EditTodoForm";
import { TodoItem } from "./TodoItem";


export interface ITodo {
    id: any;
    text: string;
    completed: false;
    isEditing: boolean
}

interface Props {
    todos: Array<ITodo>
    setTodos: (todos: any) => void
}


const TodoList = ({ todos, setTodos }: Props) => {


    const deleteTodo = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id: number) => {
        setTodos(
            todos.map((todo: any) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const editTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const editTask = (todoItem: ITodo, id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text : todoItem , isEditing: !todo.isEditing } : todo
            )
        );
    };
    return <>
        <div className="todos">
            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} todo={todo} />
                ) : (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    </>
}

export default TodoList