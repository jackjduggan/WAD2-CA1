import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
//Home Pages
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ShowsPage from "./pages/showsHomePage";
// Other Pages
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteShowsPage from "./pages/favouriteShowsPage";
// Review Pages
import MovieReviewPage from "./pages/movieReviewPage";
//import AddMovieReviewPage from './pages/addMovieReviewPage';
import WriteReviewPage from "./pages/addMovieReviewPage";
import ShowReviewPage from "./pages/showReviewPage";
import WriteShowReviewPage from "./pages/addShowReviewPage";
// Other
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
// Context Providers
import MoviesContextProvider from "./contexts/moviesContext";
import ShowsContextProvider from "./contexts/showsContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />      {/* New Header  */}
          <MoviesContextProvider>
            <Routes>
              <Route path="/reviews/form" element={<WriteReviewPage/>} />
              <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
              <Route exact path="/movies/favourites" element={<FavouriteMoviesPage/>} />
              <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </MoviesContextProvider>
          <ShowsContextProvider>
            <Routes>
              <Route path="/showreviews/form" element={<WriteShowReviewPage/>} />
              <Route path="/showreviews/:id" element={ <ShowReviewPage /> } />
              <Route exact path="/shows/favourites" element={<FavouriteShowsPage/>} />
              <Route path="/shows/:id" element={<ShowsPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </ShowsContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
  
  const rootElement = createRoot( document.getElementById("root") )
  rootElement.render(<App /> );