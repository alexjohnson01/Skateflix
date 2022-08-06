import Carousel from "../components/Carousel";
import Thumbnail from "../components/Thumbnail";
import Header from "../components/Header";
import { useState } from "react";

export default function Home({
  setId,
  movies,
  setMovies,
  trendingMovies,
  setTrendingMovies,
  cardsIndex,
  setCardsIndex,
  cardsIndex2,
  setCardsIndex2,
}) {
  //State
  const [val, setVal] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="container">
      <Header className={"headerHome"} val={val} setVal={setVal} />
      <Thumbnail
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        val={val}
        setVal={setVal}
        setId={setId}
      />
      <div
        className={
          isSearch ? "searchBoxHide banner-img" : "searchBoxShow banner-img"
        }
      ></div>
      <div className="overlay"></div>
      <div
        className={
          isSearch
            ? "searchBoxHide cards-container"
            : "searchBoxShow cards-container"
        }
      >
        <Carousel
          cardsIndex={cardsIndex}
          setCardsIndex={setCardsIndex}
          movieList={movies}
          setTrendingMovies={setMovies}
          trendingMovies={movies}
          setId={setId}
          title={"Popular on Skateflix"}
          css={"--cardsIndex"}
          className="cards"
        />
        <Carousel
          cardsIndex={cardsIndex2}
          setCardsIndex={setCardsIndex2}
          movieList={trendingMovies}
          setMovies={setTrendingMovies}
          movies={trendingMovies}
          setId={setId}
          title={"Trending Now"}
          css={"--cardsIndex2"}
          className={"cards2"}
        />
      </div>
    </div>
  );
}
