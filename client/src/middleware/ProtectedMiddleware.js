export const AuthMiddleware = (user, navigate) => {
  if (!user) {
    navigate('/');
  }
};
