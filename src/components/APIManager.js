export const getRecipes = () => {
    return fetch (`http://localhost:8088/recipes`)
    .then(r=>r.json())
}

export const getUsers = () => {
    return fetch (`http://localhost:8088/users`)
    .then(r=>r.json())
}

export const getComments = () => {
    return fetch (`http://localhost:8088/comments?_expand=recipe&_expand=user`)
    .then(r=>r.json())
}

export const postRecipe = (recipeObject) => {
    return fetch (`http://localhost:8088/recipes/${recipeObject.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(recipeObject)
    })
    .then(r=>r.json())
}

//Figure out how to create a vote counter attached to the recipe that gets posted
export const postComment = (commentObject) => {
    return fetch (`http://localhost:8088/comments/${commentObject.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(commentObject)
    })
    .then(r=>r.json())
}

export const likeOrDislike = (ratingObject) => {
    return fetch (`http://localhost:8088/ratings/${ratingObject.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(ratingObject)
    })
    .then(r=>r.json())
}

export const getLikes = () => {
    return fetch (`http://localhost:8088/ratings`)
    .then(r=>r.json())
}


