import React from "react";
import PageTemplate from "../components/templateShowPage";
import ReviewForm from "../components/ShowReviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteShowReviewPage = (props) => {
  const location = useLocation()
  const { ShowId } = location.state;
  const { data: Show, error, isLoading, isError } = useQuery(
    ["show", { id: ShowId }],
    getShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate Show={Show}>
      <ReviewForm Show={Show} />
    </PageTemplate>
  );
};

export default WriteShowReviewPage;