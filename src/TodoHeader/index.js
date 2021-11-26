import React from "react";

function TodoHeader({ children, loading }) {
    return (
        <header className = "app-header">
            <h1 className = "TodoTitle">ToDo App</h1>
            {
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading }))
            }
        </header>
    );
}

export { TodoHeader };