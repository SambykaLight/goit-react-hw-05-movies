import { useState, useEffect } from 'react';
import { movieTrending } from 'services/API';
import {
  Title,
  MovieUl,
  MovieLi,
  ImgPic,
  StyledActiveLink,
} from './HomePage.styled.jsx';
import { IMAGE_URL, PLACEHOLDER } from '../../utilits/utilits';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieTrending('')
    .then(setMovies);
  }, []);

  console.log(movies);

  return (
    <>
      <Title>Check this out... new movies</Title>
      <MovieUl>
        {movies.map(({ id, original_title, poster_path }) => (
          <MovieLi key={id}>
            <ImgPic
              src={`${
                poster_path
                  ? IMAGE_URL + poster_path
                  : PLACEHOLDER + '?text=' + original_title
              }`}
              alt={original_title}
            />
            <StyledActiveLink to={`/movies/${id}`}>
              {original_title}
            </StyledActiveLink>
          </MovieLi>
        ))}
      </MovieUl>
    </>
  );
}
