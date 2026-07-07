import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function ContactPage() {
  return (
    <>
      <div className="slider-container">
        {/* Все настройки пишем внутрь объекта options */}
        <Splide
          options={{
            type: 'loop',       // Бесконечный цикл прокрутки
            padding: '5rem',    // Отступы по бокам, чтобы было видно соседние слайды
            gap: '1rem',        // Расстояние между слайдами
            perPage: 1,         // Сколько слайдов показывать одновременно
            arrows: true,       // Показывать стрелки (true по умолчанию)
            pagination: true,   // Показывать точки внизу (true по умолчанию)
          }}
          aria-label="Мой первый слайдер"
        >
          <SplideSlide>
            {/* Добавил фиксированные размеры к ссылкам картинок, чтобы они отображались корректно */}
            <img src="https://picsum.photos" alt="Слайд 1" style={{ width: '100%', borderRadius: '8px' }} />
          </SplideSlide>

          <SplideSlide>
            <img src="https://picsum.photos" alt="Слайд 2" style={{ width: '100%', borderRadius: '8px' }} />
          </SplideSlide>

          <SplideSlide>
            <img src="https://picsum.photos" alt="Слайд 3" style={{ width: '100%', borderRadius: '8px' }} />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
}

export default ContactPage;