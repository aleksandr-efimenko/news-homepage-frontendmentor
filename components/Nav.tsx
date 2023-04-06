import React from "react";
import navStyles from '../styles/Nav.module.css'
import Link from "next/link";

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        {navItems.map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
