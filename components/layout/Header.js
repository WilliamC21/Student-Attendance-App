import Link from "next/dist/client/link";
import { Button } from "@chakra-ui/react";
import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>EasyCheck</h1>
        <Link href="/">
          <Button>Logout</Button>
        </Link>
      </header>
    </React.Fragment>
  );
};

export default Header;
