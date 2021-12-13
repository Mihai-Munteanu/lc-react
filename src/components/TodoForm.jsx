import React, {useContext, useState} from 'react'
import { TodosContext } from '../contex/TodosContex';

function TodoForm() {
     const {todos, setTodos, idForTodo, setIdForTodo} = useContext(TodosContext);

     const [todoInput, setTodoInput] = useState('');

     function handleInput (event) {
          setTodoInput(event.target.value);
     };
  
     function addTodo (event) {
          event.preventDefault();

          if(todoInput.trim().length === 0) {
               return;
          }

          setTodos([
               ...todos,
               {
                    id: idForTodo,
                    title: todoInput,
                    isComplete: false
               },
          ]);
         
             setIdForTodo(prevIdForTodo => prevIdForTodo + 1);

          setTodoInput('');
     }


     return (
          <div>
               <form action="#" onSubmit={addTodo}>
                    <span>
                    </span>
                    <input
                    type="text"
                    value={todoInput}
                    onChange={handleInput}
                    className="todo-input"
                    placeholder="What do you need to do?"
                    />
               </form>
          </div>
     )
}


export default TodoForm
