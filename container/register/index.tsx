import styles from './Register.module.css'
import Div100vh from 'react-div-100vh'
import RegisterCard from '../../component/registercard'
import { RegisterPageType } from '@/types/pages/register'

const Register = ({ name, Heading, subHeading }: RegisterPageType) => {
  return (
    <div>
      <Div100vh className={styles.container}>
        <RegisterCard name={name} Heading={Heading} subHeading={subHeading} />
      </Div100vh>
    </div>
  )
}

export default Register
