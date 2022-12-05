import React from "react";
import PageTemplate from "../components/templateTelevisionShowPage";
import ReviewForm from "../components/televisionShowReviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteTelevisionShowReviewPage = (props) => {
  const location = useLocation()
  const { televisionShowId } = location.state;
  const { data: televisionShow, error, isLoading, isError } = useQuery(
    ["televisionshow", { id: televisionShowId }],
    getShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate televisionShow={televisionShow}>
      <ReviewForm televisionShow={televisionShow} />
    </PageTemplate>
  );
};

export default WriteTelevisionShowReviewPage;