export const AuthMiddleware = (user, navigate) => {
  if (!user) {
    console.log(user);
    navigate('/');
  }
};
