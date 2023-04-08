import { NewsColumnData } from "@/utils/interface";
import React from "react";
import ncStyles from "@/styles/NewsColumn.module.css";
import Link from "next/link";

export default function NewsColumn({
  newsColumnData,
}: {
  newsColumnData: NewsColumnData[];
}) {
  return (
    <div className={ncStyles["news-column-container"]}>
      <h2>New</h2>
      {newsColumnData.map((item) => (
        <div key={item.id}>
          <h3>
            {" "}
            <Link href={item.link}>{item.title}</Link>
          </h3>

          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
