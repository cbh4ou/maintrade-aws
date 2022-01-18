/* eslint-disable @next/next/no-img-element */
// import { InjectedConnector } from '@web3-react/injected-connector'
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import Link from 'next/link'
import React, { FC } from 'react'

// import LanguageSwitch from '../LanguageSwitch'
import NavLink from '../NavLink'
// import Web3Network from '../Web3Network'
// import Web3Status from '../Web3Status'
import { ACTIVE_NAV_LINK_CLASS, NAV_BASE_CLASS } from './styles'

// import { useActiveWeb3React } from 'app/services/web3'
// import { useETHBalances } from 'app/state/wallet/hooks'

interface DesktopNavProps {
  mobileMenuOpen: boolean
}

export const DesktopNav: FC<DesktopNavProps> = ({ mobileMenuOpen }) => {
  //   const { account, chainId, library, connector } = useActiveWeb3React()
  //   const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  //   const isCbWallet =
  //     connector instanceof WalletLinkConnector ||
  //     (connector instanceof InjectedConnector && window.walletLinkExtension) ||
  //     window?.ethereum?.isCoinbaseWallet

  return (
    <div className="flex flex-col gap-3 px-6 py-3">
      <div className="grid items-center justify-between grid-cols-2">
        <div className="flex items-center">
          <div className="min-w-[48px] h-6">
            <img src="./images/logo.svg" alt="MainTrade logo" width="24px" height="24px" />
          </div>
          <div className="flex space-x-1.5 hidden sm:block">
            <NavLink href={'/portfolios'} activeClassName={ACTIVE_NAV_LINK_CLASS}>
              <a className={NAV_BASE_CLASS}>{`Portfolios`}</a>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
