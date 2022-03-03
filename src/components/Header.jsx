import '../styles/components/Header.css'
import logo from '../assets/Bannerweb(comprimido).png'

const Header = () => {
  return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo de la marca" />
        </div>        
      </div>
  )
}

export default Header