import React, { useState } from "react";

export const TelevisionShowsContext = React.createContext(null);

const TelevisionShowsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] ) 
  const [myReviews, setMyReviews] = useState( {} ) 
  //removed must watch for television shows

  const addToTelevisionShowsFavourites = (televisionShow) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(televisionShow.id)) {
      newFavourites.push(televisionShow.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromTelevisionShowsFavourites = (televisionShow) => {
    setFavourites( favourites.filter(
      (tSId) => tSId !== televisionShow.id
    ) )
  };

  const addTelevisionShowReview = (televisionShow, televisionShowReview) => {
    setMyReviews( {...myReviews, [televisionShow.id]: televisionShowReview } )
  };

  return (
    <TelevisionShowsContext.Provider
      value={{
        favourites,
        addToTelevisionShowsFavourites,
        removeFromTelevisionShowsFavourites,
        addTelevisionShowReview,
      }}
    >
      {props.children}
    </TelevisionShowsContext.Provider>
  );
};

export default TelevisionShowsContextProvider;