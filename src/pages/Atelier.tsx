import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Atelier() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#1C1208]">
        <img
          src="/dmp-creations-Dennis-2.jpeg"
          alt="Dennis Potter dans son atelier"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208]/90 via-[#1C1208]/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 pb-16 w-full">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">Menuisier-ébéniste & philosophe</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white italic leading-tight">
            Dennis Potter
          </h1>
          <p className="text-white/50 mt-4 max-w-sm text-sm leading-relaxed">
            L'atelier, le bois, la vision — l'univers dmp créations
          </p>
        </div>
      </section>

      {/* Histoire & philosophie */}
      <section className="bg-[#FAF7F2] py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-6">Mon histoire</p>
            {siteConfig.about.content.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">
                {paragraph}
              </p>
            ))}
            <div className="flex gap-8 mt-8">
              {siteConfig.about.stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-3xl font-bold text-[#C8893A] italic">{stat.number}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div className="bg-[#1C1208] rounded-2xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-6">Mes valeurs</p>
            <div className="space-y-6">
              {siteConfig.about.values.map((value, i) => (
                <div key={i} className={i < siteConfig.about.values.length - 1 ? 'pb-6 border-b border-white/10' : ''}>
                  <h3 className="font-display text-base font-bold text-white italic mb-2">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="bg-[#F0E8D8] py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-display text-2xl md:text-3xl text-[#1C1208] italic leading-relaxed mb-6">
            "{siteConfig.about.quote}"
          </blockquote>
          <p className="text-gray-400 text-sm">— {siteConfig.about.quoteAuthor}</p>
        </div>
      </section>

      {/* L'atelier */}
      <section className="bg-[#FAF7F2] py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-5">Le repaire</p>
              <h2 className="font-display text-4xl font-bold text-[#1C1208] italic mb-6 leading-tight">
                {siteConfig.atelier.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                {siteConfig.atelier.description}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city} — {siteConfig.contact.address.region}
              </p>
              <p className="text-gray-400 text-xs mt-2">{siteConfig.contact.atelierNote}</p>
            </div>
            <div className="relative aspect-[4/3] bg-[#1C1208] rounded-2xl overflow-hidden">
              <img
                src="/dmp-creations-etabli-e1733245591178.jpeg"
                alt="L'établi de l'atelier dmp créations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Vidéo Vimeo */}
          <div className="mb-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-6 text-center">L'atelier en vidéo</p>
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#1C1208]" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/1050015710?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="dmp créations — l'atelier"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Le bois */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] bg-[#1C1208] rounded-2xl overflow-hidden md:order-1">
              <img
                src="/Niche-musicale.jpeg"
                alt="Niche musicale dmp créations — bois massif et pierre"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:order-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-5">L'atelier & le bois</p>
              <div className="bg-[#F0E8D8] rounded-2xl p-6 mb-6">
                <p className="text-[#1C1208] italic text-lg font-display leading-relaxed">
                  {siteConfig.atelier.proverb}
                </p>
                <p className="text-gray-400 text-xs mt-2">{siteConfig.atelier.proverbNote}</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">{siteConfig.atelier.woodQuote}</p>
              <p className="text-gray-500 leading-relaxed text-sm">{siteConfig.atelier.woodQuote2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Essences de bois */}
      <section className="bg-[#1C1208] py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-10 text-center">Essences de bois</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {siteConfig.atelier.essences.map((essence, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-5">
                <h3 className="font-display text-base font-bold text-white italic mb-1">{essence.name}</h3>
                <p className="text-white/40 text-xs">{essence.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages complets */}
      <section className="bg-[#FAF7F2] py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">Témoignages</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1208] italic">
              {siteConfig.reviews.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.reviews.list.map((review, i) => (
              <div key={i} className="bg-white border border-[#F0E8D8] rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C8893A] text-[#C8893A]" />
                  ))}
                </div>
                <p className="text-gray-500 leading-relaxed mb-6 italic text-sm">"{review.text}"</p>
                <div className="pt-4 border-t border-[#F0E8D8]">
                  <p className="font-semibold text-[#1C1208] text-sm">{review.name}</p>
                  {review.role && <p className="text-xs text-gray-400 mt-0.5">{review.role}</p>}
                  <p className="text-xs text-[#C8893A] mt-1">{review.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-6 text-center">FAQ</p>
          <h2 className="font-display text-4xl font-bold text-[#1C1208] italic mb-12 text-center">
            {siteConfig.faq.title}
          </h2>

          <div className="divide-y divide-[#F0E8D8]">
            {siteConfig.faq.questions.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-display font-bold italic text-[#1C1208] text-lg">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#C8893A] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="pb-6 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1C1208] py-20 text-center">
        <div className="max-w-md mx-auto px-5">
          <h2 className="font-display text-4xl font-bold text-white italic mb-6">
            Un projet en tête ?
          </h2>
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
