import { movieReviews } from '../../services/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewList, ReviewItem, Author } from './Reviews.styled';

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
    <ReviewList>
      {reviews.map(({ id, author, content }) => (
        <ReviewItem key={id}>
          <Author>
            <span>Author:</span> {author}
          </Author>
          <p>{content}</p>
        </ReviewItem>
      ))}
    </ReviewList>
  );
}
