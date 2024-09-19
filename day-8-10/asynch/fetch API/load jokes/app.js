let fetchBtn = document.getElementById("load-joke");
let jokeTypeSelect = document.getElementById("joke-type");

fetchBtn.addEventListener("click", () => {
  
  const fetchJokeAPI = async () => {
    try {
      const jokeType = jokeTypeSelect.value; // Get the selected joke type
      const loadJoke = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}`);
      const jokeJSON = await loadJoke.json();
      
      let displayJoke = document.getElementById("joke-content");

      if (jokeJSON.type === 'single') {
        displayJoke.innerHTML = jokeJSON.joke;
      } else {
        displayJoke.innerHTML = `${jokeJSON.setup} - ${jokeJSON.delivery}`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchJokeAPI(); // Call the async function after defining it

});
