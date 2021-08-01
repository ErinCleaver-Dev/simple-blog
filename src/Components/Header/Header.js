import Login from './Login/Login'

const Header = () => {
    return (
        <header className="website_header">
            <a className="nav_bar_link" href="./">
                Home Page
            </a>
            <Login/>
        </header>
    )
}

export default Header