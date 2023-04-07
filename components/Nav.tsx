import React from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import iconMenu from "../public/assets/images/icon-menu.svg";

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

export default function Nav() {
  return (
    <>
      {" "}
      <nav className={navStyles.nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <Link href={`/`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link className={navStyles["icon-menu"]} href={`/`}>
        <Image src={iconMenu} alt="Menu" width={40} height={17} />
      </Link>
    </>
  );
}
