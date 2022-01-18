import Container from '@app/components/Container'
import Amplify from 'aws-amplify'
import Head from 'next/head'

import aws_exports from '../../aws-exports'

Amplify.configure(aws_exports)

export default function Dashboard() {
  return (
    <Container id="dashboard-page" className="py-4 md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Dashboard | MainTrade</title>
        <meta name="description" content="MainTrade" />
      </Head>
    </Container>
  )
}
