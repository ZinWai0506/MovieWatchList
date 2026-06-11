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


// getAttribute reads the HTML attribute as it was written in the file
console.log(titleInput.getAttribute("placeholder"))  // → "Movie title..."
console.log(titleInput.getAttribute("type"))         // → "text"
console.log(titleInput.getAttribute("required"))     // → "" (empty string = it exists)

// setAttribute changes or adds an attribute
titleInput.setAttribute("placeholder", "Try: The Matrix")
// Refresh — the placeholder text in the input changed

// removeAttribute removes it entirely
titleInput.removeAttribute("required")
// The input is no longer required — blank submissions won't be blocked
titleInput.setAttribute("required", "")  // put it back

titleInput.getAttribute("value")  // → null (the HTML never had a value attribute)
titleInput.value        


movieForm.addEventListener("submit", (event) => {
  // 1. Stop the browser from reloading the page
  //    Without this line, the page refreshes on every submit and you lose everything
  event.preventDefault()

  // 2. Read the movie title from the input — use .value, not getAttribute
  const title = titleInput.value

  // 3. Read the genre the same way
  const genre = genreInput.value

  // 4. Log both values to the console
  //    Type a title and genre, submit — confirm you see them in DevTools
  console.log("Title:", title)
  console.log("Genre:", genre)


  // 5. At the end, reset the form so the inputs are blank for the next entry
  movieForm.reset()
  //    .reset() clears all inputs in the form at once — no need to blank them one by one

  // 6. Don't build cards yet — that's Phase 4
})

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