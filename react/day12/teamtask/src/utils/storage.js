const USERS_KEY = "social_users";
const POSTS_KEY = "social_posts";
const SESSION_KEY = "social_session";

export const getFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Storage parsing error", error);
    return null;
  }
};

export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Storage setting error", error);
  }
};

export const getUsers = () => getFromStorage(USERS_KEY) || [];
export const setUsers = (users) => setToStorage(USERS_KEY, users);

export const getPosts = () => getFromStorage(POSTS_KEY) || [];
export const setPosts = (posts) => setToStorage(POSTS_KEY, posts);

export const getSession = () => getFromStorage(SESSION_KEY);
export const setSession = (userData) => setToStorage(SESSION_KEY, userData);
export const clearSession = () => localStorage.removeItem(SESSION_KEY);

export const likePost = (postId, username) => {
  const posts = getPosts();
  const updatedPosts = posts.map(post => {
    if (post.id === postId) {
      if (!post.likes.includes(username)) {
        post.likes.push(username);
      }
    }
    return post;
  });
  setPosts(updatedPosts);
  return updatedPosts;
};

export const deletePost = (postId) => {
  const posts = getPosts();
  const updatedPosts = posts.filter(post => post.id !== postId);
  setPosts(updatedPosts);
  return updatedPosts;
};

export const addComment = (postId, username, text) => {
  const posts = getPosts();
  const updatedPosts = posts.map(post => {
    if (post.id === postId) {
      if (!post.comments) post.comments = [];
      post.comments.push({
        id: Date.now().toString(),
        username,
        text,
        createdAt: new Date().toISOString()
      });
    }
    return post;
  });
  setPosts(updatedPosts);
  return updatedPosts;
};
