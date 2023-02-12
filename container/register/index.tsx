import styles from './Register.module.css'
import Div100vh from 'react-div-100vh'
import RegisterCard from '../../component/registercard'
import { RegisterType } from '@/types/register'

const Register = (registerData: RegisterType) => {
  return (
    <div>
      <Div100vh className={styles.container}>
        <RegisterCard {...registerData} />
      </Div100vh>
    </div>
  )
}

export default Register
