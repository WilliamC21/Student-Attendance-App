import Header from "../components/layout/Header";
import Styles from "./app.module.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className={Styles.marginT}></div>
      <Component {...pageProps} />
    </div>
  );
}
