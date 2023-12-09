import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="logo">Router Study</div>
        <nav>
          <div>
            {/* a 태그 : 새로고침 하면서 페이지 이동 */}
            {/* Link 컴포넌트 : 컴포넌트만 변경(페이지 새로고침 X) */}
            <Link to="/">HOME</Link>
          </div>
          <div>
            {/* <a href="/products">a 프로덕트</a> */}
            <Link to="/products">PRODUCT</Link>
          </div>
          <div>
            <Link to="/photos">PHOTO</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
