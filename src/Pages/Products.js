import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products(props) {
  const PRO_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategoris] = useState([]);

  const getProducts = () => {
    fetch(PRO_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const getCategoris = () => {
    fetch(`${PRO_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  };

  function productsByCat(catName) {
    fetch(`${PRO_URL}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  console.log(products);

  useEffect(() => {
    getProducts();
    getCategoris();
  }, []);

  return (
    <div className="container">
      <h3 className="my-3">Our Awesome Products </h3>
      <button
        onClick={() => {
          getProducts();
        }}
        className="btn btn-outline-primary m-1"
      >
        All Products
      </button>
      {categories.map((cat) => {
        return (
          <button
            onClick={() => {
              productsByCat(cat);
            }}
            key={cat}
            type="button"
            className="btn btn-outline-primary m-1"
          >
            {cat}
          </button>
        );
      })}
      <div className="row">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="card m-2"
              style={{ width: "18rem" }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.rating.rate}</p>
              </div>
              <div className="card-body btns">
                <div>
                  <Link
                    to={`/product/${product.id}`}
                    className="card-link btn btn-outline-info"
                  >
                    Details
                  </Link>
                </div>
                <div>
                  <button type="button" className="btn btn-outline-success">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
