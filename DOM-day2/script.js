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
// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → Reads the static, initial text written in the raw HTML file.
// .value               → Reads the live, real-time string currently typed into the input box by the user.

movieForm.addEventListener("submit", (event) => {
  // 1. Stop the browser from reloading the page
  //    Without this line, the page refreshes on every submit and you lose everything
  event.preventDefault()

  // 2. Read the movie title from the input — use .value, not getAttribute
  const title = titleInput.value

  // 3. Read the genre the same way
  const genre = genreInput.value

  // 4. Log both values to the console
  console.log("Title: ", title);
  console.log("Movie Genre:", genre)
  // 3. Phase 4 Connection: Pass those exact variables into your card builder
  const newCard = createMovieCard(title, genre);

  // 4. Append the newly created card into your <ul> list
  movieList.appendChild(newCard);
  //    Type a title and genre, submit — confirm you see them in DevTools

  // 5. At the end, reset the form so the inputs are blank for the next entry
  movieForm.reset()
  //    .reset() clears all inputs in the form at once — no need to blank them one by one

  // 6. Don't build cards yet — that's Phase 4
})

function createMovieCard(title, genre) {
 
//   <li class="movie-card" data-genre="Sci-Fi">
//   <div class="movie-info">
//     <span class="movie-title">Inception</span>
//     <span class="movie-genre">Sci-Fi</span>
//   </div>
//   <div class="movie-actions">
//     <button class="watch-btn">Mark Watched</button>
//     <button class="remove-btn">Remove</button>
//   </div>
// </li>
     // 1. Create the outer <li>
    const li = document.createElement("li");
    //    - give it the class "movie-card"
    li.classList.add("movie-card")
    //    - use setAttribute to set data-genre to the genre value

    li.setAttribute("data-genre" , genre || "No genre")
 

    // 2. Create a <div> for the info section — class "movie-info"
    const infoDiv = document.createElement("div")
    infoDiv.classList.add("movie-info")
    //    Inside it, create two <span> elements:
    //    - one with class "movie-title" — set its textContent to title
    const spanTitle = document.createElement("span")
    spanTitle.classList.add("movie-title")
    spanTitle.textContent = title;
//    - one with class "movie-genre" — set its textContent to genre (show "No genre" if empty)
    const spanGenre = document.createElement("span")
    spanGenre.classList.add("movie-genre")
    spanGenre.textContent = genre ? genre : "no genre";
//    Append both spans into the info div
    infoDiv.appendChild(spanTitle);
    infoDiv.appendChild(spanGenre);


  // 3. Create a <div> for the buttons — class "movie-actions"
    const movieAction = document.createElement("div")

  //    Inside it, create two <button> elements:
    const watchBtn = document.createElement("button")
    const removeBtn = document.createElement("button")
  //    - one with class "watch-btn" — textContent "Mark Watched"
    watchBtn.classList.add("watch-btn")
    watchBtn.textContent = "Mark Watched";
  //    - one with class "remove-btn" — textContent "Remove"
    removeBtn.classList.add("remove-btn")
    removeBtn.textContent = "Remove"
  //    Append both buttons into the actions div
    movieAction.appendChild(watchBtn);
    movieAction.appendChild(removeBtn);

  // 4. Append the info div and actions div into the <li>
    li.appendChild(infoDiv);
    li.appendChild(movieAction);

  // 5. return the card — do NOT append it here
    return li;
  //    The function's job is to build and return. Appending is the caller's job.
}

