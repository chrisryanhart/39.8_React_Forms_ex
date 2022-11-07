import React, {useState} from 'react';

function NewTodoForm({addTodo,value}) {
    const INITIAL_STATE = "";

    const [formText, setFormText] = useState(INITIAL_STATE);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formText);
        setFormText(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const updatedVal = e.target.value;
        setFormText(updatedVal);
    }

    return (
      <div >
        <form onSubmit={handleSubmit}>
            <label htmlFor='new-todo'>New Todo:</label>
            <input id='new-todo' onChange={handleChange} value={formText} />
            <button>Add Todo</button>
        </form>
      </div>
    );
  }

export default NewTodoForm;