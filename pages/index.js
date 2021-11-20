import LoginForm from "../components/Forms/LoginForm";
import Link from "next/link";
import React from "react";
import Card from "../components/UI/Card";
import Styles from "./index.module.css";

import { Flex } from "@chakra-ui/react";

// import "./index.css";

const Index = () => {
  return (
    <React.Fragment>
      <head>
        <title>Login</title>
      </head>

      <body>
        <div className="main-container">
          <Card>
            <LoginForm />
          </Card>
        </div>

        <div className="main-container">
          <Card>
            <Flex>
              <Link href="./Student/StudentHome">
                <button>
                  <p>Student Home</p>
                </button>
              </Link>

              <Link href="./TeachingStaff/TeachingStaffHome">
                <button>
                  <p>Teaching Home</p>
                </button>
              </Link>

              <Link href="./Admin/AdminHome">
                <button>
                  <p>Admin Home</p>
                </button>
              </Link>
            </Flex>
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
