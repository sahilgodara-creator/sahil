const products = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" }
];

function App() {
  const [filter, setFilter] = React.useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter);

  return (
    <div className="container">
      <h1>Product Filter</h1>

      <div className="filter-box">
        <label>Filter by:</label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p className="price">${product.price}</p>
            <span className={product.category}>
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
