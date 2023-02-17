import React from 'react'
import Image from 'next/image'
import styles from './RegisterCard.module.css'
import ResgisterForm from '../form/registerform'

const Registercard = (registerData: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image width={70} height={70} src='/pics/logo.png' alt='logo' />
      </div>
      <h4 className={styles.name}>{registerData.name}</h4>
      <h2 className={styles.heading}>{registerData.Heading}</h2>
      <p className={styles.subheading}>{registerData.subHeading}</p>
      <ResgisterForm />
    </div>
  )
}

export default Registercard
