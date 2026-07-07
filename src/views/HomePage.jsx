import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../styles/home-page.css";

function HomePage({ height }) {
  return (
    <>
      <div className="hero_section" style={{ height: `calc(100vh - ${height}px)` }}>
        <p className="hero-title">Добро пожаловать на наш сайт!</p>
      </div>
    </>
  );
}

export default HomePage;
