import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function Landing() {
  const [lang, setLang] = useState("mr");
  const [heroIndex, setHeroIndex] = useState(0);

  const STRIPE_PAYMENT_LINK =
    "https://buy.stripe.com/test_5kQ9AVfjTdwdcvmeVIeZ201";
  const handleBuyNow = () => (window.location.href = STRIPE_PAYMENT_LINK);

  useEffect(() => {
    const interval = setInterval(
      () => setHeroIndex((prev) => (prev + 1) % 5),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600",
    "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?q=80&w=1600",
    "https://images.unsplash.com/photo-1611078489935-0cb964de46c0?q=80&w=1600",
    "https://images.unsplash.com/photo-1542736667-069246bdbc94?q=80&w=1600",
  ];

const painImages = [
  {
    title: "गुडघेदुखी व सांधेदुखी", en : "Knee & Joint Pain",
    img: "https://plus.unsplash.com/premium_photo-1664910605048-44c8450c0356?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "पाठदुखी व कंबरदुखी", en:"Back & Lower Back Pain",
    img: "https://plus.unsplash.com/premium_photo-1726797945604-5025e538b692?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "मान, खांदे व स्नायू दुखणे", en : "Neck, Shoulder & Muscle Pain",
    img: "https://media.istockphoto.com/id/2219733767/photo/woman-suffering-from-nape-pain.webp?a=1&b=1&s=612x612&w=0&k=20&c=20TqT0m826E_GVUm_17ws54FYysPL6hu9xycou-T0Cc=",
  },
  {
    title: "सूज, ताठरपणा व ताण", en : "Swelling, Stiffness & Strain",
    img: "https://media.istockphoto.com/id/894629846/photo/bee-sting.webp?a=1&b=1&s=612x612&w=0&k=20&c=vP1VY8wO-mHo2EIXLjCN_j7nOoBRXpbfFKH1zfjaFsE=",
  },
  {
    title: "संधिवात (Arthritis)", en : "Arthritis",
    img: "https://images.unsplash.com/photo-1626178794106-474fa92d6524?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXJ0aHJpdGlzfGVufDB8fDB8fHww",
  },
  {
    title: "मांसपेशी ताठरता", en: "Muscle Rigidity",
    img: "https://images.unsplash.com/photo-1706777163227-0f0eade9e932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9ydGhvcGVkaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "जुन्या दुखापतींची वेदना", en : "Old Injury Pain",
    img: "https://media.istockphoto.com/id/1201386909/photo/knee-pain-in-an-elderly-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=7vmy1Qu3e1wmEaWrlIEi1CrBn5D7Lz-wK7sHaT0haKo=",
  },
  {
    title: "वर्क फ्रॉम होम वेदना", en : "Work From Home Pain",
    img: "https://plus.unsplash.com/premium_photo-1661578496295-8439a42cd3d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmVjayUyMHBhaW58ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "स्पोर्ट्स इन्ज्युरी", en : "Sports Injury",
    img: "https://plus.unsplash.com/premium_photo-1663133612870-2ca5141cb982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0cyUyMGluanVyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "वृद्धापकाळातील वेदना", en: "Age-related Pain",
    img: "https://media.istockphoto.com/id/1638029556/photo/tired-senior-gray-haired-woman-holding-her-knee-suffering-from-joint-pain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2WDrmR7rwWvZqAB5-yMLfWRb23Kn2tq3Yd1qu18uhA=",
  },
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
      heroDesc:
        "Suvam Oil हे पुण्यातील अनुभवी ऑर्थोपेडिक डॉक्टरांच्या मार्गदर्शनाखाली तयार केलेले आयुर्वेदिक तेल आहे.",
      heroExtra:
        "हे तेल वेदना कमी करण्यास, सूज घटविण्यास आणि हालचाल सुधारण्यास मदत करते.",
      heroNote: "नियमित वापर • दीर्घकाळ आराम • डॉक्टरांचा विश्वास",

      aboutTitle: "Suvam Oil का निवडावे?",
      aboutDesc:
        "Suvam Oil हे आधुनिक वैद्यकीय ज्ञान आणि पारंपरिक आयुर्वेदाचा संगम आहे.",
      aboutMore:
        "प्रत्येक घटक शास्त्रशुद्ध पद्धतीने निवडलेला असून त्वचेला सुरक्षित आणि प्रभावी आहे.",

      features: [
        "ऑर्थोपेडिक डॉक्टरांनी शिफारस केलेले",
        "100% नैसर्गिक औषधी घटक",
        "कोणतेही साइड इफेक्ट नाहीत",
        "सर्व वयोगटांसाठी सुरक्षित",
        "दीर्घकालीन वापरासाठी योग्य",
        "दैनंदिन वापरासाठी उपयुक्त",
        "जलद शोषण व न चिकट अनुभव",
      ],

      usageTitle: "वापरण्याची योग्य पद्धत",
      usage:
        "दुखणाऱ्या भागावर दिवसातून दोन वेळा 5–10 मिनिटे हलक्या हाताने मालिश करा.",
      usageMore:
        "स्नानानंतर किंवा झोपण्यापूर्वी वापरल्यास अधिक परिणामकारक ठरते.",

      doctorQuote:
        "“Suvam Oil नियमित वापरल्यास सांधेदुखी व स्नायूंच्या वेदनांमध्ये आराम मिळतो.”",

      buyBtn: "₹150 मध्ये खरेदी करा",
    },

    en: {
      heroTitle: "Trusted Ayurvedic Solution for Joint & Muscle Pain",
      heroDesc:
        "Suvam Oil is an Ayurvedic orthopedic oil developed under experienced doctors in Pune.",
      heroExtra:
        "It helps reduce inflammation, improves flexibility, and supports daily mobility.",
      heroNote: "Regular use • Long-lasting relief • Doctor trusted",

      aboutTitle: "Why Choose Suvam Oil?",
      aboutDesc:
        "Suvam Oil is a perfect blend of traditional Ayurveda and modern medical science.",
      aboutMore:
        "Each ingredient is carefully selected to ensure safety, purity, and effectiveness.",

      features: [
        "Recommended by orthopedic doctors",
        "100% natural herbal ingredients",
        "No side effects",
        "Safe for all age groups",
        "Suitable for long-term use",
        "Ideal for daily application",
        "Fast absorption, non-sticky",
      ],

      usageTitle: "How to Use",
      usage:
        "Massage gently on the affected area for 5–10 minutes, twice daily.",
      usageMore:
        "Best used after bath or before sleep for enhanced results.",

      doctorQuote:
        "“Regular use of Suvam Oil helps reduce joint pain and improves mobility.”",

      buyBtn: "Buy Now @ ₹150",
    },
  };

  const c = content[lang];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <Navbar lang={lang} setLang={setLang} />

      {/* ================= HERO ================= */}
   {/* ================= VIDEO HERO ================= */}
<section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    poster="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white backdrop-blur-sm" />

  {/* Content */}
  <motion.div
    initial="hidden"
    animate="visible"
    className="relative z-10 max-w-4xl text-center"
  >
    <motion.div
      variants={fadeUp}
      className="inline-block px-4 py-1 mb-5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold"
    >
      {c.heroNote}
    </motion.div>

    <motion.h1
      variants={fadeUp}
      custom={2}
      className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-indigo-800"
    >
      {c.heroTitle}
    </motion.h1>

    <motion.p
      variants={fadeUp}
      custom={3}
      className="text-lg text-gray-600 max-w-2xl mx-auto mb-3"
    >
      {c.heroDesc}
    </motion.p>

    <motion.p
      variants={fadeUp}
      custom={4}
      className="text-gray-500 max-w-xl mx-auto mb-10"
    >
      {c.heroExtra}
    </motion.p>

    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      onClick={handleBuyNow}
      className="px-12 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg shadow-xl hover:bg-indigo-700"
    >
      {c.buyBtn}
    </motion.button>
  </motion.div>
</section>


      {/* ================= ABOUT ================= */}
      <section className="py-24 px-4 bg-indigo-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-indigo-800 mb-4">
            {c.aboutTitle}
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-gray-600">
            {c.aboutDesc}
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-gray-500 mt-3">
            {c.aboutMore}
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {c.features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-6 py-4 bg-white rounded-xl shadow hover:shadow-lg flex items-center gap-3"
            >
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span className="font-medium">{f}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PAIN SLIDER ================= */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl font-bold text-center mb-12 text-indigo-800 underline underline-offset-8"
        >
          {lang === "mr" ? "कोणत्या वेदनांवर प्रभावी?" : "Effective for?"}
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {painImages.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="min-w-[260px] bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden group"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="p-5 text-center font-semibold">
                {lang === "mr" ? p.title : p.en}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MARKETING ================= */}
      <section className="py-20 px-4 bg-indigo-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {marketingTaglines.map((tag, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="p-6 bg-white rounded-xl shadow text-center font-medium"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
