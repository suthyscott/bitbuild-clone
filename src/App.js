import React, {useState, useEffect} from 'react';
import './App.css'; 
import TopView from './components/TopView/TopView'
import SecondSection from './components/SecondSection/SecondSection'
import HeaderTwo from './components/HeaderTwo/HeaderTwo'

function App() {
  const [hasScrolled, setHasScrolled] = useState(false)
  console.log(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', triggerHeaderTwo)
  }, [])

  const triggerHeaderTwo = () => {
    console.log('hit trigger function', window.pageYOffset)
      if(window.pageYOffset > 300){
        setHasScrolled(true)
      } else setHasScrolled(false)
  }

  return (
    <div className="app">
      <div className='headers'>
        {hasScrolled ? <HeaderTwo hasScrolled={hasScrolled}/> : null}
        <TopView/>
        <SecondSection/>
      </div>
    </div>
  );
}

export default App;
