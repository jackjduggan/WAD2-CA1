import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateShowPage";
import ShowReview from "../components/ShowReview";

const ShowReviewPage = (props) => {
  let location = useLocation();
  const {Show, ShowReview} = location.state;

  return (
    <PageTemplate Show={Show}>
      <ShowReview ShowReview={ShowReview} />
    </PageTemplate>
  );
};

export default ShowReviewPage;