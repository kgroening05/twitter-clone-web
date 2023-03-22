import './App.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AddTweetForm from '../components/AddTweetForm';
import LoginForm from '../components/LoginForm';
import EditUserDetailsForm from '../components/EditUserDetailsForm';
import Navbar from '../components/Navbar';

function App() {

  const [ user, setUser ] = useState('user');

  useEffect(() => {
    console.log('fetching')
    fetch(`http://localhost:3001/api/login/token-check`,{ credentials: 'include' })
    .then(response => response.json())
    .then(result => {
      setUser(result)
    })
  
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <AddTweetForm />
        <LoginForm />
        <Outlet />
        <EditUserDetailsForm user={user} />
      </main>
    </div>
  );
}

export default App;
