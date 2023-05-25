import { Form, Input, Button } from './Movies.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

export const Movies = ({ onSubmit }) => {
  const [inputSearch, setInputSearch] = useState('');

  const handleInputChange = event => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputSearch.trim() === '') {
      toast.error('Nope, do it again..!');
      return;
    }

    reset();
  };

  const reset = () => {
    setInputSearch('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={inputSearch}
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>
      </Form>
      <ToastContainer autoClose={3000} />
    </>
  );
};
