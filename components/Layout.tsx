import React from "react";
import Nav from "./Nav";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400"], subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
