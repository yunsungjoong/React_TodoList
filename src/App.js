import { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


function App() {
  const [todos, setTodos] = useState([
    {}
  ])
  return (
  
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  )
}

export default App;
