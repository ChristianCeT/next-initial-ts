import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";
import React from "react";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ href, text }) => {
        return <ActiveLink key={href} href={href} text={text}></ActiveLink>;
      })}
    </nav>
  );
};
