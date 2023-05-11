import { useEffect, useState } from "react"
import { deleteRecipe, getComments, getRecipes, postComment } from "../APIManager"
import { CommentList } from "../recipefeatures/CommentList"
import "./Recipe.css"
import { LikeCounter } from "../recipefeatures/Likes"
import Modal from 'react-modal'
import { RecipeEdit } from "./RecipeEdit"
import "../recipefeatures/Features.css"

export const Recipe = ({ recipeObject, setRecipes }) => {
    const [commentSections, setCommentSections] = useState([])
    const [filteredCommentSections, setFiltered] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)

    Modal.setAppElement('#root');

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

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
            commentText: comment.commentText,
            timestamp: Date.now()
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
            return <button 
            className="delete__button"
            onClick={() => {
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
            return <button className="edit__button" onClick={openModal}>Edit</button>
        }
        else {
            return ""
        }
    }

    return (
        <>
            

            <section className="recipe" key={`recipe--${recipeObject.id}`}>
  <LikeCounter/>
  <div className="recipe__wrapper">
    <div className="recipe__content">
      <div className="recipe__info">
        <h1 className="recipe__name">Name: <span 
        className="recipe__name__header">{recipeObject.name}</span></h1>
        <h1 className="user__submitted">By: {recipeObject?.user?.userName}</h1>
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
      </div>
    </div>
    {recipeObject.photoUrl &&
      <div>
        <img className="recipe__image" src={recipeObject.photoUrl} alt="Beer" />
      </div>
    }
  </div>
                {
                    deleteButton()
                }
                {
                    editFormButton()
                }
                <Modal className="edit__window" isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <RecipeEdit setRecipes={setRecipes} recipeObject={recipeObject} closeModal={closeModal} />
                </Modal>


            </section>
            <section className="comment__section__container">
                <CommentList key={filteredCommentSections.id} filteredCommentSections={filteredCommentSections} />
                <textarea type="text" className="comment__input__box" value={comment.commentText} placeholder="Add a Comment..." onChange={
                    (e) => {
                        const copy = { ...comment }
                        copy.commentText = e.target.value
                        update(copy)
                    }
                }></textarea>
                <button className="comment__submit__button" onClick={
                    (clickEvent) => { handleCommentSubmit(clickEvent) }
                }>Submit Comment</button>
            </section >
        </>
    )
}