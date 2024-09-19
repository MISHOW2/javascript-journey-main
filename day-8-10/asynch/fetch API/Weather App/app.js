const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener("click", () => {
  const getWeather = async () => {
    try {
      const apiKey = ''; // Your actual API key
      const cityName = document.getElementById('cityInput').value;


      const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`); // Use cityName and add &units=metric to get temperature in Celsius

      if (weatherApi.ok) {
        const weatherData = await weatherApi.json();
        const temp = weatherData.main.temp; // Corrected to weatherData
        const desc = weatherData.weather[0].description; // Corrected to weatherData

        // Display the data in HTML elements
        document.getElementById("temperature").innerText = `Temperature: ${temp}°C`;
        document.getElementById("description").innerText = `Weather: ${desc}`;
      } else {
        console.error("Error fetching weather data");
      }

    } catch (error) {
      console.error("Failed to fetch weather data", error);
    }
  };

  getWeather();
});
