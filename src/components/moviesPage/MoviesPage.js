import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { fetchMoviesWithQuery } from '../../services/moviesApi';
import styles from './movies.module.css';
import { Button } from 'react-bootstrap';

function MoviesPage(props) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [notice, setNotice] = useState('');
  const location = useLocation();
  const search = queryString.parse(location.search);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.history.push({
      search: `query=${query}`,
    });
    setQuery('');
  };

  useEffect(() => {
    search.query &&
      fetchMoviesWithQuery(search.query)
        .then(results => {
          if (results.length) {
            setNotice('');
            setMovies(results);
          } else {
            setMovies([]);
            setNotice("Sorry, we can't find anything for your request");
          }
        })
        .catch(error => setNotice(error.response.data.status_message));
  }, [search.query]);

  return (
    <div className={styles.container}>
      <h2>Movies Page</h2>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          value={query}
          onChange={handleChange}
          className={styles.inputForm}
        />

        <Button  variant="primary" type="submit" value="Submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </Button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  search: location && location.search ? location.search : '',
                  from: props.location.pathname,
                },
              }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
      {notice && <p>{notice}</p>}
    </div>
  );
}

MoviesPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default MoviesPage;
