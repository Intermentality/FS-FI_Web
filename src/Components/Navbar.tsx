import { Link } from "react-router-dom"

export default function Navbar(){
    return <nav className="Nav">
        <Link to="/">Home</Link>

        <ul>
            <li><Link to="/FI">Food Insecurity</Link></li>
            <li><Link to="/FS">Food Scarcity</Link></li>
            <li><Link to="/S">Solutions</Link></li>
        </ul>
    </nav>
}