import { CheckCircle2, ArrowRight, Star, Menu } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-brand selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="font-heading text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          {/* Logo Icon Placeholder */}
          <div className="w-8 h-8 border-[3px] border-brand rounded-sm flex items-center justify-center">
            <span className="w-2 h-2 bg-brand inline-block"></span>
          </div>
          MALERMEISTER
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
          <a href="#leistungen" className="hover:text-brand transition-colors">Leistungen</a>
          <a href="#prozess" className="hover:text-brand transition-colors">Ablauf</a>
          <a href="#bewertungen" className="hover:text-brand transition-colors">Referenzen</a>
        </div>
        <button className="hidden md:flex items-center gap-2 bg-brand hover:bg-brand-light text-white px-6 py-3 font-semibold text-sm transition-all shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_rgba(0,0,0,0.3)]">
          Kostenloses Angebot
          <ArrowRight size={16} />
        </button>
        <button className="md:hidden text-white flex items-center justify-center">
          <Menu size={28} />
        </button>
      </nav>

      {/* 1 & 2: Hook & Promise of Value (Hero Section) */}
      <header className="relative w-full h-[90vh] min-h-[600px] flex items-center pt-24">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop" 
            alt="Maler streicht eine Wand" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="uppercase tracking-[0.2em] text-brand font-semibold text-sm mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-brand"></span>
              Neues Leben für Ihre Räume
            </div>
            {/* Hook */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
              Präzision in jedem Pinselstrich.
            </h1>
            {/* Promise of Value */}
            <p className="text-xl text-neutral-300 leading-relaxed max-w-lg mb-10">
              Wir verwandeln Ihre Räume mit exzellenter Handwerkskunst, absoluter Zuverlässigkeit und den hochwertigsten Materialien auf dem Markt. Garantiert sauber und pünktlich.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-brand text-white px-8 py-4 font-semibold text-base flex items-center justify-center gap-2 transition-all hover:bg-brand-light shadow-[4px_4px_0_rgba(255,255,255,1)]">
                 Projekt anfragen
                 <ArrowRight size={18} />
               </button>
               <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-semibold text-base flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                 Unsere Arbeiten
               </button>
            </div>
          </div>

          {/* Abstract Graphic Element inspired by "Daylight" geometric overlapping block */}
          <div className="hidden lg:flex justify-end relative h-full items-center">
             <div className="w-[80%] aspect-[4/5] bg-brand relative shadow-2xl p-8 flex flex-col justify-end translate-y-12">
               <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-white/20 -translate-y-4 translate-x-4"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20"></div>
               <h3 className="font-heading text-3xl text-white font-bold mb-2 relative z-10 leading-tight">Meisterhaft kalkuliert.</h3>
               <p className="text-white/90 text-sm relative z-10 font-medium">Transparente Preise ohne versteckte Kosten.</p>
             </div>
          </div>
        </div>
      </header>

      {/* The Process / Experience Bar (Extremely close to Reference 3) */}
      <section id="prozess" className="w-full bg-black border-b-[8px] border-neutral-900 relative z-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
          {/* Steps */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800 p-8 lg:p-12 gap-8 lg:gap-0">
            {/* Step 1 */}
            <div className="flex items-start gap-4 lg:pr-8">
              <div className="flex flex-col flex-1">
                <div className="h-[4px] w-12 bg-brand mb-6 transition-all duration-300 hover:w-24"></div>
                <h4 className="text-white font-medium text-lg leading-snug">Unverbindlich<br/>Kontaktieren</h4>
              </div>
              <span className="text-transparent [-webkit-text-stroke:2px_#333] text-6xl lg:text-7xl font-heading font-bold tracking-tighter leading-none select-none">
                01.
              </span>
            </div>
            {/* Step 2 */}
            <div className="flex items-start gap-4 lg:px-8 pt-8 md:pt-0">
              <div className="flex flex-col flex-1">
                <div className="h-[4px] w-12 bg-brand mb-6 transition-all duration-300 hover:w-24"></div>
                <h4 className="text-white font-medium text-lg leading-snug">Besprechung des<br/>Vorhabens</h4>
              </div>
              <span className="text-transparent [-webkit-text-stroke:2px_#333] text-6xl lg:text-7xl font-heading font-bold tracking-tighter leading-none select-none">
                02.
              </span>
            </div>
            {/* Step 3 */}
            <div className="flex items-start gap-4 lg:px-8 pt-8 md:pt-0">
              <div className="flex flex-col flex-1">
                <div className="h-[4px] w-12 bg-brand mb-6 transition-all duration-300 hover:w-24"></div>
                <h4 className="text-white font-medium text-lg leading-snug">Angebot &<br/>Umsetzung</h4>
              </div>
              <span className="text-transparent [-webkit-text-stroke:2px_#333] text-6xl lg:text-7xl font-heading font-bold tracking-tighter leading-none select-none">
                03.
              </span>
            </div>
          </div>

          {/* Yellow Experience Block */}
          <div className="bg-brand w-full lg:w-72 xl:w-80 flex flex-col items-center justify-center text-center p-12 text-white shrink-0 min-h-[220px]">
             <span className="font-heading font-bold text-6xl xl:text-7xl tracking-tighter mb-1">15+</span>
             <span className="font-heading uppercase tracking-widest text-sm font-semibold">Jahre Erfahrung</span>
          </div>
        </div>
      </section>

      {/* 3: Details of the Promise (2-3 concrete points) */}
      <section id="leistungen" className="w-full py-24 bg-[#FAFAFA] relative overflow-hidden">
        {/* Background structural lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center opacity-30">
          <div className="w-px h-full bg-neutral-200"></div>
          <div className="w-px h-full bg-neutral-200 mx-32"></div>
          <div className="w-px h-full bg-neutral-200"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             
             {/* Offset Image (Referencing Handwerk24 style) */}
             <div className="relative">
                <div className="absolute top-8 -right-8 w-full h-full bg-neutral-200 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2662&auto=format&fit=crop" 
                  alt="Maler bei der Arbeit" 
                  className="relative z-10 w-full aspect-[4/5] object-cover shadow-xl border-4 border-white"
                />
             </div>

             {/* Content / Points */}
             <div>
                <div className="uppercase tracking-[0.15em] text-brand font-bold text-sm mb-4">
                  Qualifiziert & Erfahren
                </div>
                <h2 className="font-heading text-4xl lg:text-6xl font-bold text-neutral-950 leading-[1.1] tracking-tight mb-8">
                  Unser Fachbereich:<br />Wandveredelung
                </h2>
                
                <div className="bg-white p-8 lg:p-10 shadow-sm border border-neutral-100 mb-8 relative">
                  {/* Decorative top border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
                  
                  <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                    Egal ob die Auffrischung Ihres Wohnzimmers, das fachgerechte Tapezieren ganzer Etagen oder die robuste Beschichtung von Fassaden. Unsere langjährige Erfahrung macht uns zum idealen Partner in allen Angelegenheiten der Raumausstattung.
                  </p>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full border-4 border-brand flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg">Innen- & Außenanstriche</h4>
                        <p className="text-neutral-500 text-sm mt-1">Perfekte Deckkraft und saubere Kanten für ein strahlendes Ergebnis in jedem Raum.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full border-4 border-brand flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg">Hochwertige Tapezierarbeiten</h4>
                        <p className="text-neutral-500 text-sm mt-1">Von Vlies bis Raufaser – wir bringen Mustertapeten präzise und nahtlos auf die Wand.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full border-4 border-brand flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg">Lackierarbeiten & Lasuren</h4>
                        <p className="text-neutral-500 text-sm mt-1">Langlebiger Schutz für Türen, Fenster und Holzelemente mit erstklassigen Lacken.</p>
                      </div>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4: Proof (Social Proof / Testimonials) */}
      <section id="bewertungen" className="w-full py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-neutral-950 mb-6">Das sagen unsere Kunden</h2>
            <p className="text-neutral-500 text-lg">Hunderte erfolgreich abgeschlossene Projekte in der Region. Lassen Sie sich von unser Arbeit überzeugen.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <div className="bg-neutral-50 p-8 border border-neutral-100 flex flex-col h-full">
              <div className="flex gap-1 text-brand mb-6">
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
              </div>
              <p className="text-neutral-700 italic flex-grow mb-8">
                "Pünktlich, extrem sauber und sehr professionell. Das Team hat unser gesamtes Obergeschoss in nur drei Tagen makellos gestrichen. Jederzeit wieder!"
              </p>
              <div className="font-bold text-neutral-900">Familie Müller</div>
              <div className="text-sm text-neutral-500">Innenanstrich Neubau</div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-neutral-950 text-white p-8 border border-neutral-900 flex flex-col h-full relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand flex items-center justify-center">
                 <Star size={24} className="fill-white text-white" />
              </div>
              <div className="flex gap-1 text-brand mb-6">
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
              </div>
              <p className="text-neutral-300 italic flex-grow mb-8">
                "Hervorragende Beratung bei der Farbauswahl und meisterhafte Umsetzung bei unseren komplizierten Mustertapeten. Ein Betrieb, auf den man sich verlassen kann."
              </p>
              <div className="font-bold text-white">Johannes B.</div>
              <div className="text-sm text-neutral-500">Tapezierarbeiten Altbau</div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-neutral-50 p-8 border border-neutral-100 flex flex-col h-full">
              <div className="flex gap-1 text-brand mb-6">
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
                <Star size={20} className="fill-brand" />
              </div>
              <p className="text-neutral-700 italic flex-grow mb-8">
                "Unsere Holzfassade sieht aus wie neu. Sehr transparente Preisgestaltung – es gab keine bösen Überraschungen bei der Abschlussrechnung."
              </p>
              <div className="font-bold text-neutral-900">Susanne K.</div>
              <div className="text-sm text-neutral-500">Außenfassade & Holzlasur</div>
            </div>
          </div>

          {/* Trusted Badges Placeholder */}
          <div className="mt-20 pt-10 border-t border-neutral-100 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="font-heading text-2xl font-bold text-neutral-400">PREMIUM-FARBEN</div>
             <div className="font-heading text-2xl font-bold text-neutral-400">MALER INNUNG</div>
             <div className="font-heading text-2xl font-bold text-neutral-400">TÜV ZERTIFIZIERT</div>
          </div>
        </div>
      </section>

      {/* 5: Call to Action */}
      <section className="w-full bg-brand py-24 relative overflow-hidden">
        {/* Subtle geometric pattern in background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">Bereit für Ihren Neuanstrich?</h2>
          <p className="text-white/90 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Sichern Sie sich jetzt einen kostenlosen Besichtigungstermin und erhalten Sie ein unverbindliches Angebot für Ihr nächstes Projekt.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-neutral-950 text-white px-10 py-5 font-bold text-lg inline-flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all shadow-[6px_6px_0_rgba(255,255,255,0.2)]">
               Jetzt Angebot anfordern
               <ArrowRight size={20} />
             </button>
             <button className="border-2 border-neutral-950 text-neutral-950 px-10 py-5 font-bold text-lg inline-flex items-center justify-center hover:bg-neutral-950 hover:text-white transition-all shadow-[6px_6px_0_rgba(15,15,15,1)]">
               0151 234 567 89
             </button>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-neutral-950 text-neutral-500 py-12 text-center text-sm border-t-8 border-neutral-900">
         <p>© 2026 Malermeister Betrieb. Alle Rechte vorbehalten. | Impressum | Datenschutz</p>
      </footer>

    </div>
  );
}
