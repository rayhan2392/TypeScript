type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};
