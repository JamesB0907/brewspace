import { useEffect, useState } from "react"
import { Recipe } from "./Recipe"


export const RecipeList = ({ recipes, setRecipes, searchTermState, searchResults }) => {

    const localBrewspaceUser = localStorage.getItem("nutshell_user")
    const brewspaceUserObject = JSON.parse(localBrewspaceUser)

    return (
        <article className="recipe__page">
            {searchResults?.length > 0 ? (
                searchResults?.map((recipe) => (
                    <Recipe
                        className="recipe__box"
                        key={`recipe--${recipe.id}`}
                        setRecipes={setRecipes}
                        currentUser={brewspaceUserObject}
                        recipeObject={recipe}
                    />
                ))
            ) : (
                recipes.map((recipe) => (
                    <Recipe
                        className="recipe__box"
                        key={`recipe--${recipe.id}`}
                        setRecipes={setRecipes}
                        currentUser={brewspaceUserObject}
                        recipeObject={recipe}
                    />
                ))
            )}
        </article>
    )
}