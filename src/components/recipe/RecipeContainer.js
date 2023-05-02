import { RecipeList } from "./RecipeList"
import { RecipeSearch } from "./RecipeSearch"

export const RecipeContainer = () => {
    //search useState 
    //setSearchTerms using props

    return<>
    <RecipeSearch/>
    <RecipeList />
    </>
}