import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";
import logo from "../public/assets/images/logo.svg";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className={[styles["logo-container"], "container"].join(" ")}>
      <Link href="/">
        <Image src={logo} alt="Logo" width={64} height={39} />
      </Link>
      <Nav />
    </header>
  );
}
