import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] ) 
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatches, setMustWatches] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [...mustWatches];
    if (!mustWatches.includes(movie.id)) {
      newMustWatch.push(movie.id);
    }
    setMustWatches(newMustWatch);
    
    console.log(newMustWatch);
  };

  // We will use this function in a later section
  const removeFromMustWatch = (movie) => {
    setMustWatches( mustWatches.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatches,
        addToFavourites,
        addToMustWatch,
        removeFromFavourites,
        removeFromMustWatch,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;