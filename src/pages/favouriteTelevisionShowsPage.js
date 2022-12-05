import React, { useContext } from "react";
import PageTemplate from "../components/templateTelevisionShowListPage";
import { TelevisionShowsContext } from "../contexts/televisionShowsContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromTelevisionShowsFavourites from "../components/cardIcons/removeFromTelevisionFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteTelevisionShowsPage = () => {
  const {favourites: televisionShowIds } = useContext(TelevisionShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteTelevisionShowQueries = useQueries(
    televisionShowIds.map((televisionShowId) => {
      return {
        queryKey: ["televisionshow", { id: televisionShowId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTelevisionShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const televisionShows = favouriteTelevisionShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  //const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Television Shows"
      televisionShows={televisionShows}
      action={(televisionShow) => {
        return (
          <>
            <RemoveFromTelevisionShowsFavourites televisionShow={televisionShow} />
            <WriteReview televisionShow={televisionShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTelevisionShowsPage;