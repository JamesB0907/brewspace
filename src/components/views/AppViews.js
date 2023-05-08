import { Outlet, Routes, Route} from 'react-router-dom'
import { RecipeContainer } from '../recipe/RecipeContainer'
import { RecipeForm } from '../recipe/RecipeForm'
import { SidePanel } from '../elements/SidePanel'
import { useEffect, useState } from 'react'
import { getRecipes } from '../APIManager'
import { HotBar } from '../elements/Hotbar'

export const AppViews = () => {

const [recipes, setRecipes] = useState([])
    useEffect(
        () => {
            getRecipes()
            .then((data) => {
                setRecipes(data)
            })
        },
        []
    )


    return (
        <Routes>
            <Route path ="/" element={
                <>
                    
                    <RecipeContainer 
                    recipes={recipes}
                    setRecipes={setRecipes}/>
                    <Outlet />
                </>
            }>

            </Route>
        </Routes>
    )
}