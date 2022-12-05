import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTelevisionShowPage";
import TelevisionShowReview from "../components/televisionShowReview";

const TelevisionShowReviewPage = (props) => {
  let location = useLocation();
  const {televisionShow, televisionShowReview} = location.state;

  return (
    <PageTemplate televisionShow={televisionShow}>
      <TelevisionShowReview televisionShowReview={televisionShowReview} />
    </PageTemplate>
  );
};

export default TelevisionShowReviewPage;