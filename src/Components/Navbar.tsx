import { Link } from "react-router-dom"
import { LinkNewWindow } from "./Link"

export default function Navbar(){
    return <nav className="Nav">
        <Link to="/">Home</Link>

        <ul>
            <li><Link to="/FI">Food Insecurity</Link></li>
            <li><Link to="/FS">Food Scarcity</Link></li>
        </ul>
    </nav>
}