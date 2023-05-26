import { movieCast } from '../../services/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IMAGE_URL, PLACEHOLDER } from '../../utilits/utilits';
import { CastList, CastItem } from './Cast.styled.jsx';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(movieId);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await movieCast(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <CastList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <CastItem key={id}>
              <img
                src={`${
                  profile_path
                    ? IMAGE_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </CastItem>
          ))}
        </CastList>
      }
    </>
  );
};
export default Cast;
