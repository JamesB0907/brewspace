import { useEffect, useState } from "react"
import { Recipe } from "./Recipe"

export const RecipeList = ({ recipes, setRecipes, searchTermState }) => {

    const [filteredRecipes, setFiltered] = useState([])
    const localBrewspaceUser = localStorage.getItem("nutshell_user")
    const brewspaceUserObject = JSON.parse(localBrewspaceUser)
    
    useEffect(
        () => {
            const searchedRecipes = recipes.filter(recipe => {
                return recipe.style.toLowerCase().includes(searchTermState.toLowerCase()) ||
                        recipe.name.toLowerCase().includes(searchTermState.toLowerCase()) ||
                        recipe.user.userName.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFiltered(searchedRecipes)
        },
        [recipes, searchTermState]
    )

    return (
        <article className="recipe__page">
            {
            searchTermState === ""
                ? recipes.map(
                    (recipe) =>
                        <Recipe
                            key={`recipe--${recipe.id}`}
                            setRecipes={setRecipes}
                            currentUser={brewspaceUserObject}
                            recipeObject={recipe} />
                )
                
            :filteredRecipes.map(
                (recipe) =>
                    <Recipe
                            key={`recipe--${recipe.id}`}
                            setRecipes={setRecipes}
                            currentUser={brewspaceUserObject}
                            recipeObject={recipe} />
            )
            }
        </article>
    )
}