import axios from "axios";

const envTmbd = import.meta.env.VITE_API_TMPDB;
export const getSingleMovie = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${envTmbd}&language=en-US`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data.genres;
  } catch (error) {
    console.log(error);
  }
};
