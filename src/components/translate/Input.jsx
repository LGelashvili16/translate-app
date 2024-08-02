import React from 'react';
import classes from './Input.module.css';

const Input = () => {
  return (
    <input type="text" placeholder="ჩაწერეთ სიტყვა" className={classes.input} />
  );
};

export default Input;
