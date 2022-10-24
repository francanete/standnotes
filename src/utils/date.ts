export const getDayAndNumber = (date: string) => {
  const day = new Date(date).toLocaleString("en-US", { weekday: "long" });
  const number = new Date(date).toLocaleString("en-US", { day: "numeric" });
  const month = new Date(date).toLocaleString("en-US", { month: "long" });
  return `${day}, ${number} ${month}`;
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
};
