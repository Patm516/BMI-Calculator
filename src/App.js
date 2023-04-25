import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import BMICard from './BMICard';
import Dropdown from './Dropdown';

function App() {

  const [isItInKilograms, setIsItInKilograms] = useState(false);

  function handleClick(event) {
    event.preventDefault();

    if(event.target.value === 'KG') {
      setIsItInKilograms(true);
    }
    else {
      setIsItInKilograms(false);
    }
  }


  return (
    <div>BMI Calculator

    <div>
      <Dropdown handleClick={handleClick.bind(this)}/>
    </div>

    <div> 
      <BMICard isInKg={isItInKilograms} />
    </div>
    
    </div>
  );
}

export default App;
