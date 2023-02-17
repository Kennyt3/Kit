import Register from '@/container/register'
import Head from 'next/head'
import { registerPageData } from '../content/register'
import { RegisterPageType } from '@/types/pages/register'

const registerPage = (props: RegisterPageType) => {
  return (
    <>
      <Head>
        <title>KIT STORE</title>
      </Head>
      <main>
        <Register {...props} />
      </main>
    </>
  )
}

export default registerPage

export const getStaticProps = async () => {
  const registerData = await registerPageData()

  return {
    props: registerData,
  }
}
