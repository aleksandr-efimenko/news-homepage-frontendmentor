import React from "react";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";

const inter = Inter({ weight: ["400"], subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <NavBar />
      {children}
    </div>
  );
}
