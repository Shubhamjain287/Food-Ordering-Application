import { Link } from "react-router-dom";
import {AiFillHome , AiFillContacts} from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { TbPokeball } from "react-icons/tb";

const Header = () => {
    return (
        <nav className="nav">
            <div className="header">
                <div>
                    <a href="/"> Food <span>Zayka</span></a>
                </div>
            <ul className="list">
                <Link to="/"><li> <AiFillHome /> Home </li></Link>
                <Link to="/about"><li> <TbPokeball /> About </li></Link>
                <Link to="/contact"><li> <AiFillContacts /> Contact </li></Link>
                <Link to="/card"><li> <MdShoppingCart /> Card </li></Link>
            </ul>
            </div>
        </nav>
    )
}



export default Header;