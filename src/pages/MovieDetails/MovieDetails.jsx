import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { movieById } from '../../services/API';
import { IMAGE_URL, PLACEHOLDER } from '../../utilits/utilits';
import { Link } from 'react-router-dom';

export function MovieDetails() {
  const [movie, setMovie] = useState('null');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchById = async () => {
      try {
        const data = await movieById(movieId);
        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchById();
  }, [movieId]);

  const { poster_path, original_title } = movie;

  return (
    <div>
      <div>
        <img
          src={`${
            poster_path
              ? IMAGE_URL + poster_path
              : PLACEHOLDER + '?text=' + original_title
          }`}
          alt=""
        />
        <div>
          <h2>{movie.original_title}</h2>
          <h3>Rating: {Math.round(movie.vote_average)}</h3>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <ul>
        <Link to="cast">cast</Link>
        <Link to="reviews">reviews</Link>
      </ul>
      <Outlet />
    </div>
  );
}
