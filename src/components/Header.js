import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="nav">
            <div className="header">
                <div>
                    <a href="/"> Food <span>Zayka</span></a>
                </div>
            <ul className="list">
                <Link to="/"><li> Home </li></Link>
                <Link to="/about"><li> About </li></Link>
                <Link to="/contact"><li> Contact </li></Link>
                <Link to="/card"><li> Card </li></Link>
            </ul>
            <button > Login </button>
            </div>
        </nav>
    )
}



export default Header;