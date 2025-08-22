import ProductCard from "../components/ProductCard";
import Pic from "../assets/laptop.webp";
import Pic2 from "../assets/Phone.webp";
import Pic3 from "../assets/headphone.webp";
import Pic4 from "../assets/Watch2.jpg";
import Pic5 from "../assets/Tablet.webp";
import Pic6 from "../assets/Speaker.webp";
import Pic7 from "../assets/GamingMouse.webp";
import Pic8 from "../assets/Monitor.webp";
import Pic9 from "../assets/Camera.jpg";
import Pic10 from "../assets/Gamingconsole.jpg";
import Pic11 from "../assets/PowerBank.jpg";
import Pic12 from "../assets/Router.jpg";
import Pic13 from "../assets/Printer.jpg";
import Pic14 from "../assets/Portabledrive.jpg";
import Pic15 from "../assets/Projector.jpg";

export const products = [
  {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    category: "Computers & Laptops",
    price: 999.99,
    description:
      "Powerful laptop with Intel i7, 16GB RAM, and 512GB SSD for work and gaming.",
    image: Pic,
    rating: 4.5,
    numReviews: 120,
    countInStock: 15,
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "Samsung",
    category: "Mobile & Accessories",
    price: 499.99,
    description:
      "Latest smartphone with AMOLED display, 128GB storage, and fast charging.",
    image: Pic2,
    rating: 4.3,
    numReviews: 240,
    countInStock: 30,
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    id: 3,
    name: "Headphones",
    brand: "Sony",
    category: "Audio",
    price: 199.99,
    description:
      "Noise-cancelling over-ear headphones with superior sound quality.",
    image: Pic3,
    rating: 4.6,
    numReviews: 180,
    countInStock: 20,
    warranty: "6 Months Warranty",
  },
  {
    id: 4,
    name: "Smartwatch",
    brand: "Noise",
    category: "Wearables",
    price: 299.99,
    description: "Smartwatch with health tracking, GPS, and water resistance.",
    image: Pic4,
    rating: 4.7,
    numReviews: 150,
    countInStock: 25,
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    id: 5,
    name: "Tablet",
    brand: "Apple",
    category: "Tablets",
    price: 399.99,
    description:
      "10-inch tablet with 64GB storage, perfect for entertainment and work.",
    image: Pic5,
    rating: 4.2,
    numReviews: 100,
    countInStock: 18,
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    brand: "JBL",
    category: "Audio",
    price: 149.99,
    description:
      "Portable Bluetooth speaker with deep bass and waterproof design.",
    image: Pic6,
    rating: 4.4,
    numReviews: 220,
    countInStock: 40,
    warranty: "6 Months Warranty",
  },
  {
    id: 7,
    name: "Gaming Mouse",
    brand: "Logitech",
    category: "Gaming Accessories",
    price: 49.99,
    description:
      "High-precision gaming mouse with customizable buttons and RGB lighting.",
    image: Pic7,
    rating: 4.5,
    numReviews: 90,
    countInStock: 35,
    warranty: "1 Year Warranty",
  },
  {
    id: 8,
    name: "Monitor",
    brand: "LG",
    category: "Computers & Laptops",
    price: 299.99,
    description:
      "27-inch Full HD monitor with slim design and eye care technology.",
    image: Pic8,
    rating: 4.4,
    numReviews: 75,
    countInStock: 12,
    warranty: "3 Years Manufacturer Warranty",
  },
  {
    id: 9,
    name: "DSLR Camera",
    brand: "Canon",
    category: "Cameras",
    price: 799.99,
    description: "DSLR camera with 24.2MP sensor and 4K video recording.",
    image: Pic9,
    rating: 4.6,
    numReviews: 110,
    countInStock: 10,
    warranty: "2 Years Manufacturer Warranty",
  },
  {
    id: 10,
    name: "Gaming Console",
    brand: "Sony PlayStation",
    category: "Gaming",
    price: 499.99,
    description:
      "Next-gen gaming console with 4K support and ultra-fast loading.",
    image: Pic10,
    rating: 4.8,
    numReviews: 300,
    countInStock: 8,
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    id: 11,
    name: "Power Bank",
    brand: "Mi",
    category: "Mobile & Accessories",
    price: 49.99,
    description: "10000mAh power bank with fast charging and dual USB output.",
    image: Pic11,
    rating: 4.3,
    numReviews: 200,
    countInStock: 50,
    warranty: "6 Months Warranty",
  },
  {
    id: 12,
    name: "WiFi Router",
    brand: "TP-Link",
    category: "Networking",
    price: 79.99,
    description: "Dual-band WiFi router with high speed and wide coverage.",
    image: Pic12,
    rating: 4.2,
    numReviews: 85,
    countInStock: 22,
    warranty: "3 Years Manufacturer Warranty",
  },
  {
    id: 13,
    name: "Printer",
    brand: "HP",
    category: "Office Electronics",
    price: 199.99,
    description:
      "All-in-one wireless printer with scanning and copying features.",
    image: Pic13,
    rating: 4.1,
    numReviews: 60,
    countInStock: 15,
    warranty: "1 Year Manufacturer Warranty",
  },
  {
    id: 14,
    name: "Portable Hard Drive",
    brand: "Seagate",
    category: "Storage",
    price: 89.99,
    description:
      "1TB portable hard drive with fast transfer speeds and slim design.",
    image: Pic14,
    rating: 4.5,
    numReviews: 140,
    countInStock: 28,
    warranty: "2 Years Manufacturer Warranty",
  },
  {
    id: 15,
    name: "Projector",
    brand: "Epson",
    category: "Home Entertainment",
    price: 299.99,
    description: "HD projector with 3500 lumens brightness and long lamp life.",
    image: Pic15,
    rating: 4.3,
    numReviews: 95,
    countInStock: 9,
    warranty: "1 Year Manufacturer Warranty",
  },
];

const Shop = () => {
  return (
    <div className="p-8 shadow-xl bg-white rounded-lg">
    <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </div>
  );
};
export default Shop;
