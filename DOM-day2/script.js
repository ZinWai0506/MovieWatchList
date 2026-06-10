const appTitle = document.getElementById("app-title")
const movieCount = document.getElementById("movie-count")
const movieForm = document.getElementById("movie-form")
const titleInput = document.getElementById("title-input")
const genreInput = document.getElementById("genre-input")
const movieList = document.getElementById("movie-list")
const clearWatchedBtn =document.getElementById("clear-watched-btn")
const filterBtns = document.querySelectorAll("filter-btn")
// select #movie-form        → store in movieForm
// select #title-input       → store in titleInput
// select #genre-input       → store in genreInput
// select #movie-list        → store in movieList
// select #clear-watched-btn → store in clearWatchedBtn


appTitle.textContent = "My Movie Watchlist"
//this function chages the tittle on the main page
console.log("Count says:", movieCount.textContent)

movieCount.textContent = "0 movies"

// .add() puts a class on the element
movieCount.classList.add("active-filter")
//this function seems to have highlighted the amount of movies

// .remove() takes it off
movieCount.classList.remove("active-filter")
//with this function it stopped highlighting it

// .toggle() adds if missing, removes if present — one call does both
movieCount.classList.toggle("active-filter")
movieCount.classList.toggle("active-filter")


// select ALL elements with class "filter-btn" using querySelectorAll
// store them in filterBtns — you'll loop over them in Phase 6
console.log("______DOM Selection Checkpoint")
console.log("appTitle: ",appTitle);
console.log("movieCount:" ,movieCount);
console.log("movieForm:",movieForm);
console.log("titleInput:",titleInput);
console.log("genreInput:",genreInput);
console.log("movieList:",movieList);
console.log("clearWatchedBtn:",clearWatchedBtn);
console.log("filterBtn(nodelist):",filterBtns);