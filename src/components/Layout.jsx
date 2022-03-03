import '../styles/components/Layout.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      <div className="layout-content-container">
        {children}
      </div>
      <Footer />
    </div>    
  )
}

export default Layout