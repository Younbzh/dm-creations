import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Prestations() {
  return (
    <>
      {/* En-tête */}
      <div className="pt-36 pb-16 bg-[#FAF7F2] text-center px-5">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">Ce que je fais</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1C1208] italic mb-4">
          Les prestations
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Trois façons de travailler ensemble — toujours sur mesure, toujours pour vous
        </p>
      </div>

      {/* Trois catégories — alternées photo / texte */}
      {siteConfig.prestations.list.map((item, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={item.id}
            className={`grid md:grid-cols-2 min-h-[70vh] ${i < siteConfig.prestations.list.length - 1 ? 'border-b border-[#F0E8D8]' : ''}`}
          >
            {/* Visuel */}
            <div className={`relative overflow-hidden bg-[#1C1208] ${isEven ? 'md:order-1' : 'md:order-2'}`}
              style={{ minHeight: '320px' }}>
              <img
                src={item.photo}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1C1208]/30" />
              <div className="absolute top-6 left-6">
                <span className="text-3xl">{item.emoji}</span>
              </div>
            </div>

            {/* Texte */}
            <div className={`bg-[#FAF7F2] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-5">
                {`0${i + 1}`}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1C1208] italic mb-5 leading-tight">
                {item.name}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
                {item.description}
              </p>
              <ul className="space-y-3 mb-10">
                {item.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#C8893A] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/votre-projet"
                className="self-start bg-[#1C1208] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C8893A] transition-colors"
              >
                Parler de mon projet
              </Link>
            </div>
          </section>
        );
      })}

      {/* Professionnels */}
      <section className="bg-[#F0E8D8] py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-5">Professionnels</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1C1208] italic mb-6 leading-tight">
              Décorateurs, architectes<br />& professionnels
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Les prestations de dmp créations s'adressent également aux professionnels à la recherche de pièces uniques et fonctionnelles.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Meubles sur mesure pour cabinets médicaux, bars d\'accueil, bureaux',
                'Mobilier \'signature\' pour l\'hôtellerie, la restauration, les salons de réception',
                'Luminaires et objets de décoration exclusifs',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-[#C8893A] rounded-full flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/votre-projet"
              className="inline-flex items-center gap-2 text-[#1C1208] font-semibold border-b-2 border-[#1C1208] pb-0.5 hover:text-[#C8893A] hover:border-[#C8893A] transition-colors"
            >
              Contactez-moi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-[#1C1208] rounded-2xl p-8 md:p-10">
            <p className="text-[#C8893A] text-xs uppercase tracking-widest mb-6">Citation</p>
            <blockquote className="font-display text-xl text-white italic leading-relaxed mb-6">
              "{siteConfig.about.quote}"
            </blockquote>
            <p className="text-white/40 text-sm">— {siteConfig.about.quoteAuthor}</p>
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="bg-[#FAF7F2] py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">De l'idée au produit fini</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1208] italic">
              {siteConfig.processus.title}
            </h2>
            <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">{siteConfig.processus.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.processus.steps.map((step, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1C1208] text-[#C8893A] rounded-full font-display font-bold text-lg mb-4 md:mb-5">
                  {step.number}
                </div>
                <h3 className="font-display text-base font-bold text-[#1C1208] italic mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bas */}
      <section className="bg-[#1C1208] py-24 text-center">
        <div className="max-w-xl mx-auto px-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-5">Démarrons ensemble</p>
          <h2 className="font-display text-4xl font-bold text-white italic mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-white/40 mb-10 text-sm leading-relaxed">
            Contactez-moi — je prends le temps de cerner vos attentes avant de vous proposer une solution sur mesure.
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
