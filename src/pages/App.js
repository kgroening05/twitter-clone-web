import './App.css';
import { Outlet } from 'react-router-dom';
import AddTweetForm from '../components/AddTweetForm';
import LoginForm from '../components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* add navbar */}
      </header>
      <main>
        <AddTweetForm />
        <LoginForm />
        <Outlet />

      </main>
    </div>
  );
}

export default App;
