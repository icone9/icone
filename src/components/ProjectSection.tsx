import dayjs from "dayjs";
import type { Project } from "../sanity/lib/types";
import { urlForImage } from "../sanity/lib/url-for-image";
import { ArrowUpRight } from "./icons";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const avygaProjects = projects.filter((project) => project.title.toLowerCase().includes("avyga"))[0];
  const kmarketsProjects = projects.filter((project) => project.title.toLowerCase().includes("kmarkets"))[0];
  const otherProjects = projects.filter((project) => !project.title.toLowerCase().includes("avyga") && !project.title.toLowerCase().includes("kmarkets"));
  return (
    <section id="portfolio" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-brand-yellow font-bold uppercase text-xs tracking-widest mb-2 block">
          Our Products
        </span>
        <h2 className="text-5xl md:text-7xl font-display uppercase text-brand-cream">
          Software We Publish
        </h2>
      </div>

      {/* Featured Large Project 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
            <span>{dayjs(kmarketsProjects.publishedAt).format("MMM YYYY")}</span>
            <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
            <span>{kmarketsProjects.industry}</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-display uppercase leading-none mb-6">
            {kmarketsProjects.title}
          </h3>
          <p className="text-gray-400 max-w-md mb-8">{kmarketsProjects.overview}</p>
          <a
            href={`/projects/${kmarketsProjects.slug.current}`}
            className="flex items-center gap-2 bg-transparent text-brand-yellow border border-brand-yellow/30 hover:border-brand-yellow px-6 py-2 rounded-full uppercase font-bold text-sm w-fit transition-colors"
          >
            See Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <a
          href={`/projects/${kmarketsProjects.slug.current}`}
          className="order-1 lg:order-2 relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-brand-yellow/10 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform"></div>
          <img
            src={urlForImage(kmarketsProjects?.thumbnail!).url()}
            alt="Puffilo Project"
            className="relative rounded-[2rem] shadow-2xl object-cover h-[400px] border border-white/10"
          />
          <img
            src="https://images.unsplash.com/photo-1582902281043-69c645f40cd5?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl border-4 object-cover border-brand-dark shadow-xl"
            alt="detail"
          />
          <img
            src="https://images.unsplash.com/photo-1581345796539-ac17c5668cc3?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full border-4 object-cover border-brand-dark shadow-xl animate-pulse"
            alt="detail"
          />
        </a>
      </div>

      {/* Secondary Large Project 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-center">
        <a
          href={`/projects/${avygaProjects.slug.current}`}
          className="relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-brand-green rounded-[2rem] transform -rotate-2 group-hover:-rotate-4 transition-transform border border-white/10"></div>
          <img
            src={urlForImage(avygaProjects?.thumbnail!).url()}
            alt="Haven Project"
            className="relative rounded-[2rem] shadow-2xl object-cover h-[400px]"
          />
          <div className="absolute bottom-4 right-4 bg-brand-cream/90 p-1 rounded-xl shadow-lg max-w-[150px]">
            <img
              src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=100&h=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-auto rounded-md  object-cover"
              alt="app icon"
            />
          </div>
        </a>
        <div className="pl-0 lg:pl-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
              <span>{dayjs(avygaProjects.publishedAt).format("MMM YYYY")}</span>
            <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
            <span>{avygaProjects.industry}</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-display uppercase leading-none mb-6">
            {avygaProjects.title}
          </h3>
          <p className="text-gray-400 max-w-md mb-8">{avygaProjects.overview}</p>
          <a
            href={`/projects/${avygaProjects.slug.current}`}
            className="flex items-center gap-2 w-fit bg-transparent text-brand-yellow border border-brand-yellow/30 hover:border-brand-yellow px-6 py-2 rounded-full uppercase font-bold text-sm transition-colors"
          >
            See Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* List View */}
      <div className="space-y-6">
        {otherProjects.map((item, i) => (
          <a
            href={`/projects/${item.slug.current}`}
            key={i}
            className="group flex flex-col md:flex-row items-center justify-between border-t border-white/10 py-6 hover:bg-white/5 transition-colors px-4 rounded-xl cursor-pointer"
          >
            <h4 className="text-2xl md:text-4xl font-display uppercase text-white w-full md:w-1/3">
              {item.title}
            </h4>
            <div className="flex items-center justify-between w-full md:w-2/3 mt-4 md:mt-0">
              <span className="text-sm font-bold text-gray-400 uppercase">
                {dayjs(item.publishedAt).format("MMM YYYY")}
              </span>
              <span className="text-sm font-bold text-gray-400 uppercase">
                {item.industry}
              </span>

              {/* Hover Preview Image */}
              <div className="hidden md:block w-32 h-20 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                <img
                  src={urlForImage(item?.thumbnail!).url()}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="/projects"
          className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
