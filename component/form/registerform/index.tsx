import Signopt from '@/component/signopt'
import { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import styles from './register.module.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const ResgisterForm = () => {
  const [password, setPassword] = useState(false)
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async () => {
    const val = getValues()
    console.log(val)
  }
  const openpass = () => {
    setPassword(true)
  }
  const closepass = () => {
    setPassword(false)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formcontrol}>
        <label>First name</label>
        <input type='text' {...register('firstName', { required: true })} />
        {errors?.firstName?.type === 'required' && (
          <p className={styles.errorMsg}>Enter first name</p>
        )}
      </div>
      <div className={styles.formcontrol}>
        <label>Second name</label>
        <input type='text' {...register('secondName', { required: true })} />
        {errors?.secondName?.type === 'required' && (
          <p className={styles.errorMsg}>Enter second name</p>
        )}
      </div>
      <div className={styles.formcontrol}>
        <label>Email</label>
        <input
          type='email'
          {...register('email', {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          })}
        />
        {errors.email && errors.email.type === 'required' && (
          <p className={styles.errorMsg}>Email is required.</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className={styles.errorMsg}>Email is not valid.</p>
        )}
      </div>
      <div className={styles.formcontrol}>
        <label>Password</label>
        <div className={styles.inp}>
          <input
            type={!password ? 'password' : 'text'}
            {...register('password', { required: true, minLength: 8 })}
          />
          {!password ? (
            <AiOutlineEyeInvisible onClick={openpass} className={styles.abs} />
          ) : (
            <AiOutlineEye onClick={closepass} className={styles.abs} />
          )}
        </div>
        {errors?.password?.type === 'required' && (
          <p className={styles.errorMsg}>Password is required.</p>
        )}
        {errors?.password?.type === 'minLength' && (
          <p className={styles.errorMsg}>
            Password should be at-least 8 characters.
          </p>
        )}
      </div>
      <input type='submit' className={styles.submitBtn} value='Sign up' />

      <Signopt />
    </form>
  )
}

export default ResgisterForm
