/* eslint-disable react/prop-types */
import { Heading, Box } from "@chakra-ui/react";
import { React } from "react";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Box minHeight="100vh" backgroundColor={"blue.200"}>
      <Heading paddingTop="2rem" color="white" textAlign="center">
        Winc Recipe Checker
      </Heading>
      <RecipeSearch clickFn={clickFn} />
    </Box>
  );
};
