import React from "react";
import Link from "next/link";
import { VStack, HStack, Text } from "@chakra-ui/react";

const EditUsers = () => {
  return (
    <React.Fragment>
      <h2>Edit Users</h2>

      <VStack bg="gray.50" spacing={4}>
        <HStack>
          <Text>Example</Text>
        </HStack>
      </VStack>
    </React.Fragment>
  );
};

export default EditUsers;
