import { Outlet, Routes, Route} from 'react-router-dom'
import { RecipeContainer } from '../recipe/RecipeContainer'
import { RecipeForm } from '../recipe/RecipeForm'

export const AppViews = () => {
    return (
        <Routes>
            <Route path ="/" element={
                <>
                <h1 className="brewspace__header">BrewSpace</h1>
                    <RecipeForm />
                    <RecipeContainer />
                    <Outlet />
                </>
            }>

            </Route>
        </Routes>
    )
}