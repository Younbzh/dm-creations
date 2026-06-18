import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filtered = activeCategory === 'Tout'
    ? siteConfig.galerie.items
    : siteConfig.galerie.items.filter(item => item.category === activeCategory);

  return (
    <>
      {/* En-tête */}
      <div className="pt-36 pb-16 bg-[#FAF7F2] text-center px-5">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">Réalisations</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1C1208] italic mb-6">
          La galerie
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          {siteConfig.galerie.subtitle}
        </p>
      </div>

      {/* Filtres catégories */}
      <div className="bg-[#FAF7F2] pb-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {siteConfig.galerie.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#1C1208] text-white'
                  : 'bg-white border border-[#F0E8D8] text-gray-500 hover:border-[#C8893A] hover:text-[#C8893A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grille */}
      <section className="bg-[#FAF7F2] pb-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-[#1C1208] cursor-default"
                style={{ aspectRatio: '1/1' }}
              >
                <img
                  src={item.photo}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Placeholder si pas d'image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D2410] to-[#1C1208] -z-0" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208]/85 via-transparent to-transparent" />

                {/* Catégorie badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] uppercase tracking-widest text-[#C8893A] bg-[#1C1208]/70 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Titre */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-sm md:text-base font-bold text-white italic leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-snug hidden md:block">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-20">Aucune réalisation dans cette catégorie pour l'instant.</p>
          )}
        </div>
      </section>

      {/* Note pièces à vendre */}
      <section className="bg-[#F0E8D8] py-14 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-3">À adopter</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {siteConfig.galerie.note}
          </p>
        </div>
      </section>

      {/* CTA bas */}
      <section className="bg-[#1C1208] py-24 text-center">
        <div className="max-w-xl mx-auto px-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-5">
            Votre projet unique vous attend
          </p>
          <h2 className="font-display text-4xl font-bold text-white italic mb-6">
            Vous avez trouvé votre inspiration ?
          </h2>
          <p className="text-white/40 mb-10 text-sm leading-relaxed">
            Le style dmp créations vous plaît ? Discutons de votre projet — je vous proposerai la solution adaptée à vos envies et vos espaces.
          </p>
          <Link
            to="/votre-projet"
            className="bg-[#C8893A] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#B57A2E] transition-colors inline-block"
          >
            Votre projet
          </Link>
        </div>
      </section>
    </>
  );
}
