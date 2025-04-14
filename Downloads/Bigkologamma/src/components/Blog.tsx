import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: 'The Future of AI in Security Systems',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the security industry with predictive analytics and autonomous response capabilities.',
      author: 'Dr. Sarah Chen',
      date: 'March 15, 2025',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Advanced Perimeter Protection Strategies',
      excerpt: 'A comprehensive guide to modern perimeter security solutions and their implementation in high-security facilities.',
      author: 'Michael Okonkwo',
      date: 'March 10, 2025',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Integration of IoT in Defense Systems',
      excerpt: 'How Internet of Things technology is enhancing security system capabilities and enabling smart facility management.',
      author: 'David Park',
      date: 'March 5, 2025',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#EDAF3D] hover:text-[#EDAF3D]/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}