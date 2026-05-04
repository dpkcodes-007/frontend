import { useState } from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import { loginUser, getSession } from '../utils/auth';
import { User, Lock, LogIn, Sparkles } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  if (getSession()) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.identifier || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 600)); 
      loginUser(formData.identifier, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-3xl animate-float-3d"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl animate-float-3d" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="glass-panel-3d max-w-md w-full p-8 relative z-10 transition-transform hover:-translate-y-1">
        <div className="text-center mb-8 hidden sm:block">
          <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-fuchsia-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 transform rotate-12 shadow-xl shadow-fuchsia-500/30 group animate-float-3d">
            <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-all duration-300">
              <Sparkles className="text-white fill-white/20" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight transform-gpu translate-z-10">Welcome to ScenePodu</h1>
          <p className="text-fuchsia-200 mt-2">Gethu kaata ulle va</p>
        </div>

        {message && (
          <div className="mb-6 p-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl text-sm font-medium text-center">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-6 p-3 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 rounded-2xl text-sm font-medium text-center shadow-inner shadow-rose-200/50">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group">
            <User className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
            <input
              type="text"
              name="identifier"
              placeholder="Username or Email"
              value={formData.identifier}
              onChange={handleChange}
              className="input-field pl-12"
            />
          </div>
          
          <div className="relative group">
            <Lock className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field pl-12"
            />
          </div>

          <button type="submit" disabled={isLoading} className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 mt-8 text-lg font-bold tracking-wide">
            <LogIn size={20} />
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-teal-600 hover:text-teal-500 dark:text-teal-400 transition-colors underline decoration-teal-500/30 underline-offset-4 hover:decoration-teal-500">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
