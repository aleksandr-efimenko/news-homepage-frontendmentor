import React from 'react'
import buttonStyles from '../styles/ButtonStyles.module.css'

export default function RedButton({buttonLink}: {buttonLink: string}) {
  return (
    <a href={buttonLink} className={buttonStyles['red-button']}>Read more</a>
  )
}
