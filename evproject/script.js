function searchGames() {
    // Get the user input from the search input field
    var userInput = document.getElementById("search-input").value.toLowerCase();

    // Your list of top 10 games in recent
    var topGames = [
        "GTA-V",
        "NEED FOR SPEED",
        "Game 3",
        "Game 4",
        "Game 5",
        "Game 6",
        "Game 7",
        "Game 8",
        "Game 9",
        "Game 10"
    ];

    var searchResults = [];

    // Search for matching games
    for (var i = 0; i < topGames.length; i++) {
        if (topGames[i].toLowerCase().includes(userInput)) {
            searchResults.push(topGames[i]);
        }
    }

    // Display the search results
    var searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    if (searchResults.length === 0) {
        searchResultsContainer.innerHTML = "No matching games found.";
    } else {
        for (var j = 0; j < searchResults.length; j++) {
            var resultItem = document.createElement("p");
            resultItem.textContent = searchResults[j];
            searchResultsContainer.appendChild(resultItem);
        }
    }
}