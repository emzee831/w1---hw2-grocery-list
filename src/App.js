import './App.css';
import Grocery from './Groceries'
import InputList from './InputList';

function App() {
  return (
    <div className="App">
      <h1>Grocery List</h1>
      <Grocery/>
      <InputList/>     
    </div>
  );
}

export default App;
