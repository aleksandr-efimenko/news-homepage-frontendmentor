import { NewsColumnData } from "@/utils/interface";
import React from "react";

export default function NewsColumn( newsColumn: NewsColumnData[]) {
  console.log(newsColumn)
  return (
    <div>
      <h2>New</h2>
      {/* {newsColumn.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))} */}
    </div>
  );
}
