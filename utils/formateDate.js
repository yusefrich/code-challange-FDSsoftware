export const formaterDayForAAAA_MM_DD = (day) => {
  const ano = day.getFullYear();
  const mes = String(day.getMonth() + 1).padStart(2, '0');
  const diaDoMes = String(day.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${diaDoMes}`;
}