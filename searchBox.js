const tabs = document.querySelectorAll("#search-box-tabs li");
const whereToButton = document.getElementById("where-to-button");
const whereToBox = document.getElementById("where-to-box");
const travellersButton = document.getElementById("travellers-number-button");
const travellersBox = document.getElementById("travellers-box");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

whereToButton.addEventListener("click", () => {
  whereToBox.style.display = "block";
});

travellersButton.addEventListener("click", () => {
  travellersBox.style.display = "block";
});

searchButton.addEventListener("click", () => {
  searchResults.style.display = "flex";
  document.getElementById("main-container").style.filter = "blur(5px)";
});

document.addEventListener("click", (e) => {
  if (!whereToBox.contains(e.target) && e.target !== whereToButton) {
    whereToBox.style.display = "none";
  }
  if (!travellersBox.contains(e.target) && e.target !== travellersButton) {
    travellersBox.style.display = "none";
  }
  if (!searchResults.contains(e.target) && e.target !== searchButton) {
    searchResults.style.display = "none";
    document.body.style.filter = "none";
  }
});
