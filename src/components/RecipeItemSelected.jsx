/* eslint-disable react/prop-types */
import {
  Card,
  Heading,
  Button,
  Image,
  Flex,
  Box,
  Text,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { React } from "react";

// Big card component with specific information about selected recipe
export const RecipeItemSelected = ({ recipe, clickFn }) => {
  return (
    <>
      <Card
        minW={{
          base: "clamp(95%, 95%, 99%)",
          sm: "clamp(75%, 95%, 95%)",
          md: "clamp(700px, 750px, 95%)",
          lg: "clamp(800px, 800px, 800px)",
        }}
        maxW="900"
        backgroundColor={"white"}
        transition="min-width 0.3s ease"
      >
        <Flex>
          <Button
            mt="10px"
            mb="10px"
            ml="10px"
            onClick={() => clickFn()}
            variant="solid"
          >
            Return
          </Button>
        </Flex>
        <Image
          objectFit="cover"
          src={recipe.image}
          w="100%"
          maxH="200px"
          alt={recipe.label}
        />
        <Flex
          flexWrap={{ base: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" }}
        >
          <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }} p="3rem">
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
            <Text mt="10px">
              Total cooking time: <Text as="b">{recipe.totalTime} Minutes</Text>
            </Text>
            <Text mb="10px">
              Servings: <Text as="b">{recipe.yield}</Text>
            </Text>
            <Text fontWeight={450}>Ingredients:</Text>
            {recipe.ingredientLines.map((ing) =>
              ing[0] === "*" && ing[1] === " " ? (
                <Text key={ing}>• {ing.slice(2)}</Text>
              ) : (
                <Text key={ing}>• {ing}</Text>
              )
            )}
          </Box>
          <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }} p="3rem">
            {recipe.healthLabels.length > 0 && (
              <Text fontWeight={450}>Health Labels:</Text>
            )}
            <Wrap mt={2} mb={2}>
              {recipe.healthLabels.map((label) => (
                <WrapItem key={label}>
                  <Tag size="sm" variant="subtle" colorScheme="purple">
                    <TagLabel>{label.toUpperCase()}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
            {recipe.dietLabels.length > 0 && (
              <Text fontWeight={450}>Diet:</Text>
            )}
            <Wrap mt={2} mb={2}>
              {recipe.dietLabels.map((label) => (
                <WrapItem key={label}>
                  <Tag size="sm" variant="subtle" colorScheme="green">
                    <TagLabel>{label.toUpperCase()}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
            {recipe.cautions.length > 0 && (
              <Text fontWeight={450}>Cautions:</Text>
            )}
            <Wrap mt={2} mb={2}>
              {recipe.cautions.map((label) => (
                <WrapItem key={label}>
                  <Tag size="sm" variant="subtle" colorScheme="red">
                    <TagLabel>{label.toUpperCase()}</TagLabel>
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
            <Text>Nutrients:</Text>
            <Wrap>
              <Box display="inline-block" paddingTop="1rem" paddingRight="1rem">
                <Text>
                  {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed()}
                </Text>
                <Text fontWeight={450}>CALORIES</Text>
              </Box>
              <Box display="inline-block" paddingTop="1rem" paddingRight="1rem">
                <Text>{recipe.totalNutrients.CHOCDF.quantity.toFixed()} g</Text>
                <Text fontWeight={450}>CARBS</Text>
              </Box>
              <Box display="inline-block" paddingTop="1rem" paddingRight="1rem">
                <Text>{recipe.totalNutrients.PROCNT.quantity.toFixed()} g</Text>
                <Text fontWeight={450}>PROTEIN</Text>
              </Box>
              <Box display="inline-block" paddingTop="1rem" paddingRight="1rem">
                <Text>{recipe.totalNutrients.FAT.quantity.toFixed()} g</Text>
                <Text fontWeight={450}>FAT</Text>
              </Box>
              <Box display="inline-block" paddingTop="1rem" paddingRight="1rem">
                <Text>{recipe.totalNutrients.CHOLE.quantity.toFixed()} mg</Text>
                <Text fontWeight={450}>CHOLESTEROL</Text>
              </Box>
              <Box display="inline-block" paddingTop="1rem">
                <Text>{recipe.totalNutrients.NA.quantity.toFixed()} mg</Text>
                <Text fontWeight={450}>SODIUM</Text>
              </Box>
            </Wrap>
          </Box>
        </Flex>
      </Card>
    </>
  );
};
