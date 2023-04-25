import { useState } from 'react';

function Dropdown( {handleClick} ) {

  const options = [
    { label: 'Kilograms and Centimeters', value: 'KG'},
    { label: 'Pounds and Inches', value: 'LBS'}
  ];

  const [isInKilos, setIsInKilos] = useState(false);

  const handleChange = (event) => {
    if(event.target.value === 'KG' ) {
      setIsInKilos(true);
    }
    else{
      setIsInKilos(false);
    }

    handleClick(event);
  };


  return ( 
    <div>
      <label>
        Please choose your measurement units:

        <select value={ isInKilos? "KG" : "LBS"} onChange={handleChange} >
          {
            options.map(
              (option) => (
                <option value={option.value}> {option.label} </option>
              )
            )
          }
        </select>

      </label>

        <div>
          <p>Current selection: {isInKilos? "KG and Centimeters" : "LBS and Inches" } </p>
        </div>

    </div>
   );
}

export default Dropdown;