import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Sparkles } from 'lucide-react';
import { logoutUser, getSession } from '../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const session = getSession();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  if (!session) return null;

  return (
    <nav className="sticky top-0 z-50 glass-panel rounded-none border-t-0 border-x-0 border-b px-6 py-4 mb-8">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => navigate('/')}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-fuchsia-500 to-purple-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-fuchsia-500/25">
            <Sparkles className="text-white fill-white/20" size={20} />
          </div>
          <div className="font-extrabold tracking-tight text-2xl bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent transform group-hover:translate-z-2 transition-transform">
            ScenePodu
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/40 dark:bg-slate-800/40 px-3 py-1.5 rounded-2xl backdrop-blur-md border border-white/40 dark:border-white/10 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-500 p-[2px]">
              <div className="bg-slate-50 dark:bg-slate-900 w-full h-full rounded-full flex items-center justify-center">
                <User size={16} className="text-teal-600 dark:text-teal-400" />
              </div>
            </div>
            <span className="font-semibold text-sm pr-2 text-slate-800 dark:text-slate-200 tracking-wide">{session.username}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:text-slate-400 dark:hover:text-rose-400 dark:hover:bg-rose-500/10 rounded-2xl transition-all"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
