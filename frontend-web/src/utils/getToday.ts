/**
 * @return yy.mm.dd
 */
const getToday = () => {
  const date = new Date();

  const year = String(date.getFullYear()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}.${month}.${day}`;
};

export { getToday };
