import { NewsRowData } from "@/utils/interface";
import NewsRowElement from "./NewsRowElement";
import React from "react";
import nrStyles from "@/styles/NewsRow.module.css"

export default function NewsRow({ newsRowData }: { newsRowData: NewsRowData[] }) {
  console.log(newsRowData);
  return (
    <div className={nrStyles["news-row-container"]}>
      {newsRowData.map((item) => (
        <NewsRowElement key={item.id} {...item} />
      ))}
    </div>
  );
}
