import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
//Home Pages
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TelevisionShowHomePage from "./pages/televisionShowHomePage";
// Other Pages
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteTelevisionShowsPage from "./pages/favouriteTelevisionShowsPage";
// Review Pages
import MovieReviewPage from "./pages/movieReviewPage";
//import AddMovieReviewPage from './pages/addMovieReviewPage';
import WriteReviewPage from "./pages/addMovieReviewPage";
import TelevisionShowReviewPage from "./pages/televisionShowReviewPage";
import WriteTelevisionShowReviewPage from "./pages/addTelevisionShowReviewPage";
// Other
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
// Context Providers
import MoviesContextProvider from "./contexts/moviesContext";
import TelevisionShowsContextProvider from "./contexts/televisionShowsContext";

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
          <TelevisionShowsContextProvider>
            <Routes>
              <Route path="/televisionreviews/form" element={<WriteTelevisionShowReviewPage/>} />
              <Route path="/televisionreviews/:id" element={ <TelevisionShowReviewPage /> } />
              <Route exact path="/television/favourites" element={<FavouriteTelevisionShowsPage/>} />
              <Route path="/television/:id" element={<TelevisionShowHomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </TelevisionShowsContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
  
  const rootElement = createRoot( document.getElementById("root") )
  rootElement.render(<App /> );