import React, {useContext, useState} from 'react'
// import PropTypes from 'prop-types'
import { TodosContext } from '../contex/TodosContex';


// TodoForm.propTypes = {
//      addTodo: PropTypes.func,
// }

function TodoForm() {
     const {todos, setTodos, idForTodo, setIdForTodo} = useContext(TodosContext);

     const [todoInput, setTodoInput] = useState('');

     function handleInput (event) {
          setTodoInput(event.target.value);
     };
  
     function handleSubmit (event) {
          event.preventDefault();

          if(todoInput.trim().length === 0) {
               return;
          }

          props.addTodo(todoInput);

          setTodoInput('');
     }


     return (
          <div>
               <form action="#" onSubmit={handleSubmit}>
                    <span>
                         {msg}
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
