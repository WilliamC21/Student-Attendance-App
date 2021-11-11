import LoginForm from "../components/LoginForm";
import Header from "../components/layout/Header";
import Link from "next/link";
import React from "react";
import Card from "../components/UI/Card";
import Styles from "./index.module.css";
import { Container } from "@chakra-ui/layout";

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
    </React.Fragment>
  );
};

export default Index;

// import ReactDOM from "react-dom";

// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
