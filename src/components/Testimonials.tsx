import { useState } from "react";
import { ArrowUpRight } from "./icons";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    company: "Bloomistry",
    emoji: "🌸",
    quote:
      "“Brightcove transformed our digital presence with a stunning campaign that resonated perfectly with our audience. The attention to detail and creative direction was unmatched.”",
    author: "Mark Reynolds",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    company: "TechFlow",
    emoji: "⚡",
    quote:
      "“Working with this team felt like having an extension of our own. They understood our technical constraints but never let them limit the creative vision. Truly exceptional partners.”",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    company: "EcoWare",
    emoji: "🌿",
    quote:
      "“The rebranding process was deep and thoughtful. They didn’t just give us a new logo; they gave us a new way to tell our story to a global audience who cares about sustainability.”",
    author: "David Chen",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (index: number) => {
    if (index === activeIndex || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    const nextIndex =
      activeIndex === 0 ? TESTIMONIALS_DATA.length - 1 : activeIndex - 1;
    handleSlideChange(nextIndex);
  };

  const handleNext = () => {
    const nextIndex =
      activeIndex === TESTIMONIALS_DATA.length - 1 ? 0 : activeIndex + 1;
    handleSlideChange(nextIndex);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto my-12 bg-brand-cream rounded-[3rem] text-brand-dark overflow-hidden">
      <div className="text-center mb-12">
        <span className="text-brand-dark/60 font-bold uppercase text-xs tracking-widest mb-2 block">
          Testimonials
        </span>
        <h2 className="text-5xl md:text-7xl font-display uppercase leading-none">
          What Our <span className="text-brand-green">Clients Say</span>
        </h2>
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-lg mx-auto">
          Real feedback from the clients and brands we've partnered with to
          achieve extraordinary results.
        </p>
      </div>

      <div
        className={`relative bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center transition-all duration-500 transform ${isAnimating ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"}`}
      >
        {/* Decorative Quote Mark */}
        <div className="absolute -top-6 -right-6 text-brand-yellow text-9xl font-display opacity-50 select-none pointer-events-none">
          ”
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-lg">
              {current.emoji}
            </span>
            <span className="font-display uppercase text-xl tracking-wider">
              {current.company}
            </span>
          </div>

          <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 min-h-[140px]">
            {current.quote}
          </blockquote>

          <button className="flex items-center gap-2 text-sm font-bold uppercase border-b border-brand-dark pb-1 hover:text-brand-green hover:border-brand-green transition-all">
            Read the story <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer shadow-inner">
          <img
            src={current.image}
            alt={`${current.author} from ${current.company}`}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

          {/* Play Button Simulation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-yellow/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg
              className="w-6 h-6 text-brand-dark ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="absolute bottom-6 left-6 text-white bg-brand-dark/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <div className="font-bold text-lg">{current.author}</div>
            <div className="text-xs uppercase opacity-80">{current.role}</div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group hover:bg-brand-dark transition-all duration-300 disabled:opacity-50"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 group-hover:text-brand-yellow transition-colors rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSlideChange(idx)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? "w-12 h-2.5 bg-brand-dark"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group hover:bg-brand-dark transition-all duration-300 disabled:opacity-50"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 group-hover:text-brand-yellow transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
