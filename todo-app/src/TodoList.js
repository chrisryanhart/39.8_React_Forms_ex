import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from "uuid";

function TodoList() {
    
    const INITIAL_STATE = [{id: uuid(), task:"Cut the grass"},{id: uuid(),task:"Pull weeds"}];
    const [list,setList] = useState(INITIAL_STATE);

    const remove = (id) => {

        setList(list.filter(ele => ele.id !== id));
    }

    const addTodo = (text) => {
        setList(data => [
            ...data,
            {id: uuid(), task:text}
        ])
    }

    const todos = list.map(ele=> <Todo id={ele.id} key={ele.id} remove={remove} text={ele.task}/>);


    return (
      <div className="App">
        <h2>Todolist</h2>
        {todos}

        <NewTodoForm addTodo={addTodo}/>
      </div>
    );
}

export default TodoList;