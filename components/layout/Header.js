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
          <Link href="/">
            <button className={Styles["logout-button"]}>Previous Page</button>
          </Link>

          <button
            className={Styles["logout-button"]}
            onClick={() => router.back()}
          >
            Logout
          </button>
        </div>
      </Flex>
    </React.Fragment>
  );
};

export default Header;
