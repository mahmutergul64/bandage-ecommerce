import React from 'react';
import BlogCard from '../components/blog/BlogCard';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Loudest à la Madison #2 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "15"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Loudest à la Madison #3 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "8"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Loudest à la Madison #4 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "23 April 2021",
      comments: "12"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Loudest à la Madison #5 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "23 April 2021",
      comments: "24"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Loudest à la Madison #6 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "24 April 2021",
      comments: "5"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="text-center mb-16">
          <h4 className="text-blue-500 font-bold text-sm mb-3">Practice Advice</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Posts</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;