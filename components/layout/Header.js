import Link from "next/dist/client/link";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/dist/client/router";

import Styles from "./Header.module.css";

const Header = (props) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Flex className={Styles.header}>
        <div>
          <Link href="/">
            <h1>EasyCheck</h1>
          </Link>
        </div>
        <div className={Styles.right}>
          <button
            className={Styles["logout-button"]}
            onClick={() => router.back()}
          >
            Previous Page
          </button>

          <Link href="/">
            <button className={Styles["logout-button"]}>Logout</button>
          </Link>
        </div>
      </Flex>
    </React.Fragment>
  );
};

export default Header;
