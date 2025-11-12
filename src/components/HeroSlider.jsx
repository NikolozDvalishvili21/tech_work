import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { animate, spring } from "animejs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const sliders = [
    {
      id: 1,
      title: "Explore React!",
      subtitle: "React/Tailwind/Swiper",
      bg: "bg-yellow-300",
    },
    {
      id: 2,
      title: "Build Clean Component-Based UI",
      subtitle: "Reusable Components with shadcn/ui",
      bg: "bg-red-500",
    },
    {
      id: 3,
      title: "Add Motion with anime.js",
      subtitle: "Create smooth, subtle animations",
      bg: "bg-green-500",
    },
  ];

  const animateSlideText = () => {
    animate(".slide-text", {
      opacity: [0, 1],
      scale: [
        { to: 1.15, ease: "inOut(3)", duration: 300 },
        { to: 1, ease: spring({ bounce: 0.5 }) },
      ],
      translateY: [20, 0],
      duration: 1000,
    });
  };

  useEffect(() => {
    animateSlideText();
  }, []);

  return (
    <section className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
        }}
        onSlideChangeTransitionStart={() => animateSlideText()}
        className="h-full"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`h-full flex flex-col items-center justify-center text-center text-white ${slide.bg}`}
            >
              <h2 className="slide-text text-5xl font-bold mb-3 drop-shadow-md">
                {slide.title}
              </h2>
              <p className="slide-text text-xl opacity-90">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
