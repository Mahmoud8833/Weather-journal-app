/* Global Variables */
/* This is the API key and URL for the OpenWeatherMap API. */
const apiKey = "abca8acf5deb3392f8c67a21434fa83a&units=imperial";
const baseURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

async function getDate(url = "") {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data.list);
  return response;
}
getDate(baseURL);
