// import { useEffect, useState } from "react"
// import { getRatings, likeOrDislike } from "../APIManager"

// export const LikeCounter = () => {
//     const [likes, setLikes] = useState([])
//     const [ratings, update] = useState([])

//     const localBrewspaceUser = localStorage.getItem("brewspace_user")
//     const brewspaceUserObject = JSON.parse(localBrewspaceUser)

//     const clickLike = (evt) => {
//         evt.preventDefault()

//         const sentLike = {
//             userId: brewspaceUserObject.userId,
//             recipeId: ratings.recipeId,
//             isLiked: true
//         }
//         return likeOrDislike(sentLike)
//             .then(getRatings())
//     }

//     const clickDislike = (evt) => {
//         evt.preventDefault()

//         const sentDislike = {
//             userId: brewspaceUserObject.userId,
//             recipeId: ratings.recipeId,
//             isLiked: false
//         }
//         return likeOrDislike(sentDislike)
//             .then(getRatings())
//     }

//     useEffect(
//         () => {
//             getRatings()
//                 .then((data) => {
//                     update(data)
//                 })
//         },
//         []
//     )
    
//     const likeCount = ratings.filter(rating => rating.isLiked === true).length
//     const dislikeCount = ratings.filter(rating => rating.isLiked === false).length
   
//     const trueRating = likeCount - dislikeCount


//     //getLikes then use .length to determine the number of isLiked: true and isLiked: false
//     return (
//         <>
//             <button onClick={(clickEvent) => clickLike(clickEvent)}>Like</button>
//             <div className="like__count">{trueRating}</div>
//             <button onClick={(clickEvent) => clickDislike(clickEvent)}>Disike</button>
//         </>
//     )
// }
