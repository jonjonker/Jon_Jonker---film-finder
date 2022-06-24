// Add all movies to Dom
      
const addMoviesToDom = (movies) => {

    movies.map((movie) => {

        const listItem = document.createElement("li");
        const link = document.createElement("a");
        const image = document.createElement("img");
        const movieTitle = document.createElement("h3");

        const textNode = document.createTextNode(movie.title);
            
        image.src = movie.poster;
        link.href = `https://www.imdb.com/title/${movie.imdbID}`;
        link.setAttribute('target', '_blank');

        listItem.appendChild(link);
        link.appendChild(image);
        listItem.appendChild(movieTitle);
        movieTitle.appendChild(textNode);
        
        const movielist = document.getElementById("movie-container");

        movielist.appendChild(listItem);

    })
};

addMoviesToDom(movies);

// Filter movies based on radio button changes

function removeMoviesFromDom() {
    const movielist = document.getElementById("movie-container");
        let removeMovies = movielist.lastElementChild;
        while (removeMovies) {
            movielist.removeChild(removeMovies);
            removeMovies = movielist.lastElementChild;
        }}

const moviefilter = document.getElementsByName("filter").forEach(filter => {

    filter.addEventListener("change", 
    function handleOnChangeEvent(event) {
        removeMoviesFromDom();

        if (event.target.value === "allmovies") {
            addMoviesToDom(movies)
        }
        else if (event.target.value === "newestmovies") {
            const filterNewMovies = movies.filter(movies => movies.year >= 2014);
            addMoviesToDom(filterNewMovies);
        }
        else {
            const movieTitle = event.target.value[0].toUpperCase() + event.target.value.slice(1);
            const filteredMovies = movies.filter(movies => movies.title.includes(movieTitle))
            addMoviesToDom(filteredMovies);
        }
    })
    });
 
    // Search bar

    const moviesUl = document.getElementById('movie-container');
    const searchBar = document.getElementById('searchbar');
    let movieNames = movies;    
    
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toUpperCase();
       
        const filteredTitels = movieNames.filter((movies) => {
            return (
                movies.title.toUpperCase().includes(searchString)
            );
        });
        removeMoviesFromDom();
        addMoviesToDom(filteredTitels);
    });
