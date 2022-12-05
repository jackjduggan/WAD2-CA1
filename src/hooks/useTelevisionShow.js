import { useEffect, useState } from "react";
import {getShow} from '../api/tmdb-api'

const useTelevisionShow = id => {
  const [televisionShow, setTelevisionShow] = useState(null);
  useEffect(() => {
    getShow(id).then(televisionShow => {
      setTelevisionShow(televisionShow);
    });
  }, [id]);
  return [televisionShow, setTelevisionShow];
};

export default useTelevisionShow