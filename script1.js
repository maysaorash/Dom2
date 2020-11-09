
// function calculate() {
//   // Grab celsius input
//   let celsius = document.getElementById('celsius');
//   // grab kelvin input
//   let kelvin = document.getElementById('kelvin');
//   // convert celsius to kelvin
//   let result = Number(celsius.value) + 273;
//   // insert result to the kelvin input
//   kelvin.value = result;
// }

function celsiusToKelvin() {
    // Grab celsius input
    let celsius = document.getElementById('celsius');
    // grab kelvin input
    let kelvin = document.getElementById('kelvin');
    // convert celsius to kelvin
    let result = Number(celsius.value) + 273.15;
    // insert result to the kelvin input
    kelvin.value = result;
  }
  
  function kelvinToCelsius() {
    // Grab celsius input
    let celsius = document.getElementById('celsius');
    // grab kelvin input
    let kelvin = document.getElementById('kelvin');
    // convert celsius to kelvin
    let result = Number(kelvin.value) - 273.15;
    // insert result to the kelvin input
    celsius.value = result;
  }
  
  // listen click event on the button
  // when it's triggered:
  // -- grab the celsius
  // -- calculate the kelvin
  // -- insert kelvin to kelvin input