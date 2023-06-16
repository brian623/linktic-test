import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <Dropdown url={process.env.REACT_APP_API_URL} />
    </div>
  );
}

export default App;
