import { useEffect, useState } from "react"
import { deleteRecipe, getComments, getRecipes, postComment } from "../APIManager"
import { CommentList } from "../recipefeatures/CommentList"
import "./Recipe.css"
import { LikeCounter } from "../recipefeatures/Likes"

export const Recipe = ({ recipeObject, setRecipes }) => {
    const [commentSections, setCommentSections] = useState([])
    const [filteredCommentSections, setFiltered] = useState([])

    useEffect(
        () => {
            getComments()
                .then((data) => {
                    setCommentSections(data)
                })
        }
        , []
    )

    useEffect(
        () => {
            const recipeComments = commentSections.filter(commentSection => commentSection.recipeId === recipeObject.id)
            setFiltered(recipeComments)
        },
        [commentSections]
    )

    const localBrewspaceUser = localStorage.getItem("brewspace_user")
    const brewspaceUserObject = JSON.parse(localBrewspaceUser)


    const [comment, update] = useState({
        userId: 0,
        recipeId: 0,
        commentText: ""
    })

    const handleCommentSubmit = (evt) => {
        evt.preventDefault()
        const newComment = {
            userId: brewspaceUserObject.id,
            recipeId: recipeObject.id,
            commentText: comment.commentText
        }
        return postComment(newComment)
            .then(getComments)
            .then((updatedComments) =>
                setCommentSections(updatedComments))
            .then(() => update({
                commentText: ""
            }))
    }

    const deleteButton = (evt) => {
        if (brewspaceUserObject.id === recipeObject.userId) {
            return <button onClick={()=>{
                deleteRecipe(recipeObject)
                    .then(() => getRecipes())
                    .then((newRecipeArray) => setRecipes(newRecipeArray))
            }}>Delete</button>
        }
        else {
            return ""
        }
    }

    const editFormButton = (evt) => {
        if (brewspaceUserObject.id === recipeObject.userId) {
            return <button onClick={()=>{
//<RecipeEdit/>
            }}>Edit</button>
        }
        else {
            return ""
        }
    }

    return (
        <>
            {/* <LikeCounter/> */}

            <section className="recipe" key={`recipe--${recipeObject.id}`}>
                <h1 className="recipe__name">Name: <span style={{ fontSize: '1.45rem' }}>{recipeObject.name}</span></h1>
                <h1 className="user__submitted">By: {recipeObject.user.userName}</h1>
                <h3 className="recipe__style__header">Style:</h3>
                <div className="recipe__style">{recipeObject.style}</div>
                <h3 className="recipe__malts__header">Malts:</h3>
                <div className="recipe__malts">{recipeObject.malts}</div>
                <h3 className="recipe__hops__header">Hops:</h3>
                <div className="recipe__hops">{recipeObject.hops}</div>
                <h3 className="recipe__yeast__header">Yeast:</h3>
                <div className="recipe__yeast"> {recipeObject.yeast}</div>
                <h3 className="recipe__adjuncts__header">Adjuncts:</h3>
                <div className="recipe__adjuncts">{recipeObject.adjuncts}</div>
                <h2 className="recipe__guide__header">Recipe Guide:</h2>
                <div className="recipe__guide">{recipeObject.recipeGuide}</div>
                {
                    deleteButton()
                }


            </section>

            <CommentList key={filteredCommentSections.id} filteredCommentSections={filteredCommentSections} />
            <input type="text" className="input__box" value={comment.commentText} onChange={
                (e) => {
                    const copy = { ...comment }
                    copy.commentText = e.target.value
                    update(copy)
                }
            } />
            <button onClick={
                (clickEvent) => { handleCommentSubmit(clickEvent) }
            }>Submit Comment</button>
        </>
    )
}