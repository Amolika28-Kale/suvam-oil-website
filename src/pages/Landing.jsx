import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Install via: npm install framer-motion
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  const [lang, setLang] = useState("mr");
  const [heroIndex, setHeroIndex] = useState(0);

  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_5kQ9AVfjTdwdcvmeVIeZ201";

  const handleBuyNow = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600",
    "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRhY2hlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?q=80&w=1600",
    "https://images.unsplash.com/photo-1611078489935-0cb964de46c0?q=80&w=1600",
    "https://images.unsplash.com/photo-1542736667-069246bdbc94?q=80&w=1600",
  ];

  const painImages = [
    { title: "गुडघेदुखी व सांधेदुखी", img: "https://plus.unsplash.com/premium_photo-1664910605048-44c8450c0356?w=600&auto=format&fit=crop&q=60" },
    { title: "पाठदुखी व कंबरदुखी", img: "https://plus.unsplash.com/premium_photo-1726797945604-5025e538b692?w=600&auto=format&fit=crop&q=60" },
    { title: "मान, खांदे व स्नायू दुखणे", img: "https://media.istockphoto.com/id/1271348159/photo/back-view-of-brunette-woman-having-neck-pain-in-bedroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=xrzbp_d-ze8Z44dAMSuYHYyQ7XZdkCsGPQqYr88Xdhs=" },
    { title: "सूज, ताठरपणा व ताण", img: "https://media.istockphoto.com/id/894629846/photo/bee-sting.webp?a=1&b=1&s=612x612&w=0&k=20&c=vP1VY8wO-mHo2EIXLjCN_j7nOoBRXpbfFKH1zfjaFsE=" },
  ];

  const marketingTaglines = [
    "वेदनांवर विश्वासार्ह आयुर्वेदिक उपाय",
    "सांधेदुखीला म्हणा पूर्णविराम",
    "नैसर्गिक आराम, डॉक्टरांचा विश्वास",
    "दररोजची वेदना, आता नाही",
    "हलचाल करा वेदनाशिवाय",
  ];

  const content = {
    mr: {
      heroTitle: "सांधे व स्नायूंच्या वेदनांवर विश्वासार्ह आयुर्वेदिक उपाय",
      heroDesc: "Suvam Oil हे पुण्यातील अनुभवी ऑर्थोपेडिक डॉक्टरांच्या मार्गदर्शनाखाली तयार केलेले आयुर्वेदिक तेल आहे.",
      heroNote: "नियमित वापर • दीर्घकाळ आराम • डॉक्टरांचा विश्वास",
      aboutTitle: "Suvam Oil का निवडावे?",
      aboutDesc: "Suvam Oil हे आधुनिक वैद्यकीय ज्ञान आणि पारंपरिक आयुर्वेदाचा संगम आहे.",
      features: ["ऑर्थोपेडिक डॉक्टरांनी शिफारस केलेले", "100% नैसर्गिक औषधी घटक", "कोणतेही साइड इफेक्ट नाहीत", "सर्व वयोगटांसाठी सुरक्षित", "दीर्घकालीन वापरासाठी योग्य"],
      usageTitle: "वापरण्याची योग्य पद्धत",
      usage: "दुखणाऱ्या भागावर दिवसातून दोन वेळा 5–10 मिनिटे हलक्या हाताने मालिश करा.",
      doctorQuote: "“Suvam Oil नियमित वापरल्यास सांधेदुखी व स्नायूंच्या वेदनांमध्ये आराम मिळतो.”",
      buyBtn: "₹150 मध्ये खरेदी करा",
    },
    en: {
      heroTitle: "Trusted Ayurvedic Solution for Joint & Muscle Pain",
      heroDesc: "Suvam Oil is an Ayurvedic orthopedic oil developed under experienced doctors in Pune.",
      heroNote: "Regular use • Long-lasting relief • Doctor trusted",
      aboutTitle: "Why Choose Suvam Oil?",
      aboutDesc: "Suvam Oil is a perfect blend of traditional Ayurveda and modern medical science.",
      features: ["Recommended by orthopedic doctors", "100% natural herbal ingredients", "No side effects", "Safe for all age groups", "Suitable for long-term use"],
      usageTitle: "How to Use",
      usage: "Massage gently on the affected area for 5–10 minutes, twice daily.",
      doctorQuote: "“Regular use of Suvam Oil helps reduce joint pain and improves mobility.”",
      buyBtn: "Buy Now @ ₹150",
    },
  };

  const c = content[lang] || content.mr;

  return (
    <div className="bg-[#05010d] text-slate-100 selection:bg-purple-500/30">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url(${heroImages[heroIndex]})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </AnimatePresence>
        
        {/* Advanced Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#05010d] z-1" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 bg-purple-500/10 backdrop-blur-md rounded-full text-purple-300 text-sm font-medium"
          >
            {c.heroNote}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-400"
          >
            {c.heroTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {c.heroDesc}
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={handleBuyNow} 
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-xl shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] overflow-hidden"
          >
            <span className="relative z-10">{c.buyBtn}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </div>
      </section>

      {/* PAIN AREAS - Cards with Hover Glow */}
      <section id="product" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 italic underline decoration-purple-500/50 underline-offset-8">
            {lang === 'mr' ? 'कोणत्या वेदनांवर प्रभावी?' : 'Effective for?'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {painImages.map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center text-lg font-bold bg-gradient-to-b from-transparent to-black/40">
                {p.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT - Horizontal Bento Grid Style */}
      <section id="about" className="py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-300 mb-6">{c.aboutTitle}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{c.aboutDesc}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {c.features.map((f, i) => (
              <div key={i} className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 hover:bg-white/10 transition">
                <span className="text-green-400 text-xl font-bold">✓</span>
                <span className="font-medium text-gray-200">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USAGE & QUOTE - Elegant Split Section */}
      <section id="doctor" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 shadow-2xl">
                <h2 className="text-3xl font-bold text-purple-300 mb-6 underline decoration-purple-500/30">{c.usageTitle}</h2>
                <p className="text-xl text-gray-300 leading-relaxed italic">"{c.usage}"</p>
            </div>
            
            <div className="text-center md:text-left">
                <div className="mb-6 text-5xl text-purple-500 opacity-50">“</div>
                <blockquote className="text-2xl font-light text-slate-200 mb-6 leading-relaxed">
                  {c.doctorQuote}
                </blockquote>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="w-12 h-1px bg-purple-500" />
                    <p className="text-purple-400 uppercase tracking-widest text-sm font-bold">Orthopedic Doctors, Pune</p>
                </div>
            </div>
        </div>
      </section>

      {/* MARKETING STRIP - Moving text feel */}
      <section className="py-24 bg-purple-600/5 border-y border-purple-500/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-sm uppercase tracking-[0.3em] text-purple-500 mb-12 font-black">Premium Quality Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {marketingTaglines.map((tag, i) => (
                <div key={i} className="group p-6 text-center rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all duration-300 cursor-default">
                   <p className="text-gray-300 group-hover:text-white font-medium">{tag}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}