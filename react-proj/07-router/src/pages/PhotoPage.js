import { useEffect, useState } from 'react';

export default function PhotoPage() {
  const [photo, setPhoto] = useState(null);
  const msg = 'Loading...';

  const getPhotos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await res.json();
    setPhoto(photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      {photo ? (
        <>
          {photo.map((value) => (
            <ul key={value.id}>
              <li>이미지 번호 : {value.id}</li>
              <li>이미지 제목 : {value.title}</li>
              <li>
                이미지 :{' '}
                <div>
                  <img src={`${value.url}`} alt="상품 이미지" />
                </div>
              </li>
              <a
                href={`/photo/${value.id}`}
              >{`${value.id}번 상세페이지 이동하기`}</a>
            </ul>
          ))}
        </>
      ) : (
        msg
      )}
    </>
  );
}
