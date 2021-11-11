import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./AdminHome.module.css";
//import Button from "../../components/UI/Button";
import { VStack, HStack, Button } from "@chakra-ui/react";

export default function AdminHome() {
  return (
    <React.Fragment>
      <Header />
      <div className={Styles.container}>
        <h1 className={Styles.test}>Student Home</h1>

        <VStack>
          <HStack w="full">
            <Link href="/">
              <Button w="full">
                <p>Login</p>
              </Button>
            </Link>

            <Link href="./ViewAttendance/ViewAttendance">
              <Button w="full">
                <p>View Attendance</p>
              </Button>
            </Link>
          </HStack>

          <HStack w="full">
            <Button w="full">
              <Link href="./ViewAttendance/ViewAttendance">
                <a>View Attendance</a>
              </Link>
            </Button>

            <Button w="full">
              <Link href="./ViewGrades/ViewGrades">
                <a>View Grades</a>
              </Link>
            </Button>
          </HStack>
        </VStack>
      </div>
    </React.Fragment>
  );
}
