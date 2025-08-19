async function getRecipes() {
  let query = document.getElementById("searchBox").value;
  if (query === "") {
    alert("Please enter an ingredient!");
    return;
  }

  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
  let response = await fetch(url);
  let data = await response.json();

  let resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (data.meals) {
    data.meals.forEach(meal => {
      resultsDiv.innerHTML += `
        <div class="recipe">
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
        </div>
      `;
    });
  } else {
    resultsDiv.innerHTML = "<p>No recipes found. Try another ingredient!</p>";
  }
}