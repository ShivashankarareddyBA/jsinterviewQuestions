// problem create a traffic light system where the lights cycle from green to yellow to red at specified intervals.
// continuosly looping the dureation for each ligt should be red:10 seconds yellow light : 5 seconds green light : 15 seconds
// addtionaly, i need to include abutton that allows manual activation of any light and on option to increase the timer by a user-specified number of seconds.


import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("green");
  const [timers, setTimers] = useState({
    red: 10000,     // 10 seconds for red light
    yellow: 5000,   // 5 seconds for yellow light
    green: 15000,   // 15 seconds for green light
  });
  const [timeLeft, setTimeLeft] = useState(timers.green);

  // Switch lights based on current state
  useEffect(() => {
    const timer = setTimeout(() => {
      switch (currentLight) {
        case "green":
          setCurrentLight("yellow");
          setTimeLeft(timers.yellow);
          break;
        case "yellow":
          setCurrentLight("red");
          setTimeLeft(timers.red);
          break;
        case "red":
          setCurrentLight("green");
          setTimeLeft(timers.green);
          break;
        default:
          setCurrentLight("green");
      }
    }, timeLeft);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentLight, timeLeft, timers]);

  // Function to manually change lights
  const changeLightManually = (light) => {
    setCurrentLight(light);
    setTimeLeft(timers[light]);
  };

  // Function to increase timer for the current light
  const increaseTimer = (seconds) => {
    setTimers({
      ...timers,
      [currentLight]: timers[currentLight] + seconds * 1000,
    });
    setTimeLeft(timeLeft + seconds * 1000);
  };

  return (
    <div>
      {/* Traffic Light Visual */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: currentLight === "red" ? "red" : "gray",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: currentLight === "yellow" ? "yellow" : "gray",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundColor: currentLight === "green" ? "green" : "gray",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "10px",
          }}
        ></div>
      </div>

      {/* Control buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => changeLightManually("red")}>Activate Red</button>
        <button onClick={() => changeLightManually("yellow")}>Activate Yellow</button>
        <button onClick={() => changeLightManually("green")}>Activate Green</button>
      </div>

      {/* Increase timer */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          id="timeIncrease"
          placeholder="Add seconds"
          onKeyDown={(e) => {
            if (e.key === "Enter") increaseTimer(parseInt(e.target.value));
          }}
        />
        <button onClick={() => increaseTimer(parseInt(document.getElementById("timeIncrease").value))}>
          Increase Timer
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Traffic Light System</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//     <div class="traffic-light">
//         <div class="light red"></div>
//         <div class="light yellow"></div>
//         <div class="light green"></div>
//     </div>
    
//     <div class="controls">
//         <button onclick="changeLight('red')">Activate Red</button>
//         <button onclick="changeLight('yellow')">Activate Yellow</button>
//         <button onclick="changeLight('green')">Activate Green</button>
//         <input type="number" id="timeIncrease" placeholder="Add seconds">
//         <button onclick="increaseTime()">Increase Timer</button>
//     </div>

//     <script src="script.js"></script>
// </body>
// </html>

// CSS file .. 
// body {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     font-family: Arial, sans-serif;
//     background-color: #f4f4f4;
//     padding: 20px;
// }

// .traffic-light {
//     width: 100px;
//     height: 300px;
//     background-color: #333;
//     padding: 10px;
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// }

// .light {
//     width: 80px;
//     height: 80px;
//     border-radius: 50%;
//     background-color: #111;
//     opacity: 0.2;
// }

// .red {
//     background-color: red;
// }

// .yellow {
//     background-color: yellow;
// }

// .green {
//     background-color: green;
// }

// .controls {
//     margin-top: 20px;
// }

// button {
//     margin: 10px;
//     padding: 10px;
//     font-size: 16px;
//     cursor: pointer;
// }

// input {
//     padding: 10px;
//     font-size: 16px;
// }


// javascript file .

// let currentLight = 'green'; 
// let timers = {
//     red: 10000,     
//     yellow: 5000,
//     green: 15000   
// };

// let intervalId;
// let lightElements = {
//     red: document.querySelector('.red'),
//     yellow: document.querySelector('.yellow'),
//     green: document.querySelector('.green')
// };

// // Function to switch lights automatically
// function startTrafficCycle() {
//     setLight(currentLight);
//     intervalId = setInterval(() => {
//         switch (currentLight) {
//             case 'green':
//                 currentLight = 'yellow';
//                 break;
//             case 'yellow':
//                 currentLight = 'red';
//                 break;
//             case 'red':
//                 currentLight = 'green';
//                 break;
//         }
//         setLight(currentLight);
//     }, timers[currentLight]);
// }

// // Function to set the active light
// function setLight(light) {
//     clearInterval(intervalId); // Clear previous interval
//     Object.values(lightElements).forEach(el => el.style.opacity = 0.2);
//     lightElements[light].style.opacity = 1;
//     intervalId = setInterval(startTrafficCycle, timers[light]);
// }

// // Function to manually change the light
// function changeLight(light) {
//     clearInterval(intervalId); // Stop automatic cycling
//     currentLight = light;
//     setLight(light);
// }

// // Function to increase the time of the current light
// function increaseTime() {
//     let addedTime = parseInt(document.getElementById('timeIncrease').value);
//     if (!isNaN(addedTime) && addedTime > 0) {
//         timers[currentLight] += addedTime * 1000; // Add time in seconds
//         alert(`${addedTime} seconds added to ${currentLight} light.`);
//     } else {
//         alert('Please enter a valid number of seconds.');
//     }
// }

// // Start the automatic light cycle on page load
// startTrafficCycle();
