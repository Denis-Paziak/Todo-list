import React, {useState} from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import TodoModal from "./TodoModal";

function AppContent() {
    const todos = useSelector(state => state.todo.todoList);
    const [modalOpen, setModalOpen] = useState(false);



    return (
        <>
            {todos.map(el => {
                return <TodoItem key={el.id} todo={el} setModalOpen={setModalOpen}/>
            }).reverse()}

            <TodoModal type="update" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </>
    );
}

export default AppContent;