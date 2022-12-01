import React from "react";
import { useParams } from 'react-router-dom';
import ShowDetails from "../components/ShowDetails/";
import PageTemplate from "../components/templateShowPage";
import { getShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const ShowDetailsPage = (props) => {
    const { id } = useParams();
  
    const { data: Show, error, isLoading, isError } = useQuery(
      ["show", { id: id }],
      getShow
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

  return (
    <>
      {Show ? (
        <>
          <PageTemplate Show={Show}>
            <ShowDetails Show={Show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for Television Show details</p>
      )}
    </>
  );
};

export default ShowDetailsPage;