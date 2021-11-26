import React from "react";
import ReactDom from "react-dom";
import './Modal.css';

function Modal({ children, openModal }) {
    let classNames;
    if(openModal){
        classNames = "modal open-modal"
    } else {
        classNames = "modal"
    }
    return ReactDom.createPortal(
        <div className ={classNames}>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };