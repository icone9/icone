import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";

const ALL_MOCK_PROJECTS = [
  {
    id: "puffilo",
    title: "Puffilo : Bites of Cloud-Like Bliss",
    subtitle: "Reimagining Confectionery",
    description:
      'Puffilo needed a visual language that spoke to the "cloud-like" texture of their products. We developed a soft-touch packaging system and a pastel-driven color palette.',
    client: "Puffilo Sweets",
    industry: "Food & Beverage",
    year: "2025",
    services: ["Visual Identity", "Packaging"],
    heroImage:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=2000",
    thumbnail: "https://picsum.photos/seed/puffilo/800/600",
    features: [],
    gallery: [],
  },
  {
    id: "haven",
    title: "Haven: Unleash Your Best Self!",
    subtitle: "Digital Fitness Revolution",
    description:
      "Haven is more than a workout app; it is a mental health and physical fitness sanctuary. We created a UI that feels calming yet motivating.",
    client: "Haven Labs",
    industry: "Health & Tech",
    year: "2024",
    services: ["UI/UX Design", "Branding"],
    heroImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000",
    thumbnail: "https://picsum.photos/seed/fitness/800/600",
    features: [],
    gallery: [],
  },
  {
    id: "hoptonic",
    title: "Hoptonic Tea : Natural Energy",
    subtitle: "Refreshment Redefined",
    description:
      "A modern take on traditional tea culture, bringing vibrant energy to the beverage market.",
    client: "Hoptonic Co.",
    industry: "Beverage",
    year: "2024",
    services: ["Web Design", "Strategy"],
    heroImage: "https://picsum.photos/seed/tea/1200/800",
    thumbnail: "https://picsum.photos/seed/tea/800/600",
    features: [],
    gallery: [],
  },
  {
    id: "caca-family",
    title: "Caca Family : Roots of Love",
    subtitle: "Community First Branding",
    description:
      "Building a brand for a non-profit organization focused on family support and community growth.",
    client: "Caca Foundation",
    industry: "Non-Profit",
    year: "2024",
    services: ["Web Design", "Branding"],
    heroImage: "https://picsum.photos/seed/family/1200/800",
    thumbnail: "https://picsum.photos/seed/family/800/600",
    features: [],
    gallery: [],
  },
  {
    id: "edify",
    title: "Edify : Knowledge for All",
    subtitle: "Educational Platform",
    description:
      "Streamlining the online learning experience through intuitive design and clear architecture.",
    client: "Edify Tech",
    industry: "Education",
    year: "2024",
    services: ["Branding", "UI/UX Design"],
    heroImage: "https://picsum.photos/seed/tech/1200/800",
    thumbnail: "https://picsum.photos/seed/tech/800/600",
    features: [],
    gallery: [],
  },
  {
    id: "lumina",
    title: "Lumina : Radiant Living",
    subtitle: "Luxury Real Estate",
    description:
      "Capturing the essence of high-end architectural design through cinematic photography and elite web presence.",
    client: "Lumina Estates",
    industry: "Real Estate",
    year: "2023",
    services: ["Visual Identity", "Web Design"],
    heroImage: "https://picsum.photos/seed/house/1200/800",
    thumbnail: "https://picsum.photos/seed/house/800/600",
    features: [],
    gallery: [],
  },
];

const ProjectList = () => {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Visual Identity",
    "Branding",
    "Web Design",
    "UI/UX Design",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects =
    filter === "All"
      ? ALL_MOCK_PROJECTS
      : ALL_MOCK_PROJECTS.filter((p) => p.services.some((s) => s === filter));

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <a
              href="/"
              className="group flex items-center gap-2 text-brand-yellow font-bold uppercase text-xs mb-8 hover:text-white transition-colors"
            >
              <span className="rotate-180">
                <ArrowUpRight className="w-4 h-4" />
              </span>
              Back to Home
            </a>
            <h1 className="text-6xl md:text-9xl font-display uppercase leading-none text-brand-cream">
              The <span className="text-brand-yellow">Archive</span>
            </h1>
          </div>
          <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
            A comprehensive look at our journey through design, strategy, and
            digital innovation. Every pixel tells a story.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full uppercase font-bold text-[10px] md:text-xs transition-all tracking-wider ${
                filter === cat
                  ? "bg-brand-yellow text-brand-dark"
                  : "text-gray-400 border border-white/10 hover:border-brand-yellow/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <a
              href={`/projects/${project.id}`}
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/3] mb-6">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-brand-yellow text-brand-dark p-4 rounded-full shadow-xl">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-display uppercase leading-tight mb-2 group-hover:text-brand-yellow transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] uppercase font-bold text-gray-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-bold text-brand-yellow">
                  {project.year}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-4xl font-display uppercase text-gray-600">
              No projects found in this category
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
