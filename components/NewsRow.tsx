import { NewsRowData } from "@/utils/interface";
import NewsRowElement from "./NewsRowElement";
import React from "react";

export default function NewsRow(newsRow: NewsRowData[]) {
  return (
    <div>
      {newsRow.map((item) => (
        <NewsRowElement key={item.id} {...item} />
      ))}
    </div>
  );
}
