
export const setDateFormat = (date) => {
  const opciones = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = new Date(date).toLocaleDateString(
    "es-ES",
    opciones
  );
  return formatedDate;
}