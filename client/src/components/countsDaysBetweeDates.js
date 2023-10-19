const moment = require("moment");
/**
 * Cuenta los días de la semana que hay entre dos fechas
 * @param {Date} fechaInicialSinFormato
 * @param {Date} fechaFinalSinFormato
 * @param {Number} diaDeLaSemana
 * @returns {number}
 * @description Esta función hace el conteo de cuantas veces se repite un día de la semana entre dos fechas dadas
 * @example contarDiasDeLaSemana('2021-01-01', '2021-01-31', 'Lun') // 5
 */
const contarDiasDeLaSemana = (
  fechaInicialSinFormato,
  fechaFinalSinFormato,
  diaDeLaSemana
) => {
  const fechaInicialConFormato = formatearfechas(fechaInicialSinFormato);
  const fechaFinalConFormato = formatearfechas(fechaFinalSinFormato);
  let inicio = moment(fechaInicialConFormato);
  const fin = moment(fechaFinalConFormato);
  let contador = 0;

  while (inicio.isSameOrBefore(fin)) {
    if (inicio.day() === diccionarioDaysOfWeek.get(diaDeLaSemana)) {
      contador++;
    }
    inicio.add(1, "day");
  }

  return contador;
};

/**
 * @param {Time} fechaSinFormato
 * @description Esta función formatea la fecha a la mostrada al usuario
 * @returns {String}
 */
const formatearfechas = (fechaSinFormato) => {
  const fecha = new Date(fechaSinFormato);
  const anio = fecha.getFullYear();
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
  const dia = fecha.getDate().toString().padStart(2, "0");
  const fechaFormateada = `${anio}-${mes}-${dia}`;

  return fechaFormateada;
};

const diccionarioDaysOfWeek = new Map();
diccionarioDaysOfWeek.set("Lun", 1);
diccionarioDaysOfWeek.set("Mar", 2);
diccionarioDaysOfWeek.set("Mie", 3);
diccionarioDaysOfWeek.set("Jue", 4);
diccionarioDaysOfWeek.set("Vie", 5);
diccionarioDaysOfWeek.set("Sab", 6);
diccionarioDaysOfWeek.set("Dom", 0);

module.exports = { contarDiasDeLaSemana };