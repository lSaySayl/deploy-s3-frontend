
import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import "../../styles/SearchBar.css";

function SearchBar() {
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearch = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="search-bar">
            <Input placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button text="Buscar" onClick={handleSearch} />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} searchQuery={search} />
        </div>
    );
}

export default SearchBar;
