import { useState } from "react"
import { RecipeList } from "./RecipeList"
import { RecipeSearch } from "./RecipeSearch"
import { HotBar } from "../elements/Hotbar"
import { SidePanel } from "../elements/SidePanel"

export const RecipeContainer = ({ recipes, setRecipes }) => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <HotBar
            recipes={recipes}
            setterFunction={setSearchTerms}
            searchTermState={searchTerms} />
    <section className="flex__container">
        <SidePanel
            recipes={recipes}
            setRecipes={setRecipes} />
        <RecipeList recipes={recipes}
            setRecipes={setRecipes}
            searchTermState={searchTerms} />
    </section>
    </>
}