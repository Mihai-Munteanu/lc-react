import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { TodosContext } from '../contex/TodosContex';

TodoCompleteAllTodos.propTypes = {
     completeAllTodos: PropTypes.func.isRequired,
};

function TodoCompleteAllTodos(props) {
     return (
          <div>
               <div 
                    className="button"
                    onClick={props.completeAllTodos}
               >
                    Check All
               </div>
          </div>
     )
}

export default TodoCompleteAllTodos
