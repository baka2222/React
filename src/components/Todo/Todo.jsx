import React from 'react';
import cls from './Todos.module.css';

function Todo({todo = []}) {
    return (
        <>
                {todo.map((el, index) => {
                    return (
                        <div className={cls.card} key={index}>
                            {el}
                        </div>
                    )
                })}
        </>
    );
}

export default Todo;