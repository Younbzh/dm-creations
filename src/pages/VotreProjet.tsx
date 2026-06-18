import { useState } from 'react';
import { Check, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

type TypeProjet = 'Sur mesure' | 'Restauration / relooking' | 'Cadeau / objet déco' | 'Professionnel' | 'Autre / Je ne sais pas encore';
type Budget = 'Moins de 500 €' | '500 – 1 500 €' | '1 500 – 5 000 €' | 'Plus de 5 000 €' | 'À définir ensemble';
type Delai = 'Dans le mois' | '1 à 3 mois' | '3 à 6 mois' | 'Pas de délai précis';

interface FormData {
  typeProjet: TypeProjet | '';
  description: string;
  budget: Budget | '';
  delai: Delai | '';
  prenom: string;
  telephone: string;
  email: string;
}

const typesProjet: TypeProjet[] = [
  'Sur mesure',
  'Restauration / relooking',
  'Cadeau / objet déco',
  'Professionnel',
  'Autre / Je ne sais pas encore',
];

const budgets: Budget[] = [
  'Moins de 500 €',
  '500 – 1 500 €',
  '1 500 – 5 000 €',
  'Plus de 5 000 €',
  'À définir ensemble',
];

const delais: Delai[] = [
  'Dans le mois',
  '1 à 3 mois',
  '3 à 6 mois',
  'Pas de délai précis',
];

export default function VotreProjet() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    typeProjet: '',
    description: '',
    budget: '',
    delai: '',
    prenom: '',
    telephone: '',
    email: '',
  });

  const set = (key: keyof FormData, value: string) =>
    setForm(f => ({ ...f, [key]: value }));

  const canNext = () => {
    if (step === 1) return form.typeProjet !== '';
    if (step === 2) return form.description !== '';
    if (step === 3) return form.prenom !== '' && (form.telephone !== '' || form.email !== '');
    return false;
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Projet dmp créations — ${form.typeProjet}`);
    const body = encodeURIComponent([
      `Bonjour Dennis,`,
      ``,
      `Je vous contacte via le site dmp créations pour vous parler d'un projet.`,
      ``,
      `Type de projet : ${form.typeProjet}`,
      ``,
      `Description :`,
      form.description,
      ``,
      `Budget approximatif : ${form.budget || 'Non renseigné'}`,
      `Délai souhaité : ${form.delai || 'Non renseigné'}`,
      ``,
      `Mes coordonnées :`,
      `Prénom : ${form.prenom}`,
      form.telephone ? `Téléphone : ${form.telephone}` : '',
      form.email ? `E-mail : ${form.email}` : '',
    ].filter(line => line !== null).join('\n'));

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const steps = ['Le projet', 'Les détails', 'Vos coordonnées'];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-5 pt-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#C8893A] rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-white" />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">Demande envoyée</p>
          <h2 className="font-display text-4xl font-bold text-[#1C1208] italic mb-6">
            Merci {form.prenom} !
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            Votre message a été envoyé à Dennis. Il revient vers vous rapidement pour en parler.
          </p>
          <div className="space-y-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3 w-full border border-[#1C1208]/15 bg-white text-[#1C1208] py-4 rounded-full font-semibold hover:bg-[#F0E8D8] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center justify-center gap-3 w-full bg-[#1C1208] text-white py-4 rounded-full font-semibold hover:bg-[#C8893A] transition-colors"
            >
              <Mail className="w-5 h-5" />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-28 pb-16 px-5">
      <div className="max-w-2xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8893A] mb-4">Demande de projet</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1C1208] italic">
            Votre projet
          </h1>
          <p className="text-gray-400 mt-3 text-sm">Quelques informations pour que Dennis puisse vous répondre au mieux.</p>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3">
            {steps.map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i + 1 < step ? 'bg-[#C8893A] text-white' :
                  i + 1 === step ? 'bg-[#1C1208] text-white' :
                  'bg-[#F0E8D8] text-gray-400'
                }`}>
                  {i + 1 < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-[10px] uppercase tracking-wide hidden sm:block ${
                  i + 1 === step ? 'text-[#1C1208] font-semibold' : 'text-gray-400'
                }`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-[#F0E8D8] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C8893A] rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Étape 1 — Type de projet */}
        {step === 1 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1C1208] italic mb-8">
              Quel type de projet ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {typesProjet.map(type => (
                <button
                  key={type}
                  onClick={() => set('typeProjet', type)}
                  className={`text-left px-6 py-5 rounded-2xl border-2 font-medium transition-all ${
                    form.typeProjet === type
                      ? 'border-[#C8893A] bg-[#C8893A]/5 text-[#1C1208]'
                      : 'border-[#F0E8D8] bg-white text-gray-600 hover:border-[#C8893A]/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Étape 2 — Détails */}
        {step === 2 && (
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold text-[#1C1208] italic">
              Décrivez votre projet
            </h2>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Description *
              </label>
              <textarea
                rows={5}
                placeholder="Ex. : je souhaite un dressing sur mesure pour une alcôve de 1,80 m × 2,20 m. J'aimerais y intégrer des tiroirs en bas et des étagères en haut…"
                value={form.description}
                onChange={e => set('description', e.target.value)}
                className="w-full border-2 border-[#F0E8D8] rounded-2xl px-5 py-4 text-[#1C1208] focus:border-[#C8893A] outline-none transition-colors resize-none bg-white text-sm leading-relaxed"
              />
              <p className="text-gray-400 text-xs mt-2">Partagez vos contraintes, vos envies, vos dimensions si vous les connaissez — rien n'est trop vague pour démarrer !</p>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3">
                Budget approximatif
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {budgets.map(b => (
                  <button
                    key={b}
                    onClick={() => set('budget', b)}
                    className={`text-left px-5 py-3.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      form.budget === b
                        ? 'border-[#C8893A] bg-[#C8893A]/5 text-[#1C1208]'
                        : 'border-[#F0E8D8] bg-white text-gray-500 hover:border-[#C8893A]/50'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3">
                Délai souhaité
              </label>
              <div className="grid grid-cols-2 gap-2">
                {delais.map(d => (
                  <button
                    key={d}
                    onClick={() => set('delai', d)}
                    className={`text-left px-5 py-3.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      form.delai === d
                        ? 'border-[#C8893A] bg-[#C8893A]/5 text-[#1C1208]'
                        : 'border-[#F0E8D8] bg-white text-gray-500 hover:border-[#C8893A]/50'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Étape 3 — Coordonnées */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#1C1208] italic">
              Pour vous recontacter
            </h2>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Votre prénom *
              </label>
              <input
                type="text"
                placeholder="Marie"
                value={form.prenom}
                onChange={e => set('prenom', e.target.value)}
                className="w-full border-2 border-[#F0E8D8] rounded-xl px-4 py-3 text-[#1C1208] focus:border-[#C8893A] outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                placeholder="06 XX XX XX XX"
                value={form.telephone}
                onChange={e => set('telephone', e.target.value)}
                className="w-full border-2 border-[#F0E8D8] rounded-xl px-4 py-3 text-[#1C1208] focus:border-[#C8893A] outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="vous@exemple.fr"
                value={form.email}
                onChange={e => set('email', e.target.value)}
                className="w-full border-2 border-[#F0E8D8] rounded-xl px-4 py-3 text-[#1C1208] focus:border-[#C8893A] outline-none transition-colors bg-white"
              />
            </div>
            <p className="text-xs text-gray-400">Au moins un moyen de contact (téléphone ou e-mail) est requis.</p>

            {/* Récap */}
            <div className="bg-white border border-[#F0E8D8] rounded-2xl p-6 mt-4">
              <p className="text-xs uppercase tracking-widest text-[#C8893A] mb-4">Récapitulatif</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400">Type</span>
                  <span className="font-medium text-[#1C1208]">{form.typeProjet}</span>
                </div>
                {form.budget && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Budget</span>
                    <span className="font-medium text-[#1C1208]">{form.budget}</span>
                  </div>
                )}
                {form.delai && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Délai</span>
                    <span className="font-medium text-[#1C1208]">{form.delai}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation étapes */}
        <div className="flex justify-between mt-10 gap-4">
          {step > 1 ? (
            <button
              onClick={() => setStep(s => s - 1)}
              className="border-2 border-[#F0E8D8] text-gray-500 px-8 py-4 rounded-full font-semibold hover:border-gray-300 transition-colors"
            >
              Retour
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={!canNext()}
              className="bg-[#1C1208] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C8893A] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Continuer
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canNext()}
              className="flex items-center gap-3 bg-[#C8893A] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B57A2E] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Mail className="w-5 h-5" />
              Envoyer à Dennis
            </button>
          )}
        </div>

        {/* Contact direct */}
        <div className="mt-12 pt-10 border-t border-[#F0E8D8] text-center">
          <p className="text-gray-400 text-sm mb-4">Vous préférez appeler directement ?</p>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 font-semibold text-[#1C1208] hover:text-[#C8893A] transition-colors"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
