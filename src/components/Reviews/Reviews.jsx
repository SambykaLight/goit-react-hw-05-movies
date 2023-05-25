import { movieReviews } from '../../services/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await movieReviews(movieId);
        setReviews(reviews);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>Nothing</h3>
  ) : (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}


