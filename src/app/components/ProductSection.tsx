import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/* 💎 TIPADO */
interface ProductSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
  id?: string;
}

export function ProductSection({
  title,
  description,
  imageUrl,
  imagePosition = "left",
  id,
}: ProductSectionProps) {

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  /* 🎬 ANIMACIÓN AL SCROLL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id={id}
      className="mt-24 md:mt-32 pt-8 pb-16 px-4 scroll-mt-24"
    >
      <div className="container mx-auto">

        <div
          ref={ref}
          className={`flex flex-col ${
            imagePosition === "right"
              ? "md:flex-row-reverse"
              : "md:flex-row"
          } items-center gap-10 md:gap-16 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

          {/* 🖼️ IMAGEN */}
          <div className="w-full md:w-1/2">
            <div
              className={`rounded-2xl overflow-hidden shadow-xl transition duration-500
              ${visible ? "scale-100" : "scale-95"}`}
            >
              <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-[240px] md:h-[320px] object-cover transition duration-500 hover:scale-102"
              />
            </div>
          </div>

          {/* 📝 TEXTO */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            <h3 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
              {title}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {description}
            </p>

            {/* 💎 DECORATIVO */}
            <div className="inline-block px-6 py-2 rounded-full bg-pink-100 text-pink-600 font-medium shadow-sm">
              Hecho con amor
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}