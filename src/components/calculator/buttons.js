import React from 'react';
import Button from './button';

const allButtons = [
    {
        className: "key--operator",
        operation: add,
        value: '+'
    }, {
        className: "key--operator",
        operation: subtract,
        value: '-'
    }, {
        className: "key--operator",
        operation: "multiply",
        value: '*'
    }, {
        className: "key--operator",
        operation: "divide",
        value: '/'
    }, {
        className: "",
        operation: "",
        value: '7'
    }, {
        className: "",
        operation: "",
        value: '8'
    }, {
        className: "",
        operation: "",
        value: '9'
    }, {
        className: "",
        operation: "",
        value: '4'
    }, {
        className: "",
        operation: "",
        value: '5'
    }, {
        className: "",
        operation: "",
        value: '6'
    }, {
        className: "",
        operation: "",
        value: '1'
    }, {
        className: "",
        operation: "",
        value: '2'
    }, {
        className: "",
        operation: "",
        value: '3'
    }, {
        className: "",
        operation: "",
        value: '0'
    }, {
        className: "",
        operation: "decimal",
        value: '.'
    }, {
        className: "",
        operation: "clear",
        value: 'AC'
    }, {
        className: "key--equal",
        operation: "calculate",
        value: '='
    }
];

const Buttons = () => {
    return allButtons.map((e, i) => {return <Button key={i} className={e.className} value={e.value} operation={e.operation} />});
}

const add = () => {
    return 'sdf';
}

const subtract = () => {
    return true;
}

export default Buttons;

