import Login from './Login/Login'
import Hammburger from './Hammburger/Hammburger'

const Header = () => {
    return (
        <header className="website_header">
            <a className="nav_bar_link" href="./">
                Home Page
            </a>
            <Login/>
            <Hammburger/>
        </header>
    )
}

export default Header