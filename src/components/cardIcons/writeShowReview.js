import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteShowReviewIcon = ({ Show }) => {
  return (
    <Link
      to={'/showreviews/form'}
      state={{
          ShowId: Show.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteShowReviewIcon;