import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../prac1.module.css';

const fakePosts = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque',
  },
  {
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
  },
  {
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
  },
  {
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
  },
  {
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
  },
  {
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
  },
];

function PostList() {
  const [post, setPost] = useState([]);
  let getFakePosts;

  axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
    getFakePosts = res.data;
  });

  // 이중에서 10개만 보여주고 싶은데, get 요청으로 비동기 처리해도 순서가 뒤죽박죽 옴
  // 그래서 전체를 순차적으로 받고, 그걸 slice하려고 했음
  // BUT 배열 내 객체인데 콘솔에 찍어보니 undefiend 반환 : console.log(getFakePosts[0]);

  useEffect(() => {
    setTimeout(() => {
      setPost(getFakePosts);
    }, 2000);
    // let time;
    // if (post.length === 0) {
    //   time = setTimeout(() => {
    //     setPost(getFakePosts);
    //   }, 2000);
    // } else {
    //   clearTimeout(time);
    // }
  });

  return (
    <div className={styles.boxContainer}>
      {post.length > 0 ? (
        post.map((val) => (
          <div className={styles.box}>
            <div className={styles.boxTitle}>
              No. {val.id} - {val.title}
            </div>
            <div className="box-body">{val.body}</div>
            <br />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default PostList;
