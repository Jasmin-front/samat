import React from 'react';
import classes from './button.module.css'

const Button = (props) => {
    return (
        <div>
            <button className={classes.btn}></button>
        </div>
    );
};

export default Button;