import LeftHandle from "./LeftHandle";
import RightHandle from "./RightHandle";
import Card from "./Card";

export default function Carousel({
  cardsIndex,
  setCardsIndex,
  setMovies,
  movies,
  setTrendingMovies,
  trendingMovies,
  setId,
  title,
  css,
  className,
  movieList,
}) {
  //Functions
  const idHandler = (event) => {
    const newId = event.currentTarget.id;
    setId(newId);
  };
  return (
    <>
      <h3 className="title">{title}</h3>
      <div className="rows">
        <LeftHandle
          cardsIndex={cardsIndex}
          setCardsIndex={setCardsIndex}
          css={css}
        />
        <div className={className}>
          {movieList.map(({ thumbnail, id }) => {
            return <Card thumbnail={thumbnail} id={id} idHandler={idHandler} />;
          })}
        </div>
        <RightHandle
          cardsIndex={cardsIndex}
          setCardsIndex={setCardsIndex}
          css={css}
          movies={movies}
          setMovies={setMovies}
        />
      </div>
    </>
  );
}
