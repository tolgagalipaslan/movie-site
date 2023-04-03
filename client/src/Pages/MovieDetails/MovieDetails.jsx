import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovieDetails } from "../../helpers/Api";
import MovieDet from "./components/MovieDet";
import Video from "./components/Video";

const MovieDetails = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    getSingleMovieDetails(params.id).then((res) => setItem(res));
  }, [params.id]);
  return (
    <div>
      {item.length !== 0 ? (
        <div>
          <div>
            <MovieDet item={item} />
          </div>

          <div>
            <Video item={item} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieDetails;
