import LoginForm from "../components/LoginForm";
import Header from "../components/layout/Header";
import Link from "next/link";

// import "./index.css";

const Index = () => {
  return (
    <div className="app">
      <Header />
      <LoginForm />

      <Link href="./Student/StudentHome">
        <a>Student Home</a>
      </Link>
      <br />
      <Link href="./TeachingStaff/TeachingStaffHome">
        <a>Teaching Staff Home</a>
      </Link>
      <br />
      <Link href="./Admin/AdminHome">
        <a>Admin Home</a>
      </Link>
    </div>
  );
};

export default Index;

// import ReactDOM from "react-dom";

// import "./index.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
