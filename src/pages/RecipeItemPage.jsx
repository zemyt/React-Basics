/* eslint-disable react/prop-types */
import { Center } from "@chakra-ui/react";
import { RecipeItemSelected } from "../components/RecipeItemSelected";
import React from "react";

export const RecipeItemPage = ({ recipe, clickFn }) => {
  return (
    <Center
      minH="100vh"
      padding="1rem"
      flexDir="column"
      backgroundColor={"blue.200"}
    >
      <RecipeItemSelected recipe={recipe} clickFn={clickFn} />
    </Center>
  );
};
