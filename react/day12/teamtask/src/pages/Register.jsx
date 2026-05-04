import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../utils/auth';
import { User, Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      registerUser(formData.username, formData.email, formData.password);
      navigate('/login', { state: { message: 'Registration successful! Please login.' } });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-float-3d"></div>
        <div className="absolute top-40 -left-10 w-[400px] h-[400px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-float-3d" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="glass-panel-3d max-w-md w-full p-8 relative z-10 transition-transform hover:-translate-y-1">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4 transform-gpu translate-z-10 animate-float-3d">
            <Sparkles className="text-fuchsia-400" size={40} />
          </div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-2 tracking-tight transform-gpu translate-z-10">Join ScenePodu</h1>
          <p className="text-fuchsia-200 font-medium">Create an account and podu scene.</p>
        </div>

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
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="input-field pl-12"
            />
          </div>
          
          <div className="relative group">
            <Mail className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
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
            {isLoading ? 'Creating account...' : 'Create Account'}
            {!isLoading && <ArrowRight size={20} />}
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-600 hover:text-teal-500 dark:text-teal-400 transition-colors underline decoration-teal-500/30 underline-offset-4 hover:decoration-teal-500">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
