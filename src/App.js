// 2a. Open the App.js file and add the necessary import line at the top of the file that allows the MCUShows component to be used in the App.js file
import MCUShows from "./mcu-shows/MCUShows";

// Below the MCUShows import in the App.js file, create the following variable
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
 } 

function App() {
  return (
    <div>
      {/* 2b. Inside the div in the App component, create an h1 with the following text: "FINAL REACT EXERCISE" */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c. Below the h1 pass in an MCUShows component */}
      {/* 5b. Add a prop called "dates" to the MCUShows component that is being passed into the App.js component. Also, set the releaseDates variable as the value that is passed into the "dates" prop */}
      <MCUShows dates={releaseDates}/>
    </div>
  );
}

export default App;
