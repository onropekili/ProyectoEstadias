
export const setDateFormat = (date) => {
  const opciones = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = new Date(date).toLocaleDateString(
    "es-ES",
    opciones
  );
  return formatedDate;
}

export const setDateFormatDDMMYY = (date) => {
  const formatedDate = new Date(date);
   const day = String(formatedDate.getDate()).padStart(2, '0');
    const month = String(formatedDate.getMonth() + 1).padStart(2, '0');
    const year = String(formatedDate.getFullYear()).slice(-2);
    const stringDate = `${day}/${month}/${year}`;
    return stringDate;
}