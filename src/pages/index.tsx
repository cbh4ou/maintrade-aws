import Container from 'app/components/Container'
import Amplify from 'aws-amplify'
import Head from 'next/head'

import aws_exports from '../../aws-exports'
Amplify.configure({ ...aws_exports, ssr: true })

export default function Dashboard() {
  return (
    <Container id="dashboard-page" className="py-4 md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Dashboard | Sushi</title>
        <meta name="description" content="Sushi" />
      </Head>
    </Container>
  )
}