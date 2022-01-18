import Header from '@app/components/Header'
import Main from '@app/components/Main'
const Layout = ({ children }) => {
  return (
    <div className="z-0 flex flex-col items-center w-full h-screen">
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
