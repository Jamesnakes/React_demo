import React from 'react';
// import logo from './logo.svg';
import Home from './pages/home/home';
import Header from './component/header/header';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Home title="标题" age={20}/>
    </div>
  );
}

export default App;
