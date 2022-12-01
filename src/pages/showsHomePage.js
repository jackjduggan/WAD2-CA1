import React from "react";
import { getShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToShowsFavouritesIcon from '../components/cardIcons/addToFavourites'

const ShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('shows', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const Shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const ShowsFavourites = Shows.filter(t => t.ShowsFavourite)
  localStorage.setItem('favourites', JSON.stringify(ShowsFavourites))

  return (
    <PageTemplate
      title="Discover Television Shows"
      Shows={Shows}
      action={(Show) => {
        return <AddToShowsFavouritesIcon Show={Show} />
      }}
    />
);
};
export default ShowsPage;