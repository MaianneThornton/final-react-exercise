import "./MCUShows.css";

function MCUShows (){
  // 1c. Inside the MCUShows function/component, use the RETURN keyword with parentheses to have the MCUShows function/component return the following elements: h1, h2, and 4 p (paragraph) elements. Put the following text in each element. (NOTE: Notice the colon and space after each show name)
  return (
    <div>
      {/* 3a. Go back to the MCUShows.js file. Using inline styling in React, Set the font (A.K.A. font family) for the h1 to the "Georgia" font. Also, add an underline to the h1. */}
      <h1 style={{fontFamily: `Georgia`, textDecoration:`underline`}}>Disney+</h1>
      <h2>MCU Show Release Dates</h2>
      <p>WandaVision: </p>
      <p>The Falcon and the Winter Soldier: </p>
      <p>Loki: </p>
      <p>What If...?: </p>
      <p>Hawkeye: </p>
    </div>
  );
}
// 1d. Add the export line at the bottom of the file
export default MCUShows;