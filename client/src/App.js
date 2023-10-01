import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/ToDoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div className='outerDiv'>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;