

export const getRecipes = () => {
    return fetch(`http://localhost:8088/recipes?_expand=user&_sort=id&_order=desc`)
        .then(r => r.json())
}

export const getUsers = () => {
    return fetch(`http://localhost:8088/users`)
        .then(r => r.json())
}

export const getComments = () => {
    return fetch(`http://localhost:8088/comments?_expand=recipe&_expand=user`)
        .then(r => r.json())
}

export const postRecipe = (recipeObject) => {
    return fetch(`http://localhost:8088/recipes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipeObject)
    })
        .then(r => r.json())
}

//Figure out how to create a vote counter attached to the recipe that gets posted
export const postComment = (commentObject) => {
    return fetch(`http://localhost:8088/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentObject)
    })
        .then(r => r.json())
}

export const getRatings = () => {
    return fetch(`http://localhost:8088/ratings`)
        .then(r => r.json())
}

export const deleteRecipe = (recipeObject) => {
    return fetch(`http://localhost:8088/recipes/${recipeObject.id}`, {
        method: "DELETE"
    })
}

export const editRecipe = (recipeObject) => {
    return fetch(`http://localhost:8088/recipes/${recipeObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipeObject)
    })
        .then(r => r.json())
}

export const getSingleRecipe = (recipeObject) => {
    return fetch(`http://localhost:8088/recipes/${recipeObject.id}`)
        .then(r=>r.json())
}
