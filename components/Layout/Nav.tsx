import React, { useState } from "react";
import navStyles from '../../styles/Layout/Nav.module.css'
import Link from "next/link";
import Image from "next/image";
import iconMenu from "../../public/static/images/icon-menu.svg";
import MobileNav from "./MobileNav";

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

export default function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleOpenMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <>
      <nav className={navStyles.nav}>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <Link href={`/`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link className={navStyles["icon-menu"]} href={`/`} onClick={handleOpenMobileNav} >
        <Image src={iconMenu} alt="Menu" width={40} height={17} />
      </Link>
     {  isMobileNavOpen && <MobileNav navItems={navItems} handleOpenCloseMobileNav={handleOpenMobileNav} />
}
    </>
  );
}
