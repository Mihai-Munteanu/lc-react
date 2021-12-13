import React, { useContext } from 'react'
import { TodosContext } from '../contex/TodosContex';

function TodoCompleteAllTodos() {

     const {todos, setTodos} = useContext(TodosContext);

     function completeAllTodos() {
          const updateTodos = todos.map(todo => {
            todo.isComplete = true;
            
            return todo;
          });
      
          setTodos(updateTodos);
        }

     return (
          <div>
               <div 
                    className="button"
                    onClick={completeAllTodos}
               >
                    Check All
               </div>
          </div>
     )
}

export default TodoCompleteAllTodos
