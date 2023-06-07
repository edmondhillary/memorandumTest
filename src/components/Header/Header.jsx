import React, { useState, useCallback } from "react";
import { useSearchMoviesQuery } from "../../features/movies/moviesApi";
import {
  HeaderContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  DropdownMenu,
} from "./HeaderStyles.js";
import { Menu, Dropdown, Modal, Spin } from "antd";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: movies, error, isLoading } = useSearchMoviesQuery(searchQuery);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const handleSearchBlur = () => {
    setSearchQuery(""); // Vaciar el input cuando se pierde el foco
  };

  const onItemClick = (item) => {
    console.log({ item });
    setSearchValue("");
    setDropdownOpen(false);
  };

  const renderMenu = useCallback(
    () => (
      <DropdownMenu>
        {movies?.results?.slice(0, 5).map((movie) => (
          <Menu.Item onClick={() => onItemClick} key={movie?.id}>
            {movie?.title}
          </Menu.Item>
        ))}
      </DropdownMenu>
    ),
    [movies]
  );
  return (
    <HeaderContainer>
      <SearchContainer onSubmit={handleSearchSubmit}>
        <Dropdown
          destroyPopupOnHide={true}
          autoAdjustOverflow={true}
          overlay={renderMenu}
          //   open={!!searchQuery && !isLoading}
          placement='bottom'
        >
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <SearchInput
              type='text'
              placeholder='Buscar películas'
              value={searchQuery}
              onChange={handleSearchInputChange}
              onBlur={handleSearchBlur} // Manejar el evento onBlur para vaciar el input
            />
            <SearchButton type='submit'>Buscar</SearchButton>
          </div>
        </Dropdown>
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
