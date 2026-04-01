import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselImages = [
  { url: '/carousel/bandeja1.jpeg', alt: 'Bandeja dulce' },
  { url: '/carousel/imagen201.jpeg', alt: 'Producto 1' },
  { url: '/carousel/imagen202.jpeg', alt: 'Producto 2' },
  { url: '/carousel/imagen203.jpeg', alt: 'Producto 3' },
  { url: '/carousel/imagen204.jpeg', alt: 'Producto 4' },
  { url: '/carousel/imagen205.jpeg', alt: 'Producto 5' }
];

export function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: "ease-in-out",
    pauseOnHover: true
  };

  return (
    <section className="w-full pt-[64px] md:pt-[72px] pb-16 md:pb-24">
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index} className="pb-10">
            <div className="relative w-full h-[260px] md:h-[360px] lg:h-[460px] overflow-hidden rounded-xl">

              {/* 🌫️ FONDO SUAVE */}
              <img
                src={image.url}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-20"
              />

              {/* 🖼️ IMAGEN PRINCIPAL */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover scale-95 transition-transform duration-700 ease-in-out"
              />

              {/* ✨ OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}