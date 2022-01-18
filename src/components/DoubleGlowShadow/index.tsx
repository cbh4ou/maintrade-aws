import { classNames } from 'app/functions'
import useDesktopMediaQuery from 'app/hooks/useDesktopMediaQuery'
import { FC } from 'react'

const DoubleGlowShadow: FC<{ className?: string }> = ({ children, className }) => {
  const isDesktop = useDesktopMediaQuery()

  return (
    <div className={classNames(className, 'relative w-full max-w-2xl')}>
      <div
        className={classNames(
          isDesktop ? 'from-green/20 to-black/40' : ' from-green/25 to-black/25',
          'fixed inset-0 bg-gradient-radial'
        )}
      />
      <div className="relative filter drop-shadow">{children}</div>
    </div>
  )
}

export default DoubleGlowShadow
