function showInfo(){
    var name =document.getElementById("meal").value ;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch (url)
    .then (res => res.json())
    .then (data => process (data));
}

function process (data){
    var parent = document.getElementById("parent");
    parent.textContent="";
    for (var a = 0; a < data.meals.length; a++) {
        //if (a === 5) break;
        var child = document.createElement("div");
        child.classList.add("innerStyle");
        child.innerHTML = `<h2>Meal Name : ${data.meals[a].strMeal}</h2>
                          <h4>Categoty : ${data.meals[a].strCategory}</h4>
                          <h4>Origin : ${data.meals[a].strArea}</h4>
                          <img src="${data.meals[a].strMealThumb}" alt="${data.meals[a].strMeal}">
                          <h3>Cooking Instruction:</h3><br>
                           ${data.meals[a].strInstructions}<br>
                           <p>Ingredient: ${data.meals[a].strIngredient1} , ${data.meals[a].strIngredient2} , ${data.meals[a].strIngredient3} ,${data.meals[a].strIngredient4},
                            ${data.meals[a].strIngredient5} , ${data.meals[a].strIngredient6} , ${data.meals[a].strIngredient7} , ${data.meals[a].strIngredient8} , ${data.meals[a].strIngredient9},
                            ${data.meals[a].strIngredient10} , ${data.meals[a].strIngredient11} , ${data.meals[a].strIngredient12} , ${data.meals[a].strIngredient13} , ${data.meals[a].strIngredient14}
                            ${data.meals[a].strIngredient15} , ${data.meals[a].strIngredient16} , ${data.meals[a].strIngredient17} , ${data.meals[a].strIngredient18} , ${data.meals[a].strIngredient19} , ${data.meals[a].strIngredient20}<br><br>
                            <button id="button"><a href="${data.meals[a].strYoutube}">View Cooking Tutorial</button>`
            parent.appendChild(child);              
    }
}