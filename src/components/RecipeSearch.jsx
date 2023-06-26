/* eslint-disable react/prop-types */
import { Center, Input, Wrap } from "@chakra-ui/react";
import { data } from "../utils/data";
import React from "react";
import { RecipeList } from "./RecipeList";
import { useState } from "react";

export const RecipeSearch = ({ clickFn }) => {
  const recipes = data.hits.map((item) => item.recipe);
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = recipes.filter((recipe) => {
    const isLabelMatched = recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    const areHealthLabelsMatched = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchField.toLowerCase())
    );
    return isLabelMatched || areHealthLabelsMatched;
  });

  return (
    <>
      <Center>
        <Input
          size="lg"
          variant="outline"
          maxW={{ base: "80%", sm: 400 }}
          placeholder="Search for recipe..."
          backgroundColor="white"
          mt="10px"
          shadow="lg"
          onChange={handleChange}
        />
      </Center>
      <Wrap padding="2rem" justify="center" spacing="2rem">
        <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
      </Wrap>
    </>
  );
};
