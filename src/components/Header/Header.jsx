
import './header.scss'
import HeaderCenter from './headerCenter/HeaderCenter'


import Navbar from './Navbar/Navbar'




function Header() {
  return (
    <div className="header">
        <Navbar />
        <HeaderCenter />
    </div>
  )
}

export default Header