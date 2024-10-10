import React from 'react';
import Todo from "../../components/Todo/Todo";
import cls from './TodosPage.module.css';

function TodosPage() {
    return (
        <div className={cls.card_container}>
            <Todo todo={["todo 1", "todo 2", "todo 3"]}/>
        </div>
    );
}

export default TodosPage;