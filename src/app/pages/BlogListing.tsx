import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../context/LanguageContext';
// Mock Data
const categories = ["All", "Cost Guides", "Treatment Guides", "Patient Stories", "Egypt Travel", "News"];

const articles = [
  {
    id: 1,
    title: "Dental Implants in Egypt: Complete 2026 Cost Guide",
    excerpt: "Discover how you can save up to 70% on premium dental implants while enjoying a luxury vacation in the land of pharaohs.",
    category: "Cost Guides",
    author: "Dr. Ahmed Hassan",
    date: "Feb 14, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 2,
    title: "Sarah's Journey: From London to a Hollywood Smile in Cairo",
    excerpt: "A personal account of traveling to Egypt for veneers, including the consultation process, the procedure, and the 5-star recovery.",
    category: "Patient Stories",
    author: "Sarah Jenkins",
    date: "Feb 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 3,
    title: "Top 5 Luxury Recovery Resorts in Sharm El Sheikh",
    excerpt: "Where to stay after your procedure for maximum comfort, privacy, and relaxation by the Red Sea.",
    category: "Egypt Travel",
    author: "Editorial Team",
    date: "Feb 05, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 4,
    title: "LASIK vs. SMILE: Which Vision Correction is Right for You?",
    excerpt: "A comprehensive comparison of the latest laser eye surgery techniques available at our partner clinics.",
    category: "Treatment Guides",
    author: "Dr. Youssef El-Sayed",
    date: "Jan 28, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 5,
    title: "Is Medical Tourism in Egypt Safe? What You Need to Know",
    excerpt: "Addressing common concerns about safety, hygiene standards, and doctor qualifications in Egypt's private medical sector.",
    category: "News",
    author: "Medical Director",
    date: "Jan 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
    featured: false
  },
  {
    id: 6,
    title: "The Ultimate Pre-Travel Checklist for Medical Tourists",
    excerpt: "From visa requirements to medical records, here's everything you need to prepare before your trip to Egypt.",
    category: "Egypt Travel",
    author: "Travel Concierge",
    date: "Jan 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    featured: false
  }
];

export const BlogListing = () => {
  const { t, direction } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-[#F5F0E5]">
      {/* Hero Section */}
      <div className="bg-[#0F1923] text-white py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4">The Sekhmet Journal</h1>
          <p className="font-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Expert insights on medical tourism, treatment guides, and inspiring patient stories from the heart of Egypt.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Featured Article */}
        {featuredArticle && activeCategory === "All" && !searchQuery && (
          <div className="mb-16">
            <Link to={`/blog/${featuredArticle.id}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="h-64 md:h-96 overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <span className="inline-block px-3 py-1 bg-[#115E59] text-white text-xs font-bold tracking-wider uppercase rounded-full mb-4">
                    {featuredArticle.category}
                  </span>
                  <h2 className="font-playfair text-3xl md:text-4xl text-[#0F1923] mb-4 group-hover:text-[#C5A059] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 font-sans mb-6 text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 font-medium mb-6 space-x-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {featuredArticle.date}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1" /> {featuredArticle.readTime}</span>
                  </div>
                  <span className="inline-flex items-center text-[#C5A059] font-bold tracking-wide group-hover:underline">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? "bg-[#0F1923] text-white shadow-md" 
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {regularArticles.length > 0 ? (
                regularArticles.map(article => (
                  <Link to={`/blog/${article.id}`} key={article.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative">
                      <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold text-[#0F1923] rounded">
                        {article.category}
                      </span>
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-playfair text-xl font-bold text-[#0F1923] mb-3 group-hover:text-[#C5A059] transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-50">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-gray-500">
                  No articles found matching your criteria.
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-xl mb-4 text-[#0F1923]">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                />
                <Search size={18} className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#0F1923] p-8 rounded-xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] opacity-10 rounded-bl-full -mr-10 -mt-10" />
              <h3 className="font-playfair text-2xl mb-2 relative z-10">Join the Circle</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Get insider tips, exclusive offers, and travel guides delivered to your inbox.</p>
              <form className="space-y-3 relative z-10">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
                />
                <button type="submit" className="w-full bg-[#C5A059] text-white font-bold py-3 rounded-lg hover:bg-[#B08D4B] transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Popular Articles */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-playfair text-xl mb-4 text-[#0F1923]">Popular Now</h3>
              <div className="space-y-4">
                {[1, 4, 3].map((id, index) => {
                  const article = articles.find(a => a.id === id);
                  if (!article) return null;
                  return (
                    <Link to={`/blog/${article.id}`} key={id} className="flex gap-4 group">
                      <span className="text-4xl font-playfair text-gray-100 font-bold -mt-2 group-hover:text-[#C5A059] transition-colors">0{index + 1}</span>
                      <div>
                        <h4 className="font-bold text-[#0F1923] text-sm leading-snug group-hover:text-[#C5A059] transition-colors mb-1">
                          {article.title}
                        </h4>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
