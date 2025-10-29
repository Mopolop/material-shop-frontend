import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import searchIcon from "../assets/search-icon.png";

interface MaterialSearchProps {
  onSearch: (query: string) => void;
}

export const MaterialSearch: React.FC<MaterialSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query); // поиск при кнопке
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // чтобы форма не перезагружала страницу
      onSearch(query);     // поиск при Enter
    }
  };

  return (
    <InputGroup className="mb-4 material-search">
      <Form.Control
        type="text"
        placeholder="Поиск по материалам"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="no-focus-outline"
      />
      <Button variant="warning" onClick={handleSearch}>
        <img src={searchIcon} alt="Поиск" className="search-icon" />
      </Button>
    </InputGroup>
  );
};
