import './App.css';
import image from './todo.png';
import imageTwo from './girl.jpeg';
import { ToDoList } from './ToDoList'


function App() {
  return (
    <div className="app">
      <div>
        <img className="imgOne" src = { image } width="100px" alt='shopping'/>
      </div>
      <div className="container">
      <h1>TO DO LIST</h1>
      </div>
      <ToDoList />
      <div className="container">
      <img src = { imageTwo } width="200" alt='shopping'/>
      </div>
    </div>
  );
}

export default App;
