import "./MCUShows.css";
// 5c & BONUS 6f & {mcuCharacters[index]}
function MCUShows({ dates, indexTwo, numTwo }) {
  // 1c. Inside the MCUShows function/component, use the RETURN keyword with parentheses to have the MCUShows function/component return the following elements: h1, h2, and 4 p (paragraph) elements. Put the following text in each element. (NOTE: Notice the colon and space after each show name)
  return (
    // 4a. Add a class name of "MCUShows" to the the div in the MCUShows component
    <div className="MCUShows">
      {/* 3a. Go back to the MCUShows.js file. Using inline styling in React, Set the font (A.K.A. font family) for the h1 to the "Georgia" font. Also, add an underline to the h1. */}
      <h1 style={{ fontFamily: `Georgia`, textDecoration: `underline` }}>Disney+</h1>
      <h2>MCU Show Release Dates</h2>
      {/* 5c. Go back to the MCUShows.js file. Plug the values from the dates property, which holds the value of the releaseDates object, in each p element after each appropriate show name. (HINT: The properties created for a component are stored in an object that can be accessed via a parameter in a function component) */}
      <p>WandaVision: {dates.wandaVision} </p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
      <p>Loki: {dates.loki}</p>
      <p>What If...?: {dates.whatIf}</p>
      <p>Hawkeye: {dates.hawkeye}</p>
      {/* BONUS: 6e. In the MCUShows component create a button below the final p (paragraph) element. Set the content/text for the button to the following text: "RANDOM MCU CHARACTER". */}
      {/* BONUS: 6f. Have a random MCU character name display in the new h1 element after "Random MCU Character: " whenever the RANDOM MCU CHARACTER button is clicked. */}
      <button onClick={indexTwo}>RANDOM MCU CHARACTER</button>

      {/* BONUS: 7c. In the MCUShows component create another button below the "RANDOM MCU CHARACTER" button. Set the content/text for the button to the following text: "NEXT MCU CHARACTER". */}
      {/* BONUS: 7d. Have an MCU Character name display in the new h1 element after "Next MCU Character: " whenever the NEXT MCU CHARACTER button is clicked. Have this set up so that it will start with "Scarlet Witch" when the page loads and every time the NEXT MCU CHARACTER button is clicked have it display whichever MCU Character name comes next in the "mcuCharacters" array. Also, whenever it gets to "Hawkeye", who is the last name in the array, have it start back at "Scarlet Witch" when the button is pressed again. */}
      <button onClick={numTwo}>NEXT MCU CHARACTER</button>
    </div>
  );
}
// 1d. Add the export line at the bottom of the file
export default MCUShows;