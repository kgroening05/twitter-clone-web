import './App.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddTweetForm from '../components/AddTweetForm';
import LoginForm from '../components/LoginForm';

function App() {

  const [ user, setUser ] = useState('user');

  useEffect(() => {
    console.log('fetching')
    fetch(`http://localhost:3001/api/login/token-check`,{ credentials: 'include' })
    .then(response => response.json())
    .then(result => {
      setUser(result)
    })
  
  }, [  ])

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <main>
        <p>{user.email}</p>
        <a href="http://localhost:3001/api/login/token-check">Get User</a>
        <AddTweetForm />
        <LoginForm />
        <Outlet />

      </main>
    </div>
  );
}

export default App;
