const searchButton = document.getElementById("search-button");
const movieTitleInput = document.getElementById("movie-title");
const movieList = document.getElementById("movie-list");

searchButton.addEventListener("click", function() {
	// Clear previous search results
	movieList.innerHTML = "";

	// Get the user's search query
	const movieTitle = movieTitleInput.value;

	// Make the API request
	fetch(`http://www.omdbapi.com/?apikey=9bc80e9&s=${movieTitle}`)
		.then(response => response.json())
		.then(data => {
			// Display the search results
			data.Search.forEach(movie => {
				const movieCard = document.createElement("div");
				movieCard.classList.add("movie-card");
				movieCard.innerHTML = `
					<img class="movie -poster" src="${movie.Poster}" alt="${movie.Title}">
                    <div class="movie-title">${movie.Title}</div>
                    <div class="movie-year">${movie.Year}</div>
                    `;
                    movieList.appendChild(movieCard);
                    });
                    })
                    .catch(error => {
                    console.error(error);
                    alert("An error occurred while searching for movies. Please try again.");
                    });
                    });
