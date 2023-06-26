import { RecipeListPage } from "./pages/RecipeListPage";
import { React, useState } from "react";
import { RecipeItemPage } from "./pages/RecipeItemPage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <div>
      {selectedRecipe ? (
        <RecipeItemPage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </div>
  );
};
