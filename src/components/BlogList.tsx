import { useState } from "react";
import { ArrowUpRight } from "./icons";

const MOCK_POSTS = [
  {
    id: "future-branding",
    title: "The Future of Branding: Why Minimalism Still Wins in 2025",
    excerpt:
      "Explore how clean lines and intentional whitespace are evolving to meet the demands of a high-speed digital world.",
    content: [],
    author: "Sarah Chen",
    authorRole: "Design Director",
    date: "Feb 12, 2025",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
    readTime: "6 min read",
  },
  {
    id: "ai-creative-process",
    title: "How AI is Reshaping the Creative Process without Replacing Humans",
    excerpt:
      "A deep dive into the symbiotic relationship between generative tools and the human creative spark.",
    content: [],
    author: "Marcus J.",
    authorRole: "Tech Lead",
    date: "Feb 08, 2025",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    readTime: "8 min read",
  },
  {
    id: "ux-psychology",
    title: "Psychology in UX: Designing for Emotional Resonance",
    excerpt:
      "Understanding the cognitive biases that drive user behavior and how to design for authentic connection.",
    content: [],
    author: "Elena Rossi",
    authorRole: "UX Strategist",
    date: "Jan 28, 2025",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200",
    readTime: "5 min read",
  },
];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Design", "Strategy", "Technology", "Insights"];

  const filteredPosts =
    activeCategory === "All"
      ? MOCK_POSTS
      : MOCK_POSTS.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-brand-dark pt-32 pb-20 px-4 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-brand-yellow font-bold uppercase text-xs tracking-widest mb-4 block">
            Our Journal
          </span>
          <h1 className="text-6xl md:text-9xl font-display uppercase leading-none text-brand-cream">
            Insights & <br />{" "}
            <span className="text-brand-yellow">Perspectives</span>
          </h1>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-white/10 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full uppercase font-bold text-xs transition-all ${
                activeCategory === cat
                  ? "bg-brand-yellow text-brand-dark"
                  : "text-gray-400 border border-white/10 hover:border-brand-yellow/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === "All" && MOCK_POSTS.length > 0 && (
          <a
            href={`/blog/${MOCK_POSTS[0].id}`}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center bg-brand-green/20 p-8 rounded-[3rem] border border-white/5 hover:bg-brand-green/30 transition-colors"
          >
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] lg:aspect-auto lg:h-[500px]">
              <img
                src={MOCK_POSTS[0].image}
                alt={MOCK_POSTS[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-brand-yellow text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase">
                Featured
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase text-gray-400 mb-6">
                <span>{MOCK_POSTS[0].date}</span>
                <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                <span>{MOCK_POSTS[0].category}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display uppercase leading-none mb-6 group-hover:text-brand-yellow transition-colors">
                {MOCK_POSTS[0].title}
              </h2>
              <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                {MOCK_POSTS[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-brand-yellow">
                  {MOCK_POSTS[0].author[0]}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">
                    {MOCK_POSTS[0].author}
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase font-bold">
                    {MOCK_POSTS[0].authorRole}
                  </div>
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(activeCategory === "All" ? 1 : 0).map((post) => (
            <a
              href={`/blog/${post.id}`}
              key={post.id}
              className="group cursor-pointer bg-white/5 border border-white/5 rounded-[2rem] p-6 hover:bg-white/10 transition-all flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase text-gray-500 mb-4">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-brand-yellow rounded-full"></span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-display uppercase leading-tight mb-4 group-hover:text-brand-yellow transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-8 line-clamp-2 flex-grow">
                {post.excerpt}
              </p>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-gray-400">
                  {post.date}
                </span>
                <ArrowUpRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
