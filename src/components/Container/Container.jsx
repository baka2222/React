import React from 'react';
import cls from './Container.module.css';

function Container({children}) {
    return (
        <div className={cls.container}>
            {children}
        </div>
    );
}

export default Container;