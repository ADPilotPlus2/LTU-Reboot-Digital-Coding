console.log("Hi, encore un fois");


const favouriteRecipe = {
    recipeTitle: "Curry",
    servings: 6,
    ingredients: ["paste", "meat", "tomato"],
    directions:["make", "taste", "eat"],
    letsCook: function giveTitle (favouriteRecipe) {
        var thisRecipeTitle = favouriteRecipe.recipeTitle;
        return thisRecipeTitle;
    }

}


console.log("I'm hungry! Let's cook a "+ favouriteRecipe.giveTitle(favouriteRecipe));



/*console.log(favouriteRecipe.recipeTitle);

for (var i = 0; i<=favouriteRecipe.ingredients.length; i++) {

    let ingredients = favouriteRecipe.ingredients;
    console.log(ingredients[i]);
}
for (var i = 0; i<=favouriteRecipe.directions.length; i++) {
    
    let directions = favouriteRecipe.directions;
    console.log(directions[i]);
}



*/
