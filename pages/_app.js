import Header from "../components/layout/Header";
import Alert from "../components/UI/Modal/Alert";
import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* <Alert> */}
      <Header />
      <div className="marginT"></div>
      <Component {...pageProps} />
      {/* </Alert> */}
    </div>
  );
}
