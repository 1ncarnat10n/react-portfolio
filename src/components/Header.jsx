// Imports
import Navigation from "./Navigation"
import '../../style/Header.css'

// Header component
const Header = () => {
    return (
        <div className="header">
            <h1 className="d-flex align-items-center header-name">William Tsai</h1>
            <Navigation />
        </div>
    )
}

export default Header