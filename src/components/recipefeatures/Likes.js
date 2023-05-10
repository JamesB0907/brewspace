import { useState } from "react"
import { FaBeer } from "react-icons/fa"
import "./Features.css"

export const LikeCounter = () => {
  const [likes, setLikes] = useState(0)
  const [likeDirection, setLikeDirection] = useState(null)

  const handleLike = () => {
    setLikeDirection("increase")
    setLikes(likes + 1)
  }

  const handleDislike = () => {
    setLikeDirection("decrease")
    setLikes(likes - 1)
  }

  const handleAnimationEnd = () => {
    setLikeDirection(null)
  }

  const likeCountClassName = `like__count ${likeDirection ? `like__count--${likeDirection}` : ""}`

  return (
    <div className="like-counter">
      <button className="like-button" onClick={handleLike}>
        <FaBeer />
      </button>
      <span className={likeCountClassName} onAnimationEnd={handleAnimationEnd}>
        {likes}
      </span>
      <button className="dislike-button" onClick={handleDislike}>
        <FaBeer />
      </button>
    </div>
  )
}