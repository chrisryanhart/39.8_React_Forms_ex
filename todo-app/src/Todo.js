import React from 'react';

function Todo({id, text, remove}) {

    const removeTodo = () => remove(id);

    return (
      <div>
        -{text}
        <button onClick={removeTodo}>X</button>
      </div>    
    );
  }

export default Todo;