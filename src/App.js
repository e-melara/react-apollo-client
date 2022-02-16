import React from 'react';

// import { Dogs } from './components/Dogs/Dogs';
// import { DogPhoto } from './components/Dogs/DogPhoto';
// import { DogPhotoLazy } from './components/Dogs/DogPhotoLazy';

import { AddTodo } from './components/TodoList/add-todo';
import { Todo } from './components/TodoList/todo';

function App() {
  // const [selected, setSelected] = useState(null);

  // const handlerChangeSelected = event => {
  //   const { value } = event.target;
  //   setSelected(value);
  // };
  return (
    <div className="App">
      <AddTodo />
      <Todo />
      {/* <div>{selected && <DogPhoto breed={selected} />}</div>
      <div>{selected && <DogPhotoLazy breed={selected} />}</div>
      <Dogs onChangeSelected={handlerChangeSelected} /> */}
    </div>
  );
}

export default App;
