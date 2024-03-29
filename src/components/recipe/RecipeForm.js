import { useState } from "react"
import { getRecipes, postRecipe } from "../APIManager"
import "./Recipe.css"


export const RecipeForm = ({ setRecipes }) => {
    const [recipe, update] = useState({
        name: "",
        style: "",
        malts: "",
        hops: "",
        yeast: "",
        adjuncts: "",
        recipeGuide: "",
        photoUrl: ""
    })

    const localBrewspaceUser = localStorage.getItem("brewspace_user")
    const brewspaceUserObject = JSON.parse(localBrewspaceUser)

    const handlePostRecipeClick = (evt) => {
        evt.preventDefault()

        const newRecipe = {
            userId: brewspaceUserObject.id,
            name: recipe.name,
            style: recipe.style,
            malts: recipe.malts,
            hops: recipe.hops,
            yeast: recipe.yeast,
            adjuncts: recipe.adjuncts,
            recipeGuide: recipe.recipeGuide,
            photoUrl: recipe.photoUrl
        }
        return postRecipe(newRecipe)
            .then(getRecipes)
            .then((newData) =>

                setRecipes(newData))
            .then(() => update({
                name: "",
                style: "",
                malts: "",
                hops: "",
                yeast: "",
                adjuncts: "",
                recipeGuide: "",
                photoUrl: ""
            }))


    }
    return (
<form className="recipeForm">
    <h1 className="recipeForm__header">Post Your Recipe</h1>
    <fieldset className="recipe__ingredients">
        <label htmlFor="name">Your Beer's Name:</label>
        <textarea className="recipe__form__input" value={recipe.name} onChange={(e) => {
            const copy = { ...recipe }
            copy.name = e.target.value
            update(copy)
        }} />
        <label htmlFor="style">Your Beer's Style:</label>
        <textarea className="recipe__form__input" value={recipe.style} onChange={(e) => {
            const copy = { ...recipe }
            copy.style = e.target.value
            update(copy)
        }} />
        <label htmlFor="malts">Malts and/or Extracts:</label>
        <textarea className="recipe__form__ingredients" value={recipe.malts} onChange={(e) => {
            const copy = { ...recipe }
            copy.malts = e.target.value
            update(copy)
        }} />
        <label htmlFor="hops">Hops:</label>
        <textarea className="recipe__form__ingredients" value={recipe.hops} onChange={(e) => {
            const copy = { ...recipe }
            copy.hops = e.target.value
            update(copy)
        }} />
        <label htmlFor="yeast">Yeast:</label>
        <textarea className="recipe__form__ingredients" value={recipe.yeast} onChange={(e) => {
            const copy = { ...recipe }
            copy.yeast = e.target.value
            update(copy)
        }} />
        <label htmlFor="adjuncts">Adjuncts(Optional):</label>
        <textarea className="recipe__form__ingredients" value={recipe.adjuncts} onChange={(e) => {
            const copy = { ...recipe }
            copy.adjuncts = e.target.value
            update(copy)
        }} />
    </fieldset>
    <label htmlFor="photoUrl">Photo URL:</label>
    <textarea
      className="recipe__form__photo"
      value={recipe.photoUrl}
      onChange={(e) => {
        const copy = { ...recipe };
        copy.photoUrl = e.target.value;
        update(copy);
      }}
    />
    <fieldset className="recipe__guide">
        <label htmlFor="guide">Describe the Process:</label>
        <textarea className="recipe__form__guide" value={recipe.recipeGuide} onChange={(e) => {
            const copy = { ...recipe }
            copy.recipeGuide = e.target.value
            update(copy)
        }} />
    </fieldset>
    <button className="submit__recipe__button" onClick={(clickEvent) => handlePostRecipeClick(clickEvent)}>Post Your Recipe</button>
</form>

    )
}
