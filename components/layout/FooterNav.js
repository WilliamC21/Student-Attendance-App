import Card from "../UI/Card";
import Link from "next/dist/client/link";
import Styles from "./FooterNav.module.css";

const FooterNav = (props) => {
  return (
    <div className={Styles["main-container"]}>
      <Card>
        <div className={Styles["nav"]}>
          {props.items.map((button) => (
            <Link key={button[0]} href={button[0]}>
              <button>{button[1]}</button>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FooterNav;
