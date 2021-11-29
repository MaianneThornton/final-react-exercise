// 2a. Open the App.js file and add the necessary import line at the top of the file that allows the MCUShows component to be used in the App.js file
import MCUShows from "./mcu-shows/MCUShows";

// BONUS: 6a. In the App.js file, import the useState function at the top of the file
//  and BONUS: 8a
import { useState, useEffect } from 'react';

// 5a. Below the MCUShows import in the App.js file, create the following variable
const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
};

//  BONUS: 6b. Create the following array variable below the releaseDates variable:
const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
];

function App() {
  // BONUS: 6c. Above the return line in the App function component, use the useState function to set the starting state value to 0 (Zero). Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…
  const [index, setIndex] = useState(0);

  // BONUS: 7a. In the App function component, use another useState function below the first one and set the starting state value to 0 (Zero) on this one as well. Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…
  const [num, setNum] = useState(0);

  // BONUS: 8a. Use the useEffect Hook/Function so that the message "The Next MCU Character has been displayed" displays in an alert when the page loads and also when the "NEXT MCU CHARACTER" button is pressed, but NOT when the "RANDOM MCU CHARACTER" button is pressed.
  // The function (1st argument) passed into the useEffect function/hook will run every time the state value ("num" in this example) that is passed into the array (2nd argument) is updated.
  // NOTE: If nothing is passed in for a 2nd argument, then the function will run whenever any state values are updated.
  useEffect(() => {
    alert("The Next MCU Character has been displayed");
  }, [num]);
  // BONUS 6f
  function newIndex() {
    const randomIndex = Math.floor(Math.random() * mcuCharacters.length);
    setIndex(randomIndex);
  }

  // BONUS: 7d
  function newNum() {
    if (num < mcuCharacters.length - 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }
  return (
    <div>
      {/* 2b. Inside the div in the App component, create an h1 with the following text: "FINAL REACT EXERCISE" */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c. Below the h1 pass in an MCUShows component */}
      {/* 5b. Add a prop called "dates" to the MCUShows component that is being passed into the App.js component. Also, set the releaseDates variable as the value that is passed into the "dates" prop */}
      {/* BONUS 6f */}
      {/* BONUS: 7d */}
      <MCUShows
        dates={releaseDates}
        indexTwo={newIndex}
        numTwo={newNum} />

      {/* BONUS: 6d. Below the MCUShows component in the App.js file create an h1 element with the following content inside: "Random MCU Character:" */}
      {/* BONUS 6f */}
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>

      {/* BONUS: 7b. Below the Random MCU Character h1 in the App.js file create another h1 element with the following content inside: "Next MCU Character:" */}
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>

    </div>
  );
}

export default App;
