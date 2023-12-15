import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../prac1.module.css';

function PostList() {
  const [post, setPost] = useState([]);
  const [isMount, setIsMount] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts/'
        );
        const getFakePosts = response.data;
        setPost(getFakePosts.slice(0, 10));
      } catch (err) {
        console.error('fetch Data Err :', err);
      }
    };

    fetchData();

    return () => {
      setLoading(true);
    };
  }, [isMount]);

  const toggleMount = () => setIsMount(!isMount);

  return (
    <div className={styles.wrapper}>
      {isMount ? (
        <>
          <div>
            <button onClick={toggleMount}>포스트 제거</button>
          </div>
          <div className={styles.boxContainer}>
            {post.map((val) => (
              <div key={val.title} className={styles.box}>
                <div className={styles.boxTitle}>
                  No. {val.id} - {val.title}
                </div>
                <div className="box-body">{val.body}</div>
                <br />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={toggleMount}>포스트 생성</button>
          {loading ? <h1>Loading...</h1> : ''}
        </>
      )}
    </div>
  );
}

export default PostList;
