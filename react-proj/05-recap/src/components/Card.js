import { useState, useEffect } from 'react';
import styles from '../styles/card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartIcon } from '@fortawesome/free-solid-svg-icons';

export default function Card() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState([]);
  const [isLike, setIsLike] = useState([]);

  // 영화 API 가져오기
  const getMovies = async () => {
    const response =
      await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR
    `);
    const movielist = await response.json();
    setInterval(() => {
      setMovie(movielist.results);
    }, 3000);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // 좋아요 개별 동작
  const handleHeart = (index) => {
    setIsLike(() => {
      const newLike = [...isLike];
      newLike[index] = !newLike[index];
      return newLike;
    });
  };

  return (
    <>
      <h1 className={styles.listTitle}>Now Playing</h1>
      <div className={styles.cardList}>
        {movie.map((value, i) => (
          <div key={value.id} className={styles.cardBox}>
            <div className={styles.cardPoster}>
              <img
                src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
                alt=""
              />
              <div className={styles.heartBox}>
                <FontAwesomeIcon
                  icon={heartIcon}
                  onClick={() => {
                    handleHeart(i);
                  }}
                  className={`${styles.heart} ${isLike[i] && styles.full}`}
                />
              </div>
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>{value.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
