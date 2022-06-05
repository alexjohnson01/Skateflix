import Carousel from "../components/Carousel";
import Thumbnail from "../components/Thumbnail";
import Header from "../components/Header";
import { useState } from "react";

export default function Home({
  setId,
  movies,
  popularMovies,
  setPopularMovies,
  setMovies,
  cardsIndex,
  setCardsIndex,
  cardsIndex2,
  setCardsIndex2,
  cardsIndex3,
  setCardsIndex3,
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
          setPopularMovies={setPopularMovies}
          popularMovies={movies}
          setId={setId}
          title={"Popular on Skateflix"}
          css={"--cardsIndex"}
          className="cards"
        />
        <Carousel
          cardsIndex={cardsIndex2}
          setCardsIndex={setCardsIndex2}
          setPopularMovies={setMovies}
          popularMovies={movies}
          setId={setId}
          title={"Trending Now"}
          css={"--cardsIndex2"}
          className={"cards2"}
        />
        <Carousel
          cardsIndex={cardsIndex3}
          setCardsIndex={setCardsIndex3}
          setPopularMovies={setMovies}
          popularMovies={movies}
          setId={setId}
          title={"Watch it Again"}
          css={"--cardsIndex3"}
          className={"cards3"}
        />
      </div>
    </div>
  );
}
