import "../../styles/Header.css";
import Button from "../atoms/Button";
import SearchBar from "../molecules/SearchBar";

function Header({ signOut }) {
    return (
        <header className="header">
            <SearchBar />
            <Button text="Cerrar sesión" onClick={signOut} />
        </header>
    );
}

export default Header;