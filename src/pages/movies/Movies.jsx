import { Form, Input, Button } from './Movies.styled';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { movieByQuery } from '../../services/API';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ListFilms, StyledActiveLink } from './Movies.styled';

 const Movies = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const currentQuery = searchParams.get('query') ?? '';
    if (!currentQuery) return;

    const fetchByQuery = async () => {
      try {
        const data = await movieByQuery(currentQuery);
        setMovies(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchByQuery();
  }, [searchParams]);

  const handleInputChange = event => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputSearch.trim() === '') {
      toast.error('Nope, do it again..!');
      return;
    }
    setSearchParams({ query: inputSearch });
    reset();
  };

  

  const reset = () => {
    setInputSearch('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit} setParams={setSearchParams}>
        <Input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={inputSearch}
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>
      </Form>
      {movies.map(({ id, original_title }) => (
        <ListFilms key={id}>
          <StyledActiveLink to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </StyledActiveLink>
        </ListFilms>
      ))}
      <ToastContainer autoClose={3000} />
    </>
  );
};
export default Movies;