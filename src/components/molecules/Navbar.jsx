import "../../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/servicios">Servicios</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
