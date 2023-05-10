
export const CommentList = ({filteredCommentSections}) => {


    const getTimeAgo = (timestamp) => {
        const now = Date.now();
        const secondsAgo = Math.floor((now - timestamp) / 1000);
      
        if (secondsAgo < 60) {
          return "just now";
        } else if (secondsAgo < 60 * 60) {
          const minutesAgo = Math.floor(secondsAgo / 60);
          return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
        } else if (secondsAgo < 60 * 60 * 24) {
          const hoursAgo = Math.floor(secondsAgo / (60 * 60));
          return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
        } else {
          const daysAgo = Math.floor(secondsAgo / (60 * 60 * 24));
          return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
        }
      };
    return (
        filteredCommentSections.length === 0
        ? <div className="comment__section__placeholder">Be the first to comment</div>
        :<article className="comments__section">
          <h1 className="comment__section__header">{filteredCommentSections.length} Comments</h1>
            {
                filteredCommentSections.map(
                    (comment) => {
                    return<section className="comment__container" key={`comment--${comment.id}`}>
                    
                    <div className="comment__user">
                        {comment.user.userName} 
                            <span className="comment__timestamp">
                                { getTimeAgo(comment.timestamp)}
                            </span>
                    </div>
                    <div className="comment__text"> {comment.commentText}</div>
                    </section>
                    }
                )
            }
        </article>
    )
}