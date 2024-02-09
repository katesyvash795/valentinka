import React from 'react';
import './App.css'; // Подключаем стили
import { Home } from 'components/home/home';

export const App=()=> {
  return (
    <div className="App">
      <div className="container">
        <Home/>
      </div>
    </div>
  );
}
