import './App.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

function App() {

  const [ user, setUser ] = useState(null);

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
        <Navbar user={user}/>
      </header>
      <main>
        <Outlet context={[user, setUser]}/>
      </main>
      <section className='sidebar'>
        {
          user
          ? null
          : <LoginForm />
        }
      </section>
    </div>
  );
}

export default App;
