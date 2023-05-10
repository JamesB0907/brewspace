import { useCallback, useEffect, useState } from "react";
import { RecipeList } from "./RecipeList";
import { HotBar } from "../elements/Hotbar";
import { SidePanel } from "../elements/SidePanel";
import { searchRecipes } from "../APIManager";

export const RecipeContainer = ({ recipes, setRecipes }) => {
  const [searchTermState, setSearchTermState] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async (event) => {
    event.preventDefault();

    if (!searchTermState) {
      return;
    }
    try {
      const res = await fetch(`http://localhost:8088/recipes?q=${searchTermState}`);
      const data = await res.json();
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        // event.preventDefault();
        handleSearch();
      }
    },
    [handleSearch]
  );

  useEffect(() => {
    if (searchTermState) {
      handleSearch();
    }
  }, [searchTermState]);

  return (
    <>
      <HotBar
        recipes={recipes}
        setterFunction={setSearchTermState}
        searchTermState={searchTermState}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
      />
      <section className="flex__container">
        <SidePanel recipes={recipes} setRecipes={setRecipes} />
        <RecipeList
          recipes={recipes}
          setRecipes={setRecipes}
          searchTermState={searchTermState}
          searchResults={searchResults}
        />
      </section>
    </>
  );
};
