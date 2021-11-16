import React, { useState } from "react";
import Styles from "./ListItem.module.css";
import CardStyles from "../Card.module.css";
import FeatureCard from "../FeatureCard";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";

const ListItem = (props) => {
  return (
    <FeatureCard>
      <Flex width="full">
        <h2>{props.firstName}</h2>

        <Spacer />
        <h2>{props.lastName}</h2>
        <Spacer />
        <h2>{props.email}</h2>
        <Spacer />
        <h2>{props.attendance}</h2>
      </Flex>
    </FeatureCard>
  );
};

export default ListItem;
