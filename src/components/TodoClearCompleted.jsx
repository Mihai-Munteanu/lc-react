import React from 'react'
import { useContext } from 'react/cjs/react.development';
import { TodosContext } from '../contex/TodosContex';

function TodoClearCompleted() {
     const {todos, setTodos} = useContext(TodosContext);

     function clearCompleted() {
          setTodos([...todos].filter(todo => !todo.isComplete));
        }

     return (
          <button 
               className="button"
               onClick={clearCompleted}
          >
                    Clear completed
          </button>
     )
}

export default TodoClearCompleted
