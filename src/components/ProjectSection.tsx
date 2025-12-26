import { ArrowUpRight } from "./icons";

const MOCK_PROJECTS = {
  puffilo: {
    id: "puffilo",
    title: "Puffilo : Bites of Cloud-Like Bliss",
    subtitle: "Reimagining Confectionery",
    description:
      'Puffilo needed a visual language that spoke to the "cloud-like" texture of their products. We developed a soft-touch packaging system and a pastel-driven color palette that stands out on shelves while evoking immediate sensory comfort.',
    client: "Puffilo Sweets",
    industry: "Food & Beverage",
    year: "2025",
    services: ["Visual Identity", "Packaging", "Photography"],
    heroImage:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=2000",
    thumbnail: "https://picsum.photos/seed/puffilo/800/600",
    features: [
      {
        title: "Custom Typography",
        description:
          "Hand-drawn lettering that mimics the rounded edges of a marshmallow.",
      },
      {
        title: "Sustainable Pack",
        description:
          "Fully compostable wrapper materials with premium matte finish.",
      },
      {
        title: "AR Experience",
        description:
          'Scan the pack to see the "Cloud World" animations in augmented reality.',
      },
    ],
    gallery: [
      "https://picsum.photos/seed/p1/800/600",
      "https://picsum.photos/seed/p2/800/1000",
      "https://picsum.photos/seed/p3/800/800",
      "https://picsum.photos/seed/p4/800/500",
    ],
  },
  haven: {
    id: "haven",
    title: "Haven: Unleash Your Best Self!",
    subtitle: "Digital Fitness Revolution",
    description:
      "Haven is more than a workout app; it is a mental health and physical fitness sanctuary. We created a UI that feels calming yet motivating, utilizing dark mode aesthetics with neon highlights to keep users focused during intense sessions.",
    client: "Haven Labs",
    industry: "Health & Tech",
    year: "2024",
    services: ["UI/UX Design", "Branding", "Mobile Dev"],
    heroImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000",
    thumbnail: "https://picsum.photos/seed/fitness/800/600",
    features: [
      {
        title: "Biometric Sync",
        description:
          "Seamless integration with Apple Watch and Garmin for real-time heart tracking.",
      },
      {
        title: "Adaptive Coaching",
        description:
          "AI-driven workout plans that adjust based on previous performance and soreness.",
      },
      {
        title: "Community Hub",
        description:
          "Integrated social layers allowing for live group classes and shared progress.",
      },
    ],
    gallery: [
      "https://picsum.photos/seed/h1/800/1200",
      "https://picsum.photos/seed/h2/800/600",
      "https://picsum.photos/seed/h3/800/800",
      "https://picsum.photos/seed/h4/800/900",
    ],
  },
};

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-brand-yellow font-bold uppercase text-xs tracking-widest mb-2 block">
          Selected Works
        </span>
        <h2 className="text-5xl md:text-7xl font-display uppercase text-brand-cream">
          Our Brightest Creations
        </h2>
      </div>

      {/* Featured Large Project 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
            <span>Jan 2025</span>
            <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
            <span>Visual Identity</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-display uppercase leading-none mb-6">
            Puffilo : Bites <br /> of Cloud-Like Bliss
          </h3>
          <p className="text-gray-400 max-w-md mb-8">
            A playful and vibrant rebranding for a marshmallow confectionery
            brand, focusing on the sensory experience of softness and flavor.
          </p>
          <a
           href={`/projects/${MOCK_PROJECTS.puffilo.id}`}
            className="flex items-center gap-2 bg-transparent text-brand-yellow border border-brand-yellow/30 hover:border-brand-yellow px-6 py-2 rounded-full uppercase font-bold text-sm transition-colors"
          >
            See Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <a 
        href={`/projects/${MOCK_PROJECTS.puffilo.id}`}
          className="order-1 lg:order-2 relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-brand-yellow/10 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform"></div>
          <img
            src={MOCK_PROJECTS.puffilo.thumbnail}
            alt="Puffilo Project"
            className="relative rounded-[2rem] shadow-2xl object-cover h-[400px] border border-white/10"
          />
          <img
            src="https://picsum.photos/seed/sweet1/100/100"
            className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl border-4 border-brand-dark shadow-xl"
            alt="detail"
          />
          <img
            src="https://picsum.photos/seed/sweet2/100/100"
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full border-4 border-brand-dark shadow-xl animate-pulse"
            alt="detail"
          />
        </a>
      </div>

      {/* Secondary Large Project 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
        <a
          href={`/projects/${MOCK_PROJECTS.haven.id}`}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-brand-green rounded-[2rem] transform -rotate-2 group-hover:-rotate-4 transition-transform border border-white/10"></div>
          <img
            src={MOCK_PROJECTS.haven.thumbnail}
            alt="Haven Project"
            className="relative rounded-[2rem] shadow-2xl object-cover h-[400px]"
          />
          <div className="absolute bottom-4 right-4 bg-brand-cream/90 p-4 rounded-xl shadow-lg max-w-[150px]">
            <img
              src="https://picsum.photos/seed/app/100/100"
              className="w-full h-auto rounded-md mb-2"
              alt="app icon"
            />
          </div>
        </a>
        <div className="pl-0 lg:pl-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
            <span>Nov 2024</span>
            <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
            <span>Branding</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-display uppercase leading-none mb-6">
            Haven: Unleash <br /> Your Best Self!
          </h3>
          <p className="text-gray-400 max-w-md mb-8">
            Comprehensive branding for a new-age fitness app, combining
            energetic visuals with a community-driven tone of voice.
          </p>
          <a
            href={`/projects/${MOCK_PROJECTS.haven.id}`}
            className="flex items-center gap-2 bg-transparent text-brand-yellow border border-brand-yellow/30 hover:border-brand-yellow px-6 py-2 rounded-full uppercase font-bold text-sm transition-colors"
          >
            See Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* List View */}
      <div className="space-y-6">
        {[
          {
            id: "lumina",
            name: "Hoptonic Tea",
            date: "Nov 2024",
            type: "Web Design",
            img: "https://picsum.photos/seed/tea/200/100",
          },
          {
            id: "caca-family",
            name: "Caca Family",
            date: "Oct 2024",
            type: "Web Design",
            img: "https://picsum.photos/seed/family/200/100",
          },
          {
            id: "edify",
            name: "Edify",
            date: "Sept 2024",
            type: "Branding",
            img: "https://picsum.photos/seed/tech/200/100",
          },
        ].map((item, i) => (
          <a
            href={`/projects/${item.id}`}
            key={i}
            className="group flex flex-col md:flex-row items-center justify-between border-t border-white/10 py-6 hover:bg-white/5 transition-colors px-4 rounded-xl cursor-pointer"
          >
            <h4 className="text-2xl md:text-4xl font-display uppercase text-white w-full md:w-1/3">
              {item.name}
            </h4>
            <div className="flex items-center justify-between w-full md:w-2/3 mt-4 md:mt-0">
              <span className="text-sm font-bold text-gray-400 uppercase">
                {item.date}
              </span>
              <span className="text-sm font-bold text-gray-400 uppercase">
                {item.type}
              </span>

              {/* Hover Preview Image */}
              <div className="hidden md:block w-32 h-20 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a href="/projects"
          className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
