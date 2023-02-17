import Signopt from '@/component/signopt'
import { useForm } from 'react-hook-form'
import styles from './register.module.css'

const ResgisterForm = () => {
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

  const onSubmit = () => {
    const val = getValues()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formcontrol}>
        <label>First name</label>
        <input type='text' {...register('firstName', { required: true })} />
      </div>
      <div className={styles.formcontrol}>
        <label>Second name</label>
        <input type='text' {...register('secondName', { required: true })} />
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
          <p className='errorMsg'>Email is required.</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className='errorMsg'>Email is not valid.</p>
        )}
      </div>
      <div className={styles.formcontrol}>
        <label>Password</label>
        <input
          type='password'
          {...register('password', { required: true, minLength: 8 })}
        />
        {errors?.password?.type === 'required' && (
          <p className='errorMsg'>Password is required.</p>
        )}
        {errors?.password?.type === 'minLength' && (
          <p className='errorMsg'>Password should be at-least 8 characters.</p>
        )}
      </div>
      <button type='submit' className={styles.submitBtn}>
        Sign in
      </button>
      <Signopt />
    </form>
  )
}

export default ResgisterForm
