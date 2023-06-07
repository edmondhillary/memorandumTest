import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header/Header";
import { Spin, Button } from "antd";

const CardContainer = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const theme = {
  headerBackground: "#202020",
  searchButtonBackground: "#789abc",
  searchButtonTextColor: "#fff",
};

function App() {
  const API_KEY = "e4e1ecc0b155dbe00e434c7125de75ba";
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [searchKeys, setSearchKeys] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies(searchKeys, page);
  }, [searchKeys, page]);

  const fetchMovies = async (searchKey, page) => {
    setIsLoading(true);
    const type = searchKey ? "search" : "discover";
    try {
      const response = await fetch(
        `${API_URL}/${type}/movie?api_key=${API_KEY}&query=${searchKey}&page=${page}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ margin: "1rem" }}>
        <Spin spinning={isLoading} size="large">
          <CardContainer>
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </CardContainer>
        </Spin>
        {!isLoading && movies.length > 0 && (
          <div style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
            <Button onClick={handlePreviousPage} disabled={page === 1}>
              Anterior
            </Button>
            <Button onClick={handleNextPage}>Siguiente</Button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
