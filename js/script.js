
const searchFood = () => {
    const search = document.getElementById('inputField');
    const searchText = search.value;

    search.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
    .then(response => response.json())
    .then(data => showFood(data.meals));
}


const showFood = data => {

    const showResult = document.getElementById('showData');
    showResult.textContent = '';

    data.forEach(meal => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('col-lg-3');
        resultDiv.classList.add('mb-4');
        resultDiv.innerHTML = `
            <div onclick = "itemDetails(${meal.idMeal})" class="card" style="width: 18rem;">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            
                </div>
            </div>
        `;

        showResult.appendChild(resultDiv);

    });


}


const itemDetails = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
    fetch(url)
    .then(response => response.json())
    .then(data => showDetails(data.meals[0]));
}

const showDetails = data => {
    
    

    const showdetails = document.getElementById('showData');
    showdetails.textContent = '';
    const detailsCard = document.createElement('div');
    detailsCard.classList.add('card');
    detailsCard.classList.add('w-50');
    
    
    detailsCard.innerHTML = `

        <img src="${data.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.strMeal}</h5>
            <p class="card-text">${data.strInstructions.slice(0,200)}</p>
            <a href="${data.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>

    `;
    showdetails.appendChild(detailsCard);
}