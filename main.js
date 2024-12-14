// // let btn = document.getElementById("btn");

// // btn.addEventListener("click", control);
// // function control() {
// //   // console.log(control);
// //   let red = document.getElementById("red");
// //   let yellow = document.getElementById("yellow");
// //   let green = document.getElementById("green");

// //   if (red.classList.contains("active")) {
// //     red.classList.remove("active");
// //     yellow.classList.add("active");
// //     console.log("Ready");
// //   } else if (yellow.classList.contains("active")) {
// //     yellow.classList.remove("active");
// //     green.classList.add("active");
// //     console.log("Go");
// //   } else if (green.classList.contains("active")) {
// //     green.classList.remove("active");
// //     red.classList.add("active");
// //     console.log("Stop");
// //   }
// // };

// // document.getElementById("red").classList.add("active");

// // Function to simulate traffic lights changing with actions
// function trafficLight() {
//   let currentLight = 0; // 0 for Red, 1 for Yellow, 2 for Green
  
//   // Array of states for the lights and their actions
//   const lights = [
//     { color: "Red", action: "Stop the car" },
//     { color: "Yellow", action: "Prepare to go" },
//     { color: "Green", action: "Go" }
//   ];

//   // Function to change the traffic light and perform the action
//   function changeLight() {
//     // Log current light color and action
//     console.log(`Light: ${lights[currentLight].color} - Action: ${lights[currentLight].action}`);
    
//     // Move to the next light in the cycle
//     currentLight = (currentLight + 1) % 3; // This makes sure the light goes from Green back to Red
//   }

//   // Change light every 3 seconds
//   setInterval(changeLight, 3000);
// }

// // Call the function to start the traffic light simulation
// trafficLight();
    // Function to simulate traffic lights changing with actions
    function trafficLight() {
      let currentLight = 0; // 0 for Red, 1 for Yellow, 2 for Green

      // Array of lights and their actions
      const lights = [
        { color: "Red", action: "Stop the car", lightId: "red-light" },
        { color: "Yellow", action: "Prepare to go", lightId: "yellow-light" },
        { color: "Green", action: "Go", lightId: "green-light" }
      ];

      // Function to change the traffic light and perform the action
      function changeLight() {
        // Reset all lights to default (gray)
        document.getElementById("red-light").style.backgroundColor = "#555";
        document.getElementById("yellow-light").style.backgroundColor = "#555";
        document.getElementById("green-light").style.backgroundColor = "#555";
        
        // Set the active light to its respective color
        document.getElementById(lights[currentLight].lightId).style.backgroundColor = lights[currentLight].color.toLowerCase();
        
        // Update the action text
        document.getElementById("action-text").innerText = lights[currentLight].action;

        // Move to the next light in the cycle
        currentLight = (currentLight + 1) % 3; // This makes sure the light goes from Green back to Red
      }

      // Change light every 5 seconds
      setInterval(changeLight, 5000);
    }

    // Call the function to start the traffic light simulation
    trafficLight();
