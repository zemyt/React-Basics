/* eslint-disable react/prop-types */
import { Center, Input, Wrap, Radio, RadioGroup } from "@chakra-ui/react";
import { data } from "../utils/data";
import React from "react";
import { RecipeList } from "./RecipeList";
import { useState } from "react";
import { EmptyCard } from "./EmptyCard";

export const RecipeSearch = ({ clickFn }) => {
  const recipes = data.hits.map((item) => item.recipe);
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSeatchValue] = useState("1");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = recipes.filter((recipe) => {
    let isLabelMatched = [];
    let areHealthLabelsMatched = [];

    switch (searchValue) {
      case "1":
        // Returns matched results from all the recipes
        isLabelMatched = recipe.label
          .toLowerCase()
          .includes(searchField.toLowerCase());
        areHealthLabelsMatched = recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(searchField.toLowerCase())
        );
        return isLabelMatched || areHealthLabelsMatched;

      case "2":
        // Returns matched results from the vegan recipes
        if (recipe.healthLabels.includes("Vegan")) {
          isLabelMatched = recipe.label
            .toLowerCase()
            .includes(searchField.toLowerCase());
          areHealthLabelsMatched = recipe.healthLabels.some((label) =>
            label.toLowerCase().includes(searchField.toLowerCase())
          );
          return isLabelMatched || areHealthLabelsMatched;
        }
        break;

      case "3":
        // Returns matched results from the vegetarian recipes
        if (recipe.healthLabels.includes("Vegetarian")) {
          isLabelMatched = recipe.label
            .toLowerCase()
            .includes(searchField.toLowerCase());
          areHealthLabelsMatched = recipe.healthLabels.some((label) =>
            label.toLowerCase().includes(searchField.toLowerCase())
          );
          return isLabelMatched || areHealthLabelsMatched;
        }
        break;

      case "4":
        // Returns matched results from the pescatarian recipes
        if (recipe.healthLabels.includes("Pescatarian")) {
          isLabelMatched = recipe.label
            .toLowerCase()
            .includes(searchField.toLowerCase());
          areHealthLabelsMatched = recipe.healthLabels.some((label) =>
            label.toLowerCase().includes(searchField.toLowerCase())
          );
          return isLabelMatched || areHealthLabelsMatched;
        }
        break;

      default:
        return isLabelMatched || areHealthLabelsMatched;
    }
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
          mb="10px"
          shadow="lg"
          onChange={handleChange}
        />
      </Center>

      <Center>
        <RadioGroup onChange={setSeatchValue} value={searchValue}>
          <Wrap marginLeft="10px" marginRight="10px" justify="center">
            <Radio value="1">All</Radio>
            <Radio value="2">Vegan</Radio>
            <Radio value="3">Vegetarian</Radio>
            <Radio value="4">Pescatarian</Radio>
          </Wrap>
        </RadioGroup>
      </Center>

      <Wrap padding="2rem" justify="center" spacing="2rem">
        {matchedRecipes.length > 0 ? (
          <RecipeList recipes={matchedRecipes} clickFn={clickFn} />
        ) : (
          <EmptyCard />
        )}
      </Wrap>
    </>
  );
};
