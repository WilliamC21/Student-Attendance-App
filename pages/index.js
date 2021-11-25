import LoginForm from "../components/Forms/LoginForm";
import Link from "next/link";
import React from "react";
import Card from "../components/UI/Card";
import { Flex } from "@chakra-ui/react";

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
