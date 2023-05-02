import { useEffect, useState } from "react"
import { getLikes, likeOrDislike } from "../APIManager"

export const LikeCounter = () => {
    const [likes, setLikes] = useState([])
    const [rating, update] = useState({
        userId: "",
        recipeId: "",
        isLiked: ""
    })

    const localBrewspaceUser = localStorage.getItem("brewspace_user")
    const brewspaceUserObject = JSON.parse(localBrewspaceUser)

    const clickLike = (evt) => {
        evt.preventDefault()

    const sentLike = {
        userId: brewspaceUserObject.userId,
        recipeId: rating.recipeId,
        isLiked: true
    }
    return likeOrDislike(sentLike)
    .then(getLikes())
    }

    const clickDislike = (evt) => {
        evt.preventDefault()

    const sentDislike = {
        userId: brewspaceUserObject.userId,
        recipeId: rating.recipeId,
        isLiked: false
    }
    return likeOrDislike(sentDislike)
    .then(getLikes())
    }

useEffect(
    ()=> {
        getLikes()
        .then((data) => {
            setLikes(data)
        })
    },
    []
)
likes.forEach((like) => )
    
//getLikes then use .length to determine the number of isLiked: true and isLiked: false
    return (
        <>
        <button onClick={(clickEvent)=>clickLike(clickEvent)}>Like</button>
        <div className="like__count"></div>
        <button onClick={(clickEvent)=>clickDislike(clickEvent)}>Disike</button>
        </>
    )
}
