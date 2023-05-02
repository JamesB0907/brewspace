import { useEffect, useState } from "react"
import { getComments } from "../APIManager"
import { CommentList } from "../recipefeatures/CommentList"
import "./Recipe.css"

export const Recipe = ({recipeObject}) => {
    const [commentSections, setCommentSections] = useState([])
    const [filteredCommentSections, setFiltered] = useState([])

useEffect(
    () => {
    getComments()
    .then((data) => {setCommentSections(data)
    })    
        }
    ,[]
)

useEffect(
    () => {
        const recipeComments = commentSections.filter(commentSection => commentSection.recipeId === recipeObject.id)
        setFiltered(recipeComments)
        console.log(recipeComments)
    },
    [commentSections]
)
    return (
        <>

        <section className = "recipe">
            <h1 className="recipe__name">Name: <span style={{fontSize: '1.45rem'}}>{recipeObject.name}</span></h1>
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
                
        </section>

            <CommentList key={filteredCommentSections.id} filteredCommentSections={filteredCommentSections} />
        </>
    )
}