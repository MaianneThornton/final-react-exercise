import "./MCUShows.css";
// 5c
function MCUShows ({dates}){
  // 1c. Inside the MCUShows function/component, use the RETURN keyword with parentheses to have the MCUShows function/component return the following elements: h1, h2, and 4 p (paragraph) elements. Put the following text in each element. (NOTE: Notice the colon and space after each show name)
  return (
    // 4a. Add a class name of "MCUShows" to the the div in the MCUShows component
    <div className="MCUShows">
      {/* 3a. Go back to the MCUShows.js file. Using inline styling in React, Set the font (A.K.A. font family) for the h1 to the "Georgia" font. Also, add an underline to the h1. */}
      <h1 style={{fontFamily: `Georgia`, textDecoration:`underline`}}>Disney+</h1>
      <h2>MCU Show Release Dates</h2>
      {/* 5c. Go back to the MCUShows.js file. Plug the values from the dates property, which holds the value of the releaseDates object, in each p element after each appropriate show name. (HINT: The properties created for a component are stored in an object that can be accessed via a parameter in a function component) */}
      <p>WandaVision: {dates.wandaVision} </p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
      <p>Loki: {dates.loki}</p>
      <p>What If...?: {dates.whatIf}</p>
      <p>Hawkeye: {dates.hawkeye}</p>
    </div>
  );
}
// 1d. Add the export line at the bottom of the file
export default MCUShows;