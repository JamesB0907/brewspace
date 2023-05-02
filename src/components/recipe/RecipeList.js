import { useEffect, useState } from "react"
import { getRecipes } from "../APIManager"
import { Recipe } from "./Recipe"

export const RecipeList = () => {

    const [recipes, setRecipes] = useState([])
    const localBrewspaceUser = localStorage.getItem("nutshell_user")
    const brewspaceUserObject = JSON.parse(localBrewspaceUser)

    useEffect(
        () => {
            getRecipes()
            .then((data) => {
                setRecipes(data)
            })
        },
        []
    )

    return (
        <article className="recipe__page">
            {
                recipes.map(
                (recipe) => 
                <Recipe
                key={`recipe--${recipe.id}`}
                setRecipes={setRecipes}
                currentUser={brewspaceUserObject}
                recipeObject={recipe}/>
                )
            }
        </article>
    )
}