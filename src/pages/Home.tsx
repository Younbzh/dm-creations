import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const visualLinks = [
  {
    label: 'Prestations',
    sub: 'Sur mesure · Restauration · Cadeaux',
    photo: '/Niche-musicale.jpeg',
    to: '/prestations',
  },
  {
    label: 'Galerie',
    sub: 'Projets en images',
    photo: '/Relooking-chevets-1.jpeg',
    to: '/galerie',
  },
  {
    label: 'Votre projet',
    sub: 'Demande de devis',
    photo: '/dmp-creations-etabli-e1733245591178.jpeg',
    to: '/votre-projet',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden bg-[#1C1208]">
        <img
          src="/IMG_3778.jpeg"
          alt="Lampe Blonde Snol — création originale dmp créations"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208]/95 via-[#1C1208]/40 to-[#1C1208]/10" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 pb-16 md:pb-28 w-full">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-6">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.92] mb-8">
            Des meubles<br />
            et objets qui<br />
            <em>vous ressemblent</em>
          </h1>
          <p className="text-white/55 text-base md:text-lg mb-10 max-w-sm leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/votre-projet"
              className="bg-[#C8893A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B57A2E] transition-colors"
            >
              {siteConfig.hero.cta.primary}
            </Link>
            <Link
              to="/galerie"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {siteConfig.hero.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* 3 blocs visuels */}
      <section className="grid md:grid-cols-3">
        {visualLinks.map(({ label, sub, photo, to }) => (
          <Link
            key={to}
            to={to}
            className="relative overflow-hidden group text-left block"
            style={{ aspectRatio: '4/5' }}
          >
            <div className="absolute inset-0 bg-[#1C1208]" />
            <img
              src={photo}
              alt={label}
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208]/90 via-[#1C1208]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#C8893A] mb-2">{sub}</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white italic">{label}</h2>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#C8893A] group-hover:border-transparent transition-all duration-300 flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Mini about */}
      <section className="bg-[#FAF7F2] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/5] bg-[#1C1208] rounded-2xl overflow-hidden">
              <img
                src="/dmp-creations-Dennis-2.jpeg"
                alt="Dennis Potter dans son atelier"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#1C1208] text-white px-6 py-5 rounded-xl hidden md:block">
              <p className="text-[10px] uppercase tracking-widest text-[#C8893A] mb-1">Diplômé</p>
              <p className="font-display text-xl font-bold italic">CAP 2025</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-6">Qui suis-je ?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1208] leading-tight mb-8">
              20 ans de bois,<br />
              <em>une passion</em><br />
              devenue métier.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              {siteConfig.about.content[0]}
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              {siteConfig.about.content[1]}
            </p>
            <Link
              to="/latelier"
              className="inline-flex items-center gap-2 text-[#1C1208] font-semibold border-b-2 border-[#1C1208] pb-0.5 hover:text-[#C8893A] hover:border-[#C8893A] transition-colors"
            >
              L'atelier & Dennis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-[#1C1208] py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">Témoignages</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white italic">
              {siteConfig.reviews.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.reviews.list.slice(0, 3).map((review, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C8893A] text-[#C8893A]" />
                  ))}
                </div>
                <p className="text-white/60 leading-relaxed mb-6 italic text-sm">"{review.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="font-semibold text-white text-sm">{review.name}</span>
                  <span className="text-xs text-white/25">{review.project}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/latelier"
              className="text-sm text-white/40 hover:text-[#C8893A] transition-colors inline-flex items-center gap-2"
            >
              Voir tous les témoignages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="bg-[#FAF7F2] py-24 text-center">
        <div className="max-w-xl mx-auto px-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-5">Artisan du bois · Trévé</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1208] italic mb-6">
            {siteConfig.finalCTA.title}
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            {siteConfig.finalCTA.subtitle}
          </p>
          <Link
            to="/votre-projet"
            className="bg-[#C8893A] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#B57A2E] transition-colors inline-block"
          >
            {siteConfig.finalCTA.buttonText}
          </Link>
        </div>
      </section>
    </>
  );
}
