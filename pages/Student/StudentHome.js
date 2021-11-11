import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./StudentHome.module.css";
//import Button from "../../components/UI/Button";
import { Flex, Container, VStack, HStack, Button } from "@chakra-ui/react";

export default function StudentHome() {
  return (
    <React.Fragment>
      <div className={Styles["main-container"]}>
        <div className={Styles["button-container"]}>
          <VStack>
            <HStack w="full">
              <Link href="/">
                <Button w="full">
                  <p>Login</p>
                </Button>
              </Link>

              <Link href="./LogAttendance">
                <Button w="full">
                  <p>Log Attendace</p>
                </Button>
              </Link>
            </HStack>

            <HStack w="full">
              <Button w="full">
                <Link href="./ViewAttendance/ViewAttendance">
                  <a>View Classes</a>
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
        <div classNames={Styles.container}></div>
      </div>
    </React.Fragment>
  );
}
