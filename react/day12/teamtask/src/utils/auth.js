import { getUsers, setUsers, setSession, clearSession, getSession } from "./storage";

export { getSession };

export const registerUser = (username, email, password) => {
  const users = getUsers();
  
  if (users.some(u => u.username === username || u.email === email)) {
    throw new Error("User with this username or email already exists");
  }

  const newUser = { username, email, password, createdAt: new Date().toISOString() };
  users.push(newUser);
  setUsers(users);
  
  return newUser;
};

export const loginUser = (usernameOrEmail, password) => {
  const users = getUsers();
  const user = users.find(
    u => (u.username === usernameOrEmail || u.email === usernameOrEmail) && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Remove password from session
  const { password: _, ...sessionData } = user;
  setSession(sessionData);
  return sessionData;
};

export const logoutUser = () => {
  clearSession();
};
