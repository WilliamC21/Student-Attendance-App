import React from "react";
import Link from "next/dist/client/link";

export default function StudentHome() {
  return (
    <React.Fragment>
      <h1>Teaching Staff Home</h1>

      <Link href="/">
        <a>Login</a>
      </Link>
    </React.Fragment>
  );
}
