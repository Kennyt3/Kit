import Register from '@/container/register'
import Head from 'next/head'
import { registerPageData } from '../content/register'
import { RegisterPageType } from '@/types/pages/register'

const registerPage = (props: RegisterPageType) => {
  const { name, Heading, subHeading } = props
  return (
    <>
      <Head>
        <title>KIT STORE</title>
      </Head>
      <main>
        <Register name={name} Heading={Heading} subHeading={subHeading} />
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
