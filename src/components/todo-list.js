import React from "react";
import ToDoListItem from "./todo-list-item";

const ToDoList = (props) => {
    const items = props.items;
    return (
        <ul>{items.map((item, index) => <li key={index}><ToDoListItem item={item}/></li>)}</ul>
    );
};

export default ToDoList;