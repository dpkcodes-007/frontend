import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { getPosts } from '../utils/storage';

const Landing = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    setPosts(getPosts());
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <main className="max-w-xl mx-auto px-4 sm:px-0 mt-8">
        <CreatePost onPostCreated={loadPosts} />
        
        <div className="space-y-6 perspective-[1500px]">
          {posts.length === 0 ? (
            <div className="glass-panel-3d p-12 text-center text-slate-500 dark:text-slate-400">
              <div className="w-16 h-16 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transform-gpu translate-z-10 animate-float-3d">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <p className="font-medium text-lg text-slate-700 dark:text-slate-300">No posts yet</p>
              <p className="mt-1">Be the first to share something amazing!</p>
            </div>
          ) : (
            posts.map(post => (
              <Post key={post.id} post={post} onPostUpdate={loadPosts} />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Landing;
