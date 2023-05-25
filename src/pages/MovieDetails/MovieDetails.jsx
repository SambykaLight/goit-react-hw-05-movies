import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { movieById } from '../../services/API';
import { IMAGE_URL, PLACEHOLDER } from '../../utilits/utilits';
import {
  MovieBox,
  MovieDescription,
  Details,
  TitleBox,
  Owervies,
  GenerList,
  GenerItems,
  UnderList,
  StyledActiveLink,
} from './MovieDetails.styled.jsx';

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
      <MovieBox>
        <img
          src={`${
            poster_path
              ? IMAGE_URL + poster_path
              : PLACEHOLDER + '?text=' + original_title
          }`}
          alt=""
        />
        <MovieDescription>
          <TitleBox>{movie.original_title}</TitleBox>
          <Details>Rating: {Math.round(movie.vote_average)}</Details>
          <Details>Overview</Details>
          <Owervies>{movie.overview}</Owervies>
          <Details>Genres</Details>
          <GenerList>
            {movie.genres?.map(genre => (
              <GenerItems key={genre.id}>{genre.name}</GenerItems>
            ))}
          </GenerList>
        </MovieDescription>
      </MovieBox>

      <UnderList>
        <StyledActiveLink to="cast">cast</StyledActiveLink>
        <StyledActiveLink to="reviews">reviews</StyledActiveLink>
      </UnderList>
      <Outlet />
    </div>
  );
}
