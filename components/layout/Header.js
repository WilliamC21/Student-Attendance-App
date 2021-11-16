import Link from "next/dist/client/link";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import Styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <Flex className={Styles.header}>
        <div>
          <Link href="/">
            <h1>EasyCheck</h1>
          </Link>
        </div>
        <div className={Styles.right}>
          <Link href="/">
            <button className={Styles["logout-button"]}>Logout</button>
          </Link>
        </div>
      </Flex>
    </React.Fragment>
  );
};

export default Header;
