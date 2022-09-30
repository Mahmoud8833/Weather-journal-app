/* Global Variables */
const apiKey = "&appid=abca8acf5deb3392f8c67a21434fa83a&units=imperial";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.toDateString();

/* Getting the button and adding an event listener function that is called when the button is clicked. */
const btn = document.getElementById("generate");
btn.addEventListener("click", () => {
  let zip = document.getElementById("zip");
  let felling = document.getElementById("feelings").value;

  /* Fetching the data from the API. */
  fetch(baseUrl + zip.value + apiKey)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      postData("/", data);
      return data;
    })
    /* A function that takes the result of the API call and updates the UI with the data. */
    .then(function updateUI(result) {
      let outDate = document.getElementById("date");
      let outTemp = document.getElementById("temp");
      let outFeel = document.getElementById("content");
      outDate.innerText = `date: ${newDate}`;
      outTemp.innerText = `Tempreture: ${result.main.temp} F`;
      outFeel.innerText = `My Feellings: ${felling}`;
    })
    .catch((err) => {
      console.error(err);
    });
});

// A function that takes a URL and data as input, and returns the response from the server
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error", error);
  }
};
