import React from "react";
import mobileNavStyles from "@/styles/Layout/MoblieNav.module.css";
import Image from "next/image";
import Link from "next/link";
import iconClose from "@/public/static/images/icon-menu-close.svg";

export default function MobileNav({ navItems, handleOpenCloseMobileNav }: { navItems: string[], handleOpenCloseMobileNav: () => void }) {
  return (
    <div className={mobileNavStyles["mobile-nav-overlay"]}>
      <div className={mobileNavStyles["mobile-nav-container"]}>
        <div className={mobileNavStyles["mobile-nav-close"]}>
          <Link href="/" onClick={handleOpenCloseMobileNav}>
            <Image
              src={iconClose}
              width={30}
              height={30}
              alt="mobile nav close button"
            />
          </Link>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
