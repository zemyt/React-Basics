import { Card, Image, Heading } from "@chakra-ui/react";
import React from "react";
import image from "../assets/emptyrecipe.png";

export const EmptyCard = () => {
  return (
    <Card
      h="400px"
      w="300px"
      backgroundColor="white"
      borderRadius="lg"
      borderColor="transparent"
      shadow="lg"
      s
    >
      <Image
        src={image}
        w="100%"
        h="50%"
        borderTopRadius="lg"
        objectFit="cover"
        alt="empty"
      />
      <Heading padding="3.5rem" textAlign="center" size="md" fontWeight="light">
        There are no recipes that matched your search input
      </Heading>
    </Card>
  );
};
