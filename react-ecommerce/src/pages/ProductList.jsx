import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    oldPrice: 70000,
    price: 63000,
    discount: 15,
    rating: 4,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    oldPrice: 1000,
    price: 799,
    discount: 20,
    rating: 5,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    oldPrice: 1499,
    price: 999,
    discount: 40,
    rating: 4,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Wireless Earphones",
    oldPrice: 599,
    price: 349,
    discount: 30,
    rating: 4,
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    name: "Wired Gaming Mouse",
    oldPrice: 799,
    price: 549,
    discount: 33,
    rating: 4,
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    oldPrice: 1000,
    price: 839,
    discount: 24,
    rating: 5,
    image: "/images/product6.jpg",
  },
  {
    id: 7,
    name: "Monitor",
    oldPrice: 3000,
    price: 2209,
    discount: 40,
    rating: 5,
    image: "/images/product7.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <h2 className="mb-3">All Products</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
