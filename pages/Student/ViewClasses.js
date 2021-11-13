import React from "react";
import Link from "next/link";
import ListContainer from "../../components/UI/List/ListContainer";

const ViewClasses = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <h1>Your Classes</h1>
        <ListContainer />
      </div>
    </React.Fragment>
  );
};

export default ViewClasses;
