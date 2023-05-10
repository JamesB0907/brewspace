import { useEffect, useState } from "react"
import { editRecipe, getRecipes, getSingleRecipe, postRecipe } from "../APIManager"
import "./Recipe.css"
import { useParams } from "react-router-dom"


export const RecipeEdit = ({ recipeObject, setRecipes, closeModal }) => {

    const localBrewspaceUser = localStorage.getItem("brewspace_user")
    const brewspaceUserObject = JSON.parse(localBrewspaceUser)
    const [recipe, update] = useState({
        userId: brewspaceUserObject.id,
        name: recipeObject.name,
        style: recipeObject.style,
        malts: recipeObject.malts,
        hops: recipeObject.hops,
        yeast: recipeObject.yeast,
        adjuncts: recipeObject.adjuncts,
        recipeGuide: recipeObject.recipeGuide
    })

    const handleSaveEditsClick = (evt) => {
        evt.preventDefault()
        const saveRecipe = { ...recipe }
        saveRecipe.id = recipeObject.id
        editRecipe(saveRecipe)
            .then(() => closeModal())
            .then(getRecipes)
            .then((newData) =>
                setRecipes(newData))
            
    }
    return (
        <form className="recipeEditForm">
        <fieldset className="recipe__ingredients__edit">
          <label htmlFor="name">Your Beer's Name:</label>
          <textarea autoFocus type="text" className="recipe__edit__input" defaultValue={recipe.name} onChange={
            (e) => {
              const copy = { ...recipe }
              copy.name = e.target.value
              update(copy)
            }
          }></textarea>
          <label htmlFor="style">Your Beer's Style:</label>
          <textarea type="text" className="recipe__edit__input" defaultValue={recipeObject.style} onChange={
            (e) => {
              const copy = { ...recipe }
              copy.style = e.target.value
              update(copy)
            }
          }></textarea>
          <label htmlFor="malts">Malts and/or Extracts:</label>
          <textarea type="text" className="recipe__edit__ingredients" defaultValue={recipeObject.malts} onChange={
            (e) => {
              const copy = { ...recipe }
              copy.malts = e.target.value
              update(copy)
            }
          }></textarea>
          <label htmlFor="hops">Hops:</label>
          <textarea type="text" className="recipe__edit__ingredients" defaultValue={recipeObject.hops} onChange={
            (e) => {
              const copy = { ...recipe }
              copy.hops = e.target.value
              update(copy)
            }
          }></textarea>
          <label htmlFor="yeast">Yeast:</label>
          <textarea type="text" className="recipe__edit__ingredients" defaultValue={recipeObject.yeast} onChange={
            (e) => {
              const copy = { ...recipe }
              copy.yeast = e.target.value
              update(copy)
            }
          }></textarea>
          <label htmlFor="adjuncts">Adjuncts(Optional):</label>
          <textarea type="text" className="recipe__edit__ingredients" defaultValue={recipeObject.adjuncts} onChange={
            (e) => {
              const copy = { ...recipe }
              copy.adjuncts = e.target.value
              update(copy)
            }
          }></textarea>
        </fieldset>
        <fieldset className="recipe__guide__edit">
          <label htmlFor="guide">Describe the Process:</label>
          <textarea type="text" className="recipe__edit__guide" defaultValue={recipeObject.recipeGuide} onChange={
            (e) => {
              const copy = { ...recipe }
              copy.recipeGuide = e.target.value
              update(copy)
            }
          }></textarea>
        </fieldset>
        <button className="submit__edits__button" onClick={
          (clickEvent) => handleSaveEditsClick(clickEvent)}>Save Edits</button>
      </form>
    )
}
