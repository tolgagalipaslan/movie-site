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
export const getSingleMovieDetails = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${envTmbd}&language=en-US`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getSingleMovieCredits = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${envTmbd}&language=en-US`;
  try {
    const product = await axios.get(movieDetailsUrl);
    const newArray = [];
    if (product.data.cast.length > 10) {
      for (let i = 0; i < 10; i++) {
        newArray.push(product.data.cast[i]);
      }
      return newArray;
    } else {
      return product.data.cast;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getUpComingMovies = async () => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${envTmbd}&language=en-US&page=1`;
  try {
    const product = await axios.get(movieDetailsUrl);
    const newArray = [];
    for (let i = 0; i < 8; i++) {
      newArray.push(product.data.results[i]);
    }
    return newArray;
  } catch (error) {
    console.log(error);
  }
};

export const getLatestMovies = async (page) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${envTmbd}&language=en-US&page=${page}`;
  // const movieDetailsUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${envTmbd}&language=en-US&page=${page}`;
  try {
    const product = await axios.get(movieDetailsUrl);

    return product.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const getTopRated = async () => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${envTmbd}&language=en-US&page=1`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data.results;
  } catch (error) {
    console.log(error);
  }
};

//SERIES
export const getTopRatedSeries = async () => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${envTmbd}&language=en-US&page=1`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSeriesTrailer = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${envTmbd}&language=en-US`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieTrailer = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${envTmbd}&language=en-US`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data.results[0];
  } catch (error) {
    console.log(error);
  }
};
export const getSmilarMovie = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${envTmbd}&language=en-US&page=1`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieReviews = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${envTmbd}&language=en-US&page=1S`;
  try {
    const product = await axios.get(movieDetailsUrl);
    const newArray = [];
    if (product.data.results.length > 10) {
      for (let i = 0; i < 5; i++) {
        newArray.push(product.data.results[i]);
      }
      return newArray;
    } else {
      return product.data.results;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSeries = async (id) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${envTmbd}&language=en-US`;
  try {
    const product = await axios.get(movieDetailsUrl);
    return product.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularSeries = async (d) => {
  const movieDetailsUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${envTmbd}&language=en-US&page=1`;
  try {
    const product = await axios.get(movieDetailsUrl);
    const newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(product.data.results[i]);
    }
    return newArray;
  } catch (error) {
    console.log(error);
  }
};
