import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";
import searchIcon from "../assets/search-icon.png";
import { type RootState } from "../store";
import { setQuery } from "../slices/filterSlice";

interface MaterialSearchProps {
  onSearch: (query: string) => void;
}

export const MaterialSearch: React.FC<MaterialSearchProps> = ({ onSearch }) => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.filter.query);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(query.trim());
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
