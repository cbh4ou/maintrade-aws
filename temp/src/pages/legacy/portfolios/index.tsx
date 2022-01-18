import { AutoColumn } from '@app/components/Column'
import Container from '@app/components/Container'
import DoubleGlowShadow from '@app/components/DoubleGlowShadow'
import Head from 'next/head'
import React from 'react'

export default function Portfolios({ banners }) {
  console.log('portfolios on legacy, [[...tokens]].tsx')
  return (
    <Container id="portfolios" className="py-4 md:py-8 lg:py-12">
      <Head>
        <title>Sushi</title>
        <meta
          key="description"
          name="description"
          content="SushiSwap allows for swapping of ERC20 compatible tokens across multiple networks"
        />
      </Head>
      <DoubleGlowShadow>
        <div className="p-4 space-y-4 rounded bg-dark-900 z-1">
          <AutoColumn justify="space-between" className="py-3">
            <div>
              <button className="z-10 -mt-6 -mb-6 rounded-full" onClick={() => {}}>
                <div className="rounded-full bg-dark-900 p-3px">
                  <div
                    className="p-3 rounded-full bg-dark-800 hover:bg-dark-700"
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                  ></div>
                </div>
              </button>
            </div>
          </AutoColumn>
        </div>
      </DoubleGlowShadow>
    </Container>
  )
}
