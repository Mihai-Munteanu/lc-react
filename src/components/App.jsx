import { useEffect, useMemo, useRef } from 'react';
import NoTodos from './NoTodos'; 
import TodoForm from './TodoForm'; 
import TodoList from './TodoList'; 
import useLocalStorage from '../hooks/useLocalStorage'; 
import '../reset.css';
import '../App.css';
import { TodosContext } from '../contex/TodosContex';

function App() {
  // const [name, setName] = useState('');
  const [name, setName] = useLocalStorage('name', '');

  const nameInputEl = useRef(null); 
  const [todos, setTodos] = useLocalStorage('todo', []);
  
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: 'Finish React Series',
  //     isComplete: false,
  //     isEditing:false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Go Grocery',
  //     isComplete: true,
  //     isEditing:false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Take over world21321',
  //     isComplete: false,
  //     isEditing:false,
  //   },
  // ]);

  const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);

  function addTodo(todo) {  
    
  };

  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
    // console.log('id: ' + id);
  }


  function completeTodo (id) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
    return todo;
    });
    setTodos(updatedTodos)
  }

  function markAsEditing (id) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isEditing = true
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  function updateTodo (event, id) {
    const updateTodos = todos.map(todo => {
      if(todo.id === id) {

        if(event.target.value.trim().length === 0 ) {
          todo.isEditing = false;
          return todo;
        }

        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    })

    setTodos(updateTodos);
  }

  function cancelEdit (event, id) {
    const updateTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  function remainingCalculation() {
    return todos.filter(todo => !todo.isComplete).length
  }

  const remaining = useMemo(remainingCalculation, [todos]);


  function clearCompleted() {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }

  function completeAllTodos() {
    const updateTodos = todos.map(todo => {
      todo.isComplete = true;
      
      return todo;
    });

    setTodos(updateTodos);
  }

  function todosFiltered(filter) {
    if(filter === 'all') {
      return todos;
    } else if(filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    } else if(filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }
  }
  
  useEffect(() => {
    nameInputEl.current.focus();

    // setName(JSON.parse(localStorage.getItem('name')) ?? '');

    return function cleanUp() {
      // console.log('cleaning up')
    };
  }, []);


  function handleNameInput(event) {
    setName(event.target.value);
    // localStorage.setItem('name', JSON.stringify(event.target.value))
  }


  return (
    <TodosContext.Provider value={{ todos, setTodos, idForTodo, setIdForTodo}}>
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>
              What is your name ?
            </h2>
            <form action="#">
              <input
              type="text"
              ref={nameInputEl}
              className="todo-input"
              placeholder="What is your name"
              value={name}
              onChange={handleNameInput}
              />
            </form>
            {name && <p className="name-label">Hello, {name} </p>}
          </div>

          <h2>Todo App</h2>

          <TodoForm />

          { todos.length > 0 ? (
            <TodoList 
              todos={todos}
              completeTodo={completeTodo}
              markAsEditing={markAsEditing}
              updateTodo={updateTodo}
              cancelEdit={cancelEdit}
              deleteTodo={deleteTodo}
              remaining={remaining}
              clearCompleted={clearCompleted}
              completeAllTodos={completeAllTodos}
              todosFiltered ={todosFiltered }
            />
          ) : 
            <NoTodos/>
          }
        </div>
      </div>
    </TodosContext.Provider>

  );
}

export default App;