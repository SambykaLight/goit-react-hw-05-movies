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
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    movieTrending('').then(setMovies);
  }, []);

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
            <StyledActiveLink to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </StyledActiveLink>
          </MovieLi>
        ))}
      </MovieUl>
    </>
  );
};
export default HomePage;
