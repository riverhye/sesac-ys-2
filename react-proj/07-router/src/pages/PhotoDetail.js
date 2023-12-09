import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PhotoDetail() {
  const [photo, setPhoto] = useState(null);

  const { id } = useParams();
  const getPhoto = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    const resPhoto = await res.json();
    setPhoto(resPhoto);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <>
      <ul>
        {photo ? (
          <>
            <li>이미지 번호 : {photo.id}</li>
            <li>이미지 제목 : {photo.title}</li>
            <li>
              <div>
                이미지 : <img src={`${photo.url}`} alt="이미지" />
              </div>
            </li>
          </>
        ) : (
          'Loading...'
        )}
      </ul>
    </>
  );
}
