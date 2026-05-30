import { motion } from "motion/react";
import { Paintbrush, Sparkles, Shield, Star, CheckCircle, Clock, MapPin, Phone, Mail } from "lucide-react";

// URL für das Hero-Bild
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c2321] font-sans overflow-x-hidden selection:bg-[#d4a373] selection:text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="font-serif text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Paintbrush className="w-6 h-6 text-[#d4a373]" />
          <span>Farbwerk.</span>
        </div>
        <div className="hidden lg:flex space-x-10 text-sm font-medium opacity-80">
          <a href="#philosophie" className="hover:text-[#d4a373] transition-colors">Qualität</a>
          <a href="#leistungen" className="hover:text-[#d4a373] transition-colors">Leistungen</a>
          <a href="#projekte" className="hover:text-[#d4a373] transition-colors">Projekte</a>
          <a href="#bewertungen" className="hover:text-[#d4a373] transition-colors">Referenzen</a>
        </div>
        <div>
          <a 
            href="#kontakt"
            className="px-6 py-2.5 bg-[#1c2321] text-white rounded-full text-sm font-medium hover:bg-[#d4a373] transition-colors"
          >
            Anfrage senden
          </a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="px-6 mt-16 md:mt-24 mb-16 max-w-5xl mx-auto text-center">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-8 flex flex-col items-center">
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl md:text-[5.5rem] leading-[1.05] tracking-tight text-[#1c2321]"
            >
              Räume neu denken. <br />Perfektion anstrich.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl opacity-70 max-w-3xl font-light mx-auto leading-relaxed"
            >
              Ihr Meisterbetrieb für exklusive Malerarbeiten, kreative Wandgestaltung und präzise Fassadenanstriche. Wir bringen Farbe in Ihr Leben – sauber, pünktlich und in Manufaktur-Qualität.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-6 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
               <a 
                 href="#kontakt"
                 className="bg-[#d4a373] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#1c2321] transition-colors text-center shadow-sm"
               >
                 Kostenlose Beratung
               </a>
               <a 
                 href="#leistungen" 
                 className="border border-[#1c2321] px-8 py-3.5 rounded-full text-base font-medium hover:bg-[#1c2321] hover:text-white transition-colors text-center"
               >
                 Unsere Leistungen
               </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Hero Image */}
        <section id="projekte" className="px-6 mb-32 max-w-[1200px] mx-auto">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-sm relative group"
           >
              <img
                 src={HERO_IMAGE_URL}
                 alt="Exklusive Malerarbeiten und Raumgestaltung"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
           </motion.div>
           <div className="text-center mt-6 text-sm font-medium opacity-50 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-[#d4a373]" /> Meisterbetrieb Farbwerk · Handwerksqualität, die überzeugt
           </div>
        </section>

        {/* PHILOSOPHIE */}
        <section id="philosophie" className="bg-white py-32 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Das Farbwerk-Versprechen</h2>
              <p className="opacity-70 max-w-2xl mx-auto text-lg font-light">
                Kreativität trifft Präzision. Wir stehen für sauberes Handwerk, langlebige Materialien und eine reibungslose Umsetzung Ihrer Wohnträume.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <FeatureCard icon={<Paintbrush className="w-6 h-6 text-[#d4a373]" />} title="Saubere Ausführung" desc="Schluss mit Renovierungschaos. Wir schützen Ihre Möbel, arbeiten absolut sauber und hinterlassen Ihre Räume jeden Tag besenrein." />
              <FeatureCard icon={<Clock className="w-6 h-6 text-[#d4a373]" />} title="Pünktlich & Zuverlässig" desc="Fixe Termine sind bei uns Gesetz. Wir starten pünktlich zum vereinbarten Zeitpunkt und schließen Ihr Projekt garantiert im Zeitrahmen ab." />
              <FeatureCard icon={<Sparkles className="w-6 h-6 text-[#d4a373]" />} title="Premium-Materialien" desc="Für Ihre Wände nutzen wir ausschließlich hochwertige, emissionsfreie Farben namhafter Hersteller – für ein gesundes Raumklima." />
            </div>
          </div>
        </section>

        {/* LEISTUNGEN */}
        <section id="leistungen" className="py-32 px-6 max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-bold tracking-widest uppercase text-[#d4a373] mb-4 block">Leistungsspektrum</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Präzision für Innen & Außen</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LeistungsCard title="Maler- & Lackierarbeiten" desc="Klassische Decken- und Wandanstriche, Lackieren von Türen, Fenstern, Fußleisten und Heizkörpern." />
            <LeistungsCard title="Exklusive Wandgestaltung" desc="Moderne Spachteltechniken, Betonoptik, edle Metalliceffekte oder stilvolle Akzentwände." />
            <LeistungsCard title="Tapezierarbeiten" desc="Fachgerechtes Anbringen von Vliestapeten, Mustertapeten, Fototapeten oder robustem Glasgewebe." />
            <LeistungsCard title="Fassadenanstrich" desc="Wertschonende Fassadenrenovierung inklusive Reinigung, Rissausbesserung und wetterfestem Schutzanstrich." />
            <LeistungsCard title="Altbausanierung" desc="Fachgerechte Aufbereitung alter Untergründe, Putzausbesserungen und stilvolle Renovierung." />
            <LeistungsCard title="Schimmelbeseitigung" desc="Nachhaltige Analyse und gründliche Sanierung von Feuchtigkeitsschäden." />
          </div>
        </section>

        {/* KONTAKT / CTA */}
        <section id="kontakt" className="px-6 my-32">
          <div className="bg-[#1c2321] text-[#faf9f6] py-24 px-8 rounded-[40px] md:rounded-[60px] max-w-[1300px] mx-auto relative overflow-hidden">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6 text-left">
                <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">Lust auf frische Farbe?</h2>
                <p className="text-[#faf9f6]/70 text-lg font-light leading-relaxed">
                   Egal ob ein einzelnes Zimmer oder ein komplettes Gebäude – wir beraten Sie unverbindlich vor Ort und erstellen Ihnen ein transparentes Angebot.
                </p>
                <div className="space-y-3 pt-4 text-sm md:text-base opacity-80 font-light">
                  <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#d4a373]" /> Musterstraße 12, 38162 Cremlingen</p>
                  <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#d4a373]" /> (05306) 123456</p>
                  <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#d4a373]" /> info@malerbetrieb-farbwerk.de</p>
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-[30px] border border-white/10 text-center backdrop-blur-sm space-y-6">
                <h3 className="font-serif text-2xl">Jetzt Angebot anfordern</h3>
                <a href="mailto:info@malerbetrieb-farbwerk.de" className="w-full bg-[#d4a373] hover:bg-white hover:text-[#1c2321] text-white py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                  <Mail className="w-5 h-5" /> E-Mail senden
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-[30px] bg-[#faf9f6] border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="w-14 h-14 rounded-full bg-[#d4a373]/10 flex items-center justify-center mb-6">{icon}</div>
      <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
      <p className="opacity-70 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function LeistungsCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 text-[#d4a373] mb-4">
        <CheckCircle className="w-5 h-5" />
        <h3 className="font-serif text-lg font-medium text-[#1c2321]">{title}</h3>
      </div>
      <p className="opacity-70 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  );
}
