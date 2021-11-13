import Header from "../components/layout/Header";
import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className="marginT"></div>
      <Component {...pageProps} />
    </div>
  );
}
