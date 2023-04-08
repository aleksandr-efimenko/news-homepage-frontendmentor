import { NewsRowData } from '@/utils/interface'
import React from 'react'
import Image from 'next/image'
import nrStyles from '@/styles/NewsRow.module.css'

export default function NewsRowElement( newsRow: NewsRowData )  {
  return (
    <div className={nrStyles['news-element-container']}>
      <Image src={newsRow.imgSrc} alt={newsRow.title} width={100} height={127} />
      <div className="">
        <p className={nrStyles['news-element-id']}>{newsRow.id}</p>
        <h3>{newsRow.title}</h3>
        <p>{newsRow.description}</p>
      </div>
    </div>
  )
}
