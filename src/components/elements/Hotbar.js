import { Link, useNavigate } from "react-router-dom"
import { RecipeSearch } from "../recipe/RecipeSearch"
import "./Hotbar.css"

export const HotBar = ({ setterFunction, searchTermState, recipes}) => {
    const navigate = useNavigate()
    return <>

        <ul className="hotbar">
            <h1 className="brewspace__header">BrewSpace</h1>
            <RecipeSearch className="search__frame"
                recipes={recipes}
                setterFunction={setterFunction}
                searchTermState={searchTermState} />
            {
                localStorage.getItem("brewspace_user")
                    ? <li className="hotbar__item hotbar__logout">
                        <Link className="hotbar__link" to="" onClick={() => {
                            localStorage.removeItem("brewspace_user")
                            navigate("/", { replace: true })
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    </>
}