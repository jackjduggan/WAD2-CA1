import { useEffect, useState } from "react";
import {getShow} from '../api/tmdb-api'

const useShow = id => {
  const [Show, setShow] = useState(null);
  useEffect(() => {
    getShow(id).then(Show => {
      setShow(Show);
    });
  }, [id]);
  return [Show, setShow];
};

export default useShow;