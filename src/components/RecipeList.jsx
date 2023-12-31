/* eslint-disable react/prop-types */
import {} from "@chakra-ui/react";
import React from "react";
import { RecipeItem } from "./RecipeItem";

// RecipeList component that returns items based on list of recipes given by RecipeSearch
export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.label} recipe={recipe} clickFn={clickFn} />
      ))}
    </>
  );
};
