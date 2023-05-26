import React, { Suspense, useRef } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
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
  GoBack,
} from './MovieDetails.styled.jsx';

const MovieDetails = () => {
  const [movie, setMovie] = useState('null');
  const location = useLocation();
  const { movieId } = useParams();
  const goBackRef = useRef(location.state?.from ?? '/movies');

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
      <GoBack>
        <StyledActiveLink to={goBackRef.current}>Go Back</StyledActiveLink>
      </GoBack>
      <MovieBox>
        <imga
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
        <StyledActiveLink to="cast" state={location.state}>
          cast
        </StyledActiveLink>
        <StyledActiveLink to="reviews" state={location.state}>
          reviews
        </StyledActiveLink>
      </UnderList>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
