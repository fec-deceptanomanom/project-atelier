const getRoundedRating = (ratings) => {
  let ratingSum = 0;
  let ratingQuantity = 0;
  for (const [key, value] of Object.entries(ratings)) {
    ratingSum += (Number(key) * Number(value));
    ratingQuantity += Number(value);
  }
  return (Math.round((ratingSum / ratingQuantity) * 4) / 4).toFixed(2);
};

const reviews = {
  "reviews": {
    "product_id": "47421",
    "ratings": { "1": "3", "4": "6", "5": "5" }
  },
  product: {
    name: 'test2',
    category: 'test2',
    price: 'test2',
  }
}
const stars = getRoundedRating;

export { reviews, stars }