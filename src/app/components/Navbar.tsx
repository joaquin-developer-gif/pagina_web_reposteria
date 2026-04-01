import { useEffect, useState } from "react";

const categories = ['Tortas', 'Tartas', 'Postres', 'Desayunos'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const hearts = document.querySelectorAll<HTMLElement>('.heart-float');

      hearts.forEach((heart) => {
        const speed = parseFloat(heart.dataset.speed || "1");
        const x = (window.innerWidth / 2 - e.clientX) * speed * 0.02;
        heart.style.setProperty('--mouse-x', `${x}px`);
      });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-300
        ${scrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-lg" 
          : "bg-white/70 backdrop-blur-md"}
        border-b border-pink-100
      `}
    >
      {/* CONTENEDOR */}
      <div className="w-full px-4 md:px-8 h-[64px] md:h-[72px] flex items-center relative">

        {/* CORAZONES */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="heart-float"
              data-speed={(Math.random() * 1.5 + 0.5).toFixed(2)}
            />
          ))}
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-3 items-center w-full relative z-10 h-full">

          {/* LOGO IZQUIERDA */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Mis Delicias"
              className="h-[52px] w-auto object-contain transition hover:scale-105 cursor-pointer"
            />
          </div>

          {/* TEXTO CENTRO */}
          <div className="flex justify-center">
            <h1 className="logo-gold text-[1.4rem] md:text-[1.6rem] select-none">
              Mis Delicias
            </h1>
          </div>

          {/* MENU DERECHA */}
          <ul className="hidden md:flex items-center gap-8 justify-end pr-2">
            {categories.map((category) => (
              <li key={category} className="group relative">
                <a
                  href={`#${category.toLowerCase()}`}
                  className="text-base md:text-lg font-medium text-gray-700 transition group-hover:text-pink-500"
                >
                  {category}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* BOTON MOBILE */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2"
            >
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </button>
          </div>

        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 shadow-md">
          <ul className="flex flex-col items-center py-4 gap-4">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href={`#${category.toLowerCase()}`}
                  className="text-lg text-gray-700 hover:text-pink-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}