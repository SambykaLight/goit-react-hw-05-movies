
import {movieCast} from '../../services/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { IMAGE_URL, PLACEHOLDER } from '../../utilits/utilits';



export function Cast() {

  const {movieId} = useParams();
  const [cast, setCast] = useState([]);
  console.log(movieId);


  useEffect (() =>{
    const fetchCast = async () =>{
      try{
        const cast = await movieCast(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
    },[movieId]);
    

  return (
    <>
    {
      <ul>
        {
           cast.map(({id, profile_path, original_name, character}) => (
            <li key={id}>
              <img src={`${
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
            </li>
          ))}
  
      </ul>
    }
    </>
  )
}
