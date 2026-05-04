import { useState } from 'react';
import { Heart, Trash2, MessageCircle, Music, Send } from 'lucide-react';
import { deletePost, likePost, addComment } from '../utils/storage';

const Post = ({ post, onPostUpdate }) => {
  const session = JSON.parse(localStorage.getItem('social_session') || '{}');
  const [isLiking, setIsLiking] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  if (!session.username) return null;

  const currentUsername = session.username;
  const hasLiked = post.likes?.includes(currentUsername);
  const isOwner = post.username === currentUsername;
  const comments = post.comments || [];

  const handleLike = () => {
    if (hasLiked || isLiking) return;
    setIsLiking(true);
    
    likePost(post.id, currentUsername);
    if(onPostUpdate) onPostUpdate();
    
    setTimeout(() => setIsLiking(false), 300);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post.id);
      if(onPostUpdate) onPostUpdate();
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(post.id, currentUsername, commentText);
    setCommentText('');
    if(onPostUpdate) onPostUpdate();
  };

  const timeAgo = (dateStr) => {
    const seconds = Math.floor((new Date() - new Date(dateStr)) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hr ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " min ago";
    return "just now";
  };

  return (
    <div className="glass-panel-3d w-full mb-8 overflow-hidden transition-all group">
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-fuchsia-400 to-purple-500 p-[2px] shadow-sm shadow-fuchsia-500/20 transform-gpu translate-z-10 animate-float-3d" style={{animationDuration: '10s'}}>
            <div className="bg-slate-50 dark:bg-slate-900 w-full h-full rounded-full flex items-center justify-center font-bold text-lg text-fuchsia-700 dark:text-fuchsia-400">
              {post.username.charAt(0).toUpperCase()}
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-800 dark:text-slate-100 text-[15px]">{post.username}</div>
            <div className="text-xs font-medium text-slate-500 opacity-80">{timeAgo(post.createdAt)}</div>
          </div>
        </div>
        {isOwner && (
          <button onClick={handleDelete} className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-full transition-all opacity-0 group-hover:opacity-100" title="Delete Post">
            <Trash2 size={18} />
          </button>
        )}
      </div>

      {post.caption && (
        <div className="px-5 pb-3 pt-0 text-slate-800 dark:text-slate-200 text-base font-medium leading-relaxed">
          {post.caption}
        </div>
      )}

      {/* Image */}
      {post.imageUrl && (
        <div className="w-full bg-slate-100/50 dark:bg-slate-800/50 max-h-[550px] flex items-center justify-center overflow-hidden border-y border-white/20 dark:border-white/5">
          <img 
            src={post.imageUrl} 
            alt="Post content" 
            className="w-full h-auto object-cover max-h-[550px] transition-transform duration-700 hover:scale-[1.02]"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      )}

      {/* Audio Player if song exists */}
      {post.songUrl && (
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800/50 bg-fuchsia-50/50 dark:bg-fuchsia-900/10 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 font-semibold text-sm">
            <Music size={16} className="animate-bounce" />
            <span>{post.songName || 'Playing Audio'}</span>
          </div>
          <audio controls className="w-full h-10 outline-none">
            <source src={post.songUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      {/* Footer / Actions */}
      <div className="p-4 px-5">
        <div className="flex items-center gap-6 mb-2">
          <button 
            onClick={handleLike} 
            disabled={hasLiked}
            className={`flex items-center gap-2 transition-all active:scale-90 ${hasLiked ? 'text-rose-500' : 'text-slate-500 dark:text-slate-400 hover:text-rose-500'}`}
          >
            <Heart size={24} className={hasLiked ? "fill-rose-500" : ""} />
            <span className="font-bold text-sm tracking-wide">{post.likes?.length || 0}</span>
          </button>
          
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-fuchsia-500 transition-all active:scale-95"
          >
            <MessageCircle size={24} className={showComments ? "fill-fuchsia-500/20 text-fuchsia-500" : ""} />
            <span className="font-bold text-sm tracking-wide">{comments.length}</span>
          </button>
        </div>
        
        {/* Comments Section */}
        {showComments && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 animate-in slide-in-from-top-2 fade-in duration-200 transform-gpu translate-z-10">
            {comments.length > 0 ? (
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
                {comments.map((c) => (
                  <div key={c.id} className="flex gap-2.5 items-start">
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-200 shrink-0">{c.username}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-2xl rounded-tl-sm w-full font-medium shadow-sm border border-white/40 dark:border-white/5">{c.text}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400 mb-4 font-medium italic">No comments yet. Be the first!</p>
            )}
            
            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="input-field py-2 text-sm flex-1 bg-white/60 dark:bg-slate-900/60"
              />
              <button 
                type="submit" 
                disabled={!commentText.trim()}
                className="btn-primary py-2 px-4 !rounded-xl active:scale-95 transition-transform"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
