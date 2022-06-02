import { useEffect } from "react";
import { useState } from "react";
import { allVideos } from "../utils/database";
import Card from "./Card";

export default function Thumbnail({
  val,
  setVal,
  isSearch,
  setIsSearch,
  setId,
}) {
  //State
  const [searchResults, setSearchResults] = useState(false);
  //Functions
  const displayHandler = () => {
    if (val !== "") {
      setIsSearch(true);
      setSearchResults(true);
    } else if (val === "") {
      setIsSearch(false);
      setSearchResults(false);
    }
  };
  const idHandler = (event) => {
    const newId = event.currentTarget.id;
    setId(newId);
  };
  //UseEffect
  useEffect(() => {
    displayHandler();
  });
  return (
    <div className={isSearch ? "searchBoxShow video" : "searchBoxHide video"}>
      <div
        className={isSearch ? "searchBoxShow searchResults" : "searchBoxHide"}
      >
        {searchResults ? (
          allVideos
            .filter((video) => {
              if (video.name.toLowerCase().includes(val.toLowerCase())) {
                return video;
              }
              return undefined;
            })
            .map(({ thumbnail, id }) => {
              return (
                <Card thumbnail={thumbnail} id={id} idHandler={idHandler} />
              );
            })
        ) : (
          <h1>No Movies</h1>
        )}
      </div>
    </div>
  );
}
