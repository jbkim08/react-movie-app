import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  //검색어로 영화데이터 요청 async/await는 쌍으로 사용
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6bfc4a64`;
    //자바스크립트는 비동기므로 await를 붙여서 영화데이터를 다받고 다음코드 실행
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      //결과가 있을경우!
      setMovies(responseJson.Search);
    }
  };

  //검색어가 바뀔시 한번 함수 실행
  useEffect(() => {
    if (searchValue.length > 3) {
      getMovieRequest(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row align-items-center my-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
