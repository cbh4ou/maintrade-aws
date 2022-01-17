import Header from '@app/components/Header'
import Main from '@app/components/Main'
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
