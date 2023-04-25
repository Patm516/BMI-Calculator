import { useEffect, useMemo, useState } from "react";
import './style.css'

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

function BMICard({isInKg}) {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  useEffect(
    () => {
        if (isInKg) { // to kilos now
            setHeight(Math.round(height/0.393701), 2);
            setWeight(Math.round(weight/2.2), 2);
        }
        else {
            setHeight(Math.round(height*0.393701), 2);
            setWeight(Math.round(weight*2.2), 2);
        }
    },
    [isInKg]
  )

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    let newHeight = isInKg?inputHeight:inputHeight*0.393701;
    setHeight(Math.round(newHeight), 4);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = isInKg?(height / 100):(height);

    if (isInKg) {
        return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
    }
    else {
        return ( (703*weight) / (calculatedHeight * calculatedHeight)).toFixed(1);
    }
  }, [weight, height]);

  return (
    <main>
      <h1>Welcome to BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output" style={{color:'black'}}>Weight: {weight} {isInKg?"kg":"lbs"}</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output" style={{color:'black'}}>Height: {height} {isInKg?"cm":"in"}</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}


export default BMICard ;