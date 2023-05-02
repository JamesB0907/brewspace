import { Comment } from "./Comment"

export const CommentList = ({filteredCommentSections}) => {

    return (
        <article className="comments__section">
            {
                filteredCommentSections.map(
                    (comment) => {
                    return<section className="comment__container" key={`comment--${comment.id}`}>
                    <div className="comment__text">{comment.user.userName}: {comment.commentText}</div>
                    </section>
                    }
                )
            }
        </article>
        //CommentForm
    )
}