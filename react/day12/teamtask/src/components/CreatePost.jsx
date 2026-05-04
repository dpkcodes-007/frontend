import { useState } from 'react';
import { Image as ImageIcon, Send, Music2 } from 'lucide-react';
import { getPosts, setPosts } from '../utils/storage';

const SAMPLE_SONGS = [
  { name: 'None', url: '' },
  { name: 'Lofi Chill', url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3' },
  { name: 'Upbeat Pop', url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=upbeat-pop-113804.mp3' },
  { name: 'Piano Dreams', url: 'https://cdn.pixabay.com/download/audio/2022/10/18/audio_31c80f4fec.mp3?filename=piano-dreams-122424.mp3' }
];

const CreatePost = ({ onPostCreated }) => {
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageUrlInput, setShowImageUrlInput] = useState(false);
  const [showSongInput, setShowSongInput] = useState(false);
  const [selectedSong, setSelectedSong] = useState(SAMPLE_SONGS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!caption.trim() && !imageUrl.trim()) return;

    const session = JSON.parse(localStorage.getItem('social_session') || '{}');
    const newPost = {
      id: Date.now().toString(),
      username: session.username,
      caption: caption.trim(),
      imageUrl: imageUrl.trim(),
      songUrl: selectedSong.url,
      songName: selectedSong.name !== 'None' ? selectedSong.name : '',
      likes: [],
      comments: [],
      createdAt: new Date().toISOString()
    };

    const posts = getPosts();
    setPosts([newPost, ...posts]);
    
    setCaption('');
    setImageUrl('');
    setSelectedSong(SAMPLE_SONGS[0]);
    setShowImageUrlInput(false);
    setShowSongInput(false);
    
    if (onPostCreated) {
      onPostCreated();
    }
  };

  return (
    <div className="glass-panel-3d w-full p-5 mb-8 hover:shadow-2xl hover:border-fuchsia-500/20 transition-all duration-300">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-fuchsia-400 to-purple-500 p-[2px] shrink-0 mt-1 shadow-md shadow-fuchsia-500/20">
            <div className="bg-slate-50 dark:bg-slate-900 w-full h-full rounded-full flex items-center justify-center font-bold text-lg text-fuchsia-700 dark:text-fuchsia-400">
              {JSON.parse(localStorage.getItem('social_session') || '{"username":"U"}').username.charAt(0).toUpperCase()}
            </div>
          </div>
          <div className="flex-1 w-full">
            <textarea
              className="w-full bg-transparent border-0 focus:ring-0 resize-none outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 min-h-[70px] text-lg font-medium"
              placeholder="What's your vibe today?"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            
            {showImageUrlInput && (
              <div className="mt-3 relative group">
                <input
                  type="url"
                  className="input-field py-2 text-sm shadow-sm"
                  placeholder="Paste image URL here..."
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
            )}

            {showSongInput && (
              <div className="mt-3 relative">
                <select 
                  className="input-field py-2 text-sm shadow-sm appearance-none cursor-pointer"
                  value={selectedSong.name}
                  onChange={(e) => setSelectedSong(SAMPLE_SONGS.find(s => s.name === e.target.value))}
                >
                  {SAMPLE_SONGS.map(song => (
                    <option key={song.name} value={song.name}>{song.name}</option>
                  ))}
                </select>
                <Music2 className="absolute right-4 top-2.5 text-fuchsia-500 pointer-events-none" size={16} />
              </div>
            )}

            {imageUrl && !showImageUrlInput && (
              <div className="mt-4 relative rounded-2xl overflow-hidden max-h-64 border border-white/20 shadow-md">
                <img src={imageUrl} alt="Preview" className="w-full object-cover" />
                <button 
                  type="button"
                  onClick={() => setImageUrl('')}
                  className="absolute top-3 right-3 bg-slate-900/40 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-rose-500/80 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
            
            {selectedSong.name !== 'None' && !showSongInput && (
              <div className="mt-3 flex items-center gap-2 bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 px-3 py-1.5 rounded-xl text-sm font-medium border border-fuchsia-200/50 dark:border-fuchsia-500/20 inline-flex">
                <Music2 size={14} className="animate-pulse" />
                <span>{selectedSong.name}</span>
                <button type="button" onClick={() => setSelectedSong(SAMPLE_SONGS[0])} className="ml-2 hover:text-rose-500">×</button>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-3 mt-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowImageUrlInput(!showImageUrlInput)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm border border-transparent ${showImageUrlInput || imageUrl ? 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100 dark:bg-fuchsia-500/10 dark:text-fuchsia-400 dark:border-fuchsia-500/20' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <ImageIcon size={18} />
              <span className="hidden sm:inline">Photo</span>
            </button>
            <button
              type="button"
              onClick={() => setShowSongInput(!showSongInput)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm border border-transparent ${showSongInput || selectedSong.name !== 'None' ? 'text-purple-600 bg-purple-50 border-purple-100 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Music2 size={18} />
              <span className="hidden sm:inline">Music</span>
            </button>
          </div>
          
          <button
            type="submit"
            disabled={!caption.trim() && !imageUrl.trim()}
            className="btn-primary py-2 px-6 flex items-center gap-2 rounded-full"
          >
            <span className="mt-0.5">Post</span>
            <Send size={16} className="-mr-1" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
