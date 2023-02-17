import React from 'react'
import Link from 'next/link'
import Styles from './Signopt.module.css'
const Signopt = () => {
  return (
    <div className={Styles.container}>
      <p className={Styles.left}>Have an account?</p>
      <Link href='/login'>
        <p className={Styles.right}>Sign in</p>
      </Link>
    </div>
  )
}

export default Signopt
