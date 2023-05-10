import { Link, useNavigate } from "react-router-dom"
import { RecipeSearch } from "../recipe/RecipeSearch"
import "./Hotbar.css"

export const HotBar = ({ setterFunction, searchTermState, recipes, handleSearch, handleKeyPress}) => {
    const navigate = useNavigate()
    return <>

        <section className="hotbar">
                <div className="brewspace__header"></div>
                <RecipeSearch className="search__frame"
                recipes={recipes}
                setterFunction={setterFunction}
                searchTermState={searchTermState}
                handleSearch={handleSearch} 
                handleKeyPress={handleKeyPress}
                />
            {
                localStorage.getItem("brewspace_user")
                    ? <div className="hotbar__logout">
                        <Link className="hotbar__link" to="" onClick={() => {
                            localStorage.removeItem("brewspace_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </div>
                    : ""
            }
        </section>
    </>
}