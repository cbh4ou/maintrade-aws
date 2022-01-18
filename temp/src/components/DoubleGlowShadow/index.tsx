import { classNames } from '@app/functions'
import { FC } from 'react'
// import useDesktopMediaQuery from '@app/hooks/useDesktopMediaQuery'

const DoubleGlowShadow: FC<{ className?: string }> = ({ children, className }) => {
  //   const isDesktop = useDesktopMediaQuery()

  return (
    <div className={classNames(className, 'relative w-full max-w-2xl')}>
      <div className={classNames('from-pink/5 to-blue/5')} />
      <div className="relative filter drop-shadow">{children}</div>
    </div>
  )
}

export default DoubleGlowShadow
