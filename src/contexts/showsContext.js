import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [ShowsFavourites, setShowsFavourites] = useState( [] )
  const [myShowReviews, setMyShowReviews] = useState( {} ) 

  const addToShowsFavourites = (Show) => {
    let newShowsFavourites = [...ShowsFavourites];
    if (!ShowsFavourites.includes(Show.id)) {
      newShowsFavourites.push(Show.id);
    }
    setShowsFavourites(newShowsFavourites);
  };

  const removeFromShowsFavourites = (Show) => {
    setShowsFavourites( ShowsFavourites.filter(
      (tId) => tId !== Show.id
    ) )
  };

  const addShowReview = (Show, ShowReview) => {
    setMyShowReviews( {...myShowReviews, [Show.id]: ShowReview } )
  };

 return (
    <ShowsContext.Provider
      value={{
        ShowsFavourites,
        addToShowsFavourites,
        removeFromShowsFavourites,
        addShowReview,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;