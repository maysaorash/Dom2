
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

function convertCelsius() {
    // Grab celsius input
    let celsius = document.getElementById('celsius');
    // grab kelvin input
    let kelvin = document.getElementById('kelvin');
    // grab fahrenheit
    let fahrenheit = document.getElementById('fahrenheit');
    // convert celsius to kelvin
    let toKelvin = Number(celsius.value) + 273;
    // convert celcius to fahrenheit
    let toFahrenheit = (Number(celsius.value) * 9/5) + 32;
    // insert result to the kelvin input
    kelvin.value = toKelvin;
    // insert result to the fahrenheit input
    fahrenheit.value = toFahrenheit;
  }
  
  function convertKelvin() {
    // Grab celsius input
    let celsius = document.getElementById('celsius');
    // grab kelvin input
    let kelvin = document.getElementById('kelvin');
    // grab fahrenheit
    let fahrenheit = document.getElementById('fahrenheit');
    // convert kelvin to celcius
    let toCelsius = Number(kelvin.value) - 273;
    // convert kelvin to fahrenheit
    let toFahrenheit =(Number(kelvin.value) - 273) * 9/5 + 32;
    // insert result to the celsius input
    celsius.value = toCelsius;
    // insert result to the fahrenheit input
    fahrenheit.value = toFahrenheit;
  }
  
  function convertFahrenheit() {
    // Grab celsius input
    let celsius = document.getElementById('celsius');
    // grab kelvin input
    let kelvin = document.getElementById('kelvin');
    // grab fahrenheit
    let fahrenheit = document.getElementById('fahrenheit');
    // convert fahrenheit to celcius
    let toCelsius = (Number(fahrenheit.value) - 32) * 5/9;
    // convert fahrenheit to kelvin
    let toKelvin = (Number(fahrenheit.value) - 32) * 5/9 + 273;
    // insert result to the celsius input
    celsius.value = Math.round(toCelsius);
    // insert result to the kelvin input
    kelvin.value = Math.round(toKelvin);
  }
  
  // listen click event on the button
  // when it's triggered:
  // -- grab the celsius
  // -- calculate the kelvin
  // -- insert kelvin to kelvin input