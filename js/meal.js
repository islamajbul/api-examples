const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    // console.log(meals);
    // Step 01: container element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal);

        // Step 02: Create child for element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        // Step 03: Set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        `

        // Step 04: Append Child
        mealsContainer.appendChild(mealDiv);

    });
}

const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    // Search meal
    console.log(searchText);
    loadMeals(searchText);
}
loadMeals('rice');