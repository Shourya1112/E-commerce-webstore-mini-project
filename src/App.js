import React, { useState } from 'react';
import"./styles/app.css";
import Header from './components/Header';
import Login from './components/Login';
import Carousel from './components/Carousel';

const App = () => {
  const [ login , setLogin ] = useState(false);


  return (
    <div className="App">
    <main>
      <Header setTrigger={setLogin} />
      <Carousel />
    </main>
      <Login Trigger={login} setTrigger={setLogin}/>
    </div>
  );
}

export default App;
