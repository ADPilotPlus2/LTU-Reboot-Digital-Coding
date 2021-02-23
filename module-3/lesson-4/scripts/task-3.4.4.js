console.log("Hi, encore un");

/*
var user = {
    hometown: "Colchester",
    hair: "Brown"
};

user.hometown = "Otley";
console.log(user);
*/

const favouriteRecipe = {
    recipeTitle: "Curry",
    servings: 6,
    ingredients: ["paste", "meat", "tomato"],
    directions:["make", "taste", "eat"]

}

console.log(favouriteRecipe.recipeTitle);

for (var i = 0; i<=favouriteRecipe.ingredients.length; i++) {

    let ingredients = favouriteRecipe.ingredients;
    console.log(ingredients[i]);
}
for (var i = 0; i<=favouriteRecipe.directions.length; i++) {
    
    let directions = favouriteRecipe.directions;
    console.log(directions[i]);
}
