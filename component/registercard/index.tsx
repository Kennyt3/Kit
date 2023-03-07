import React from 'react'
import Image from 'next/image'
import styles from './RegisterCard.module.css'
import ResgisterForm from '../form/registerform'
import { RegisterPageType } from '@/types/pages/register'

const Registercard = ({ name, Heading, subHeading }: RegisterPageType) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image width={70} height={70} src='/pics/logo.png' alt='logo' />
      </div>
      <h4 className={styles.name}>{name}</h4>
      <h2 className={styles.heading}>{Heading}</h2>
      <p className={styles.subheading}>{subHeading}</p>
      <ResgisterForm />
    </div>
  )
}

export default Registercard
