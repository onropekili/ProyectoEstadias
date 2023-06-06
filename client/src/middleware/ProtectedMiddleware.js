export const authMiddleware = (user, navigate, allowedRoles = []) => {
  if (!user) {
    navigate("/");
  } else {
    // Verificar si el usuario tiene un rol permitido
    if (allowedRoles.length > 0 && !allowedRoles.includes(user.tipo_usuario)) {
      navigate("/DashBoard_E"); // Redirigir si el rol no está permitido
    }
  }
};
