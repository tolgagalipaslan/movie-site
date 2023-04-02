import { Home, Login, MovieDetails, Register } from "../Pages";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/movieDetails/:id", component: <MovieDetails /> },
];

export default routes;
