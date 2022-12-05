import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteTelevisionReviewIcon = ({ televisionShow }) => {
  return (
    <Link
      to={'/televisionreviews/televisionform'}
      state={{
          televisionShowId: televisionShow.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteTelevisionReviewIcon;