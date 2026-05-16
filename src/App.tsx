/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight, Menu, X, ArrowRight, Instagram, Twitter, Mail } from "lucide-react";
import { useState, useRef } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen selection:bg-yamato-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-gradient-to-b from-yamato-paper/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yamato-red rounded-full flex items-center justify-center">
            <span className="text-yamato-paper font-serif font-bold">Y</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-widest uppercase text-yamato-ink">Yamato</span>
        </div>

        <div className="hidden md:flex gap-12 text-xs font-semibold tracking-widest uppercase text-yamato-ink/60">
          <a href="#" className="hover:text-yamato-red transition-colors">Philosophy</a>
          <a href="#" className="hover:text-yamato-red transition-colors">Craftsmanship</a>
          <a href="#" className="hover:text-yamato-red transition-colors">Heritage</a>
          <a href="#" className="hover:text-yamato-red transition-colors">Contact</a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yamato-ink p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-yamato-paper flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-yamato-red">Philosophy</a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-yamato-red">Craftsmanship</a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-yamato-red">Heritage</a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif hover:text-yamato-red">Contact</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[110vh] overflow-hidden">
        <motion.div style={{ scale: heroImageScale }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2600" 
            alt="Japanese Torii Gate" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yamato-paper/40 via-transparent to-yamato-paper"></div>
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24"
        >
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-yamato-red mb-6"
            >
              The Essence of Tradition
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-7xl md:text-[10rem] font-serif leading-[0.85] text-yamato-ink mb-12"
            >
              YAMATO <br />
              <span className="italic font-light">SPIRIT</span>
            </motion.h1>
          </div>

          <div className="absolute right-6 md:right-12 bottom-24 hidden lg:block">
            <p className="vertical-text text-sm font-serif italic text-yamato-ink/40 tracking-widest">
              大和魂 — YAMATO-DAMASHII — JAPANESE SOUL
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-6 mt-12"
          >
            <button className="px-12 py-5 bg-yamato-red text-yamato-paper text-xs font-bold uppercase tracking-[0.2em] hover:bg-yamato-ink transition-all flex items-center gap-3">
              Discover Heritage <ArrowRight size={16} />
            </button>
            <div className="w-24 h-px bg-yamato-ink/20"></div>
            <p className="text-xs font-serif italic text-yamato-ink/60">Founded in the Nara Basin</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-48 px-6 md:px-24 grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-12 h-px bg-yamato-red mb-12"></div>
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
            Quiet <span className="italic">Sophistication</span> <br />
            in Every Detail.
          </h2>
          <p className="text-lg text-yamato-ink/70 font-light leading-relaxed mb-12 max-w-lg">
            Yamato represents more than a name. It is the architectural harmony 
            between the ancient and the modern. We cultivate a philosophy of 
            Wabi-Sabi—finding beauty in imperfection and serenity in simplicity.
          </p>
          <a href="#" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-yamato-ink">
            Learn Our Story <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?auto=format&fit=crop&q=80&w=1200" 
              alt="Bamboo Forest" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 border border-yamato-red/10 -z-10 hidden md:block"></div>
        </div>
      </section>

      {/* Showcase / Ritual Section */}
      <section className="bg-yamato-ink text-yamato-paper py-32 md:py-64 overflow-hidden">
        <div className="px-6 md:px-24 mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-yamato-red mb-6">Seasonal Excellence</p>
            <h2 className="text-5xl md:text-8xl font-serif leading-none italic">Eternal Aesthetics</h2>
          </div>
          <p className="text-yamato-paper/40 font-serif italic max-w-xs text-right hidden md:block">
            "Beauty is a manifestation of secret natural laws, which otherwise would have been hidden from us forever."
          </p>
        </div>

        <div className="px-6 md:px-24 grid md:grid-cols-3 gap-12">
          {[
            { title: "Zen Garden", subtitle: "Karesansui", img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=800" },
            { title: "Tea Ritual", subtitle: "Chanoyu", img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?auto=format&fit=crop&q=80&w=800" },
            { title: "Ink Wash", subtitle: "Suibokuga", img: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=800" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-yamato-ink/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-yamato-red mb-2">{item.subtitle}</p>
              <h3 className="text-3xl font-serif italic leading-none">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-48 flex flex-col items-center text-center px-6">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 2 }}
           className="max-w-3xl"
        >
          <span className="text-6xl text-yamato-red/20 font-serif mb-8 block">"</span>
          <h3 className="text-4xl md:text-6xl font-serif italic text-yamato-ink leading-tight mb-12">
            In the heart of Japan, where the mountains touch the sky, we found the rhythm of the soul.
          </h3>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-yamato-ink/40">— YAMATO PHILOSOPHY</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-yamato-paper border-t border-yamato-ink/5 pt-24 pb-12 px-6 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-yamato-red rounded-full flex items-center justify-center">
                <span className="text-yamato-paper font-serif font-bold">Y</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-widest uppercase text-yamato-ink">Yamato</span>
            </div>
            <p className="text-sm text-yamato-ink/50 max-w-sm leading-loose">
              Preserving the elegant heritage of Japanese craftsmanship for a modern world. 
              Based in Nara, inspired by the ages.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yamato-ink mb-8">Follow</h4>
            <div className="flex flex-col gap-4 text-sm text-yamato-ink/60">
              <a href="#" className="hover:text-yamato-red flex items-center gap-2 transition-colors"><Instagram size={14} /> Instagram</a>
              <a href="#" className="hover:text-yamato-red flex items-center gap-2 transition-colors"><Twitter size={14} /> Twitter</a>
              <a href="#" className="hover:text-yamato-red flex items-center gap-2 transition-colors"><Mail size={14} /> Newsletter</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yamato-ink mb-8">Contact</h4>
            <p className="text-sm text-yamato-ink/60 mb-4 italic">Nara Prefecture, Japan</p>
            <p className="text-sm text-yamato-ink/60">contact@yamato-spirit.jp</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-yamato-ink/5 pt-12 gap-8">
          <p className="text-[10px] uppercase tracking-widest text-yamato-ink/30">
            © 2026 YAMATO SPIRIT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 text-[10px] uppercase tracking-widest text-yamato-ink/30">
            <a href="#" className="hover:text-yamato-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-yamato-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-yamato-ink transition-colors">Heritage Guide</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
