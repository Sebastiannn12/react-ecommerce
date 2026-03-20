const products = [
  {
    id: 1,
    name: "Running Shoes",
    image: "https://via.placeholder.com/300x200",
    price: 1200,
    oldPrice: 1500, // Fixed: Standardized to camelCase
    rating: 4,
    discount: 20,
    category: "Clothing" // Added category
  },
  {
    id: 2,
    name: "Backpack",
    image: "https://via.placeholder.com/300x200",
    price: 900,
    oldPrice: 1100, // Fixed: was 'oldprice'
    rating: 5,
    discount: 15,
    category: "Accessories" // Added category
  },
  {
    id: 3,
    name: "Smart Watch",
    image: "https://via.placeholder.com/300x200",
    price: 2500,
    oldPrice: 3000, // Fixed: was 'oldprice'
    rating: 3,
    discount: 10,
    category: "Electronics" // Added category
  },
  {
    id: 4,
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/300x200",
    price: 1800,
    oldPrice: 2200,
    rating: 4,
    discount: 18,
    category: "Electronics" // Added category
  },
  {
    id: 5,
    name: "Laptop Bag",
    image: "https://via.placeholder.com/300x200",
    price: 1400,
    oldPrice: 1700,
    rating: 5,
    discount: 12,
    category: "Books" // Added category
  },
];

module.exports = products;