import React from "react";
import { getShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateTelevisionShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToTelevisionFavouritesIcon from '../components/cardIcons/addToTelevisionFavourites'


const TelevisionShowHomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const televisionShows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = televisionShows.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Television Shows"
      televisionShows={televisionShows}
      action={(televisionShow) => {
        return <AddToTelevisionFavouritesIcon televisionShow={televisionShow} />
      }}
    />
);
};
export default TelevisionShowHomePage;