/* eslint-disable react/prop-types */
import {
  Card,
  Text,
  Image,
  Flex,
  Tag,
  TagLabel,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { React } from "react";

export const RecipeItem = ({ recipe, clickFn }) => {
  return (
    <Card
      h="400px"
      w="300px"
      backgroundColor="white"
      borderRadius="lg"
      borderColor="transparent"
      shadow="lg"
      cursor="pointer"
      onClick={() => clickFn(recipe)}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.4s ease",
      }}
    >
      <Image
        w="100%"
        h="40%"
        borderTopRadius="lg"
        objectFit="cover"
        src={recipe.image}
        alt={recipe.label}
      />
      <Flex
        flexDir="column"
        align="center"
        textAlign="center"
        padding="10px"
        paddingTop="16px"
      >
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color="grey"
          textTransform="uppercase"
        >
          {recipe.mealType}
        </Text>
        <Heading size="md" fontWeight="semibold">
          {recipe.label}
        </Heading>
        <Wrap justify="center" mt={2} mb={1}>
          {recipe.healthLabels
            .filter((label) => label === "Vegan" || label === "Vegetarian")
            .map((label) => (
              <WrapItem key={label}>
                <Tag
                  size="sm"
                  key={label}
                  variant="subtle"
                  colorScheme="purple"
                >
                  <TagLabel>{label.toUpperCase()}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
        </Wrap>
        <Wrap justify="center" mt={1} mb={2}>
          {recipe.dietLabels.map((label) => (
            <WrapItem key={label}>
              <Tag size="sm" variant="subtle" colorScheme="green">
                <TagLabel>{label.toUpperCase()}</TagLabel>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
        <Text>
          Dish:{" "}
          <span style={{ fontWeight: 550, textTransform: "capitalize" }}>
            {recipe.dishType}
          </span>
        </Text>

        {recipe.cautions.length > 0 && <Text>Cautions:</Text>}
        <Wrap justify="center" mt={2} mb={2}>
          {recipe.cautions.map((caution) => (
            <WrapItem key={caution}>
              <Tag size="sm" variant="subtle" colorScheme="red">
                <TagLabel>{caution.toUpperCase()}</TagLabel>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </Card>
  );
};
