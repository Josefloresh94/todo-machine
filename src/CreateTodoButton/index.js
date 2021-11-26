import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton (props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
    return (
        <button 
            className   =   {`CreateTodoButton ${props.openModal && "CreateTodoButton__open"}`}
            onClick     =   {onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };