import React from "react";
import { useParams } from 'react-router-dom';
import TelevisionShowDetails from "../components/televisionShowDetails";
import PageTemplate from "../components/templateTelevisionShowPage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TelevisionShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: televisionShow, error, isLoading, isError } = useQuery(
    ["televisionshow", { id: id }],
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
      {televisionShow ? (
        <>
          <PageTemplate televisionShow={televisionShow}>
            <TelevisionShowDetails televisionShow={televisionShow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for television show details</p>
      )}
    </>
  );
};

export default TelevisionShowDetailsPage;