const apiKey = "ee6fd1c6d333c3b6966ad28fc92f9706"; // Your API key
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const genreApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
const movieByGenreUrl = (genreId) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

// Fetch and display popular movies
const getTrendingMovie = async () => {
  try {
    const fetchData = await fetch(apiUrl);
    const data = await fetchData.json();

    if (fetchData.ok) {
      console.log(data);
      
      // Function to update the movie details on the page
      const updateMovieDetails = (index) => {
        const movie = data.results[index]; // Get movie at the provided index
        document.getElementById("move-name").innerHTML = movie.original_title;
        document.getElementById("movie-description").innerHTML = movie.overview;

        const posterPath = movie.poster_path; // Get the poster path
        const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`; // Complete the image URL

        // Update the DOM element with the movie poster
        document.getElementById("movie-poster").src = imageUrl;
      };

      // Initially display the first movie
      updateMovieDetails(0);

      // Select all buttons with the class 'nextbtn'
      let nextBtns = document.querySelectorAll('.nextbtn');

      // Loop over each button and add an event listener to update the movie for the corresponding index
      nextBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          // Update the movie details based on the button's index
          updateMovieDetails(index);
        });
      });

    }
  } catch (error) {
    console.log(error);
  }
};

getTrendingMovie();

const getMovieGenreMoveList = async () => {
  try {
    // Step 1: Fetch the list of genres
    const genreResponse = await fetch(genreApiUrl);
    const genreData = await genreResponse.json();

    if (genreResponse.ok) {
      const genres = genreData.genres;
      let updateGenreHTML = ''; // Initialize the HTML string

      // Loop through the first few genres (example: the first 6 genres)
      for (let i = 0; i < 6; i++) {
        const genre = genres[i];

        // Step 2: Fetch movies for each genre
        const movieResponse = await fetch(movieByGenreUrl(genre.id));
        const movieData = await movieResponse.json();

        if (movieResponse.ok && movieData.results.length > 0) {
          let moviesHTML = ''; // For movies inside the genre

          // Step 3: Loop through the first 4 movies in the genre
          for (let j = 0; j < Math.min(4, movieData.results.length); j++) {
            const movie = movieData.results[j];

            // Append each movie's HTML in its own flex container
            moviesHTML += `
              <div class="movie-item">
                <div class="imgContainer">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                </div>
                <div class="contentMovie">
                  <p class="trendingMovieName">${movie.title}</p>
                  <p class="movie-Year">${new Date(movie.release_date).getFullYear()}</p>
                </div>
              </div>`;
          }

          // Step 4: Add the genre and its movies to the main container
          updateGenreHTML += `
            <div class="genre-block">
              <h2 class="categoryName">${genre.name}</h2>
              <div class="movies-row">
                ${moviesHTML}
              </div>
            </div>`;
        } else {
          console.log(`No movies found for genre: ${genre.name}`);
        }
      }

      // Append the final HTML to the trend-container
      document.querySelector('.trend-container').innerHTML = updateGenreHTML;
    } else {
      console.log("Failed to fetch genres");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

// Call the function to fetch genres and their movies
getMovieGenreMoveList();

