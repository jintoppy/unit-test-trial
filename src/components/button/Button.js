import React from 'react';

export const Button = ({children, onClick}) => {
    return (
        <div>
            <h3>This is My Button</h3>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
};

export default Button;