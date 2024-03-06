import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}


function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); // concat()은 배열에 요소를 추가하고 새로운 배열을 반환
      nextId.current += 1; // nextId 현재 값에 1 증가
    },
    [todos],
  );

  const onRemove = useCallback(
    id => { 
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos],
  );

  const onToggle = useCallback(
    id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked} : todo, 
        ),
      );
    }, [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
