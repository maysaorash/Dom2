// Grab celsius input
let celsius = document.getElementById('celsius');
// grab kelvin input
let kelvin = document.getElementById('kelvin');
// grab fahrenheit
let fahrenheit = document.getElementById('fahrenheit');

const convertCelsius = function() {
  // insert result to the kelvin input
  kelvin.value = Number(celsius.value) + 273;
  // insert result to the fahrenheit input
  fahrenheit.value = (Number(celsius.value) * 9/5) + 32;
}

document.getElementById('celsius').oninput = convertCelsius;

function convertKelvin() {
  // insert result to the celsius input
  celsius.value = Number(kelvin.value) - 273;
  // insert result to the fahrenheit input
  fahrenheit.value = (Number(kelvin.value) - 273) * 9/5 + 32;
}
document.getElementById('kelvin').oninput = convertKelvin;


function convertFahrenheit() {
  // insert result to the celsius input
  celsius.value = Math.round(Number(fahrenheit.value) - 32) * 5/9;
  // insert result to the kelvin input
  kelvin.value = Math.round(Number(fahrenheit.value) - 32) * 5/9 + 273;
}
document.getElementById('fahrenheit').oninput = convertFahrenheit;


// listen click event on the button
// when it's triggered:
// -- grab the celsius
// -- calculate the kelvin
// -- insert kelvin to kelvin input