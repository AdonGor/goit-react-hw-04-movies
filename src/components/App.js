import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';

const HomePage = lazy(() =>
  import('./HomePage' /* webpackChunkName: "home-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const PageNotFound = lazy(() =>
  import(
    './PageNotFound' /* webpackChunkName: "page-not-found" */
  ),
);

export function App() {
    return (
      <>
        <Suspense fallback={<p>Loading...</p>}>
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }