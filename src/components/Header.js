

const Header = (props) => {
    return (
        <nav className="nav">
            <div className="header">
                <div>
                    <a href="/"> Food Villa </a>
                </div>
            <ul className="list">
                <a href="/"><li> Home </li></a>
                <a href="/about"><li> About </li></a>
                <a href="/contact"><li> Contact </li></a>
            </ul>
            <button > Login </button>
            </div>
        </nav>
    )
}



export default Header;