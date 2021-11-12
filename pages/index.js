import LoginForm from "../components/LoginForm";
import Header from "../components/layout/Header";
import Link from "next/link";
import React from "react";
import Card from "../components/UI/Card";
import Styles from "./index.module.css";
import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

// import "./index.css";

const Index = () => {
  return (
    <React.Fragment>
      <head>
        <title>Login</title>
      </head>

      <body>
        <div className={Styles.loginContainer}>
          <Card>
            <LoginForm />
          </Card>
        </div>
      </body>
      <div className={Styles.loginContainer}>
        <Link href="./Student/StudentHome">
          <Button w="full">
            <p>Student Home</p>
          </Button>
        </Link>

        <Link href="./TeachingStaff/TeachingStaffHome">
          <Button w="full">
            <p>Teaching Home</p>
          </Button>
        </Link>

        <Link href="./Admin/AdminHome">
          <Button w="full">
            <p>Admin Home</p>
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Index;

// import ReactDOM from "react-dom";

// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
