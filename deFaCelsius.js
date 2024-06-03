const temperaturesInFahrenheit=[32,68,95,104,212]
const temperaturesInCelsius=temperaturesInFahrenheit.map(fahrenheit=>(5/9)*(fahrenheit-32))
console.log('Temperatures In Fahrenheit: ',temperaturesInFahrenheit)
console.log('Temperatures In Celsius: ',temperaturesInCelsius)