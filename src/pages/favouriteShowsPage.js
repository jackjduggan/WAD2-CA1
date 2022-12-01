import React, { useContext } from "react";
import PageTemplate from "../components/templateShowListPage";
import { ShowsContext } from "../contexts/showsContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromShowsFavourites from "../components/cardIcons/removeFromFavourites";
import WriteShowReview from "../components/cardIcons/writeReview";

const FavouriteShowsPage = () => {
  const {ShowsFavourites: ShowIds } = useContext(ShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteShowQueries = useQueries(
    ShowIds.map((ShowId) => {
      return {
        queryKey: ["Show", { id: ShowId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteShowQueries.find((t) => t.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const Shows = favouriteShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Favourite Television Shows"
      Shows={Shows}
      action={(Show) => {
        return (
          <>
            <RemoveFromShowsFavourites Show={Show} />
            <WriteShowReview Show={Show} />
          </>
        );
      }}
    />
  );
};

export default FavouriteShowsPage;