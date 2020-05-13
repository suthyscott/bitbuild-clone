import React from 'react';
import './App.css'; 
import TopView from './components/TopView/TopView'
import SecondSection from './components/SecondSection/SecondSection'

function App() {
  return (
    <div className="app">
      <div className='headers'>
        <TopView/>
        <SecondSection/>
      </div>
    </div>
  );
}

export default App;
