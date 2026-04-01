import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroCarousel } from "./components/HeroCarousel";
import { ProductSection } from "./components/ProductSection";
import { WhatsAppButton } from "./components/WhatsAppButton";

type Product = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePosition: "left" | "right";
};

export default function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavHeight(navbar.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const products: Product[] = [
    {
      id: "tortas",
      title: "Tortas Personalizadas",
      description:
        "Creamos tortas únicas para tus celebraciones más especiales...",
      imageUrl: "/productos/torta1.jpeg",
      imagePosition: "left",
    },
    {
      id: "cupcakes",
      title: "Cupcakes Artesanales",
      description:
        "Nuestros cupcakes son perfectos para cualquier ocasión...",
      imageUrl: "/productos/tarta1.jpeg",
      imagePosition: "right",
    },
    {
      id: "postres",
      title: "Postres Deliciosos",
      description:
        "Descubre nuestra selección de postres gourmet...",
      imageUrl: "/productos/postres1.jpeg",
      imagePosition: "left",
    },
    {
      id: "desayunos",
      title: "Desayunos Personalizados",
      description:
        "Desayunos para sorprender a las personas más queridas...",
      imageUrl: "/productos/desayuno1.jpeg",
      imagePosition: "right",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-rose-50 via-white to-rose-100">
      
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <main
        style={{ paddingTop: navHeight }}
        className="space-y-20 flex-grow"
      >
        {/* CAROUSEL */}
        <div className="mb-20 md:mb-28">
          <HeroCarousel />
        </div>

        {/* PRODUCTOS */}
        <section className="divide-y divide-pink-100">
          {products.map((product) => (
            <ProductSection key={product.id} {...product} />
          ))}
        </section>
      </main>

      {/* FOOTER */}
    <footer className="bg-white/80 backdrop-blur-md border-t border-pink-100 w-full">
  <div className="w-full px-4 py-20 flex flex-col items-center justify-center text-center">
    
    <h3 className="text-3xl font-semibold text-pink-500 mb-4">
      "Mis Delicias"
    </h3>

    <p className="text-gray-600 text-lg mb-2">
      Tortas • Postres • Desayunos personalizados
    </p>

    <p className="text-gray-500 max-w-2xl mb-6">
      Creamos momentos dulces para tus ocasiones más especiales. 
      Cada producto está hecho con amor, dedicación y los mejores ingredientes.
    </p>

    <div className="w-20 h-[2px] bg-pink-300 rounded-full mb-4"></div>

    <p className="text-gray-400 text-sm">
      © 2026 Todos los derechos reservados
    </p>

  </div>
</footer>

      {/* BOTÓN WHATSAPP */}
      <WhatsAppButton />
    </div>
  );
}