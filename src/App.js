import './App.css';
import {
  Link
} from "react-router-dom";

function App(props) {
  console.log(props.history);
  // 编程式router跳转
  // props.history.push('/refs')
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/refs">Refs</Link>
          </li>
          <li>
            <Link to="/fragments">Fragments</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
