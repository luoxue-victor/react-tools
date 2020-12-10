import './App.css';
import {
  Link
} from "react-router-dom";

function App(props) {
  console.log(props.history);
  // 编程式router跳转
  // props.history.push('/refs')
  const context = require.context('./pages', false, /\.js$/);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {context.keys().map(path => {
            const name = path.replace('./', '').replace('.js', '');
            return <li key={path}>
              <Link to={`/${name}`}>{name}</Link>
            </li>
          })} 
        </ul>
      </header>
    </div>
  );
}

export default App;
