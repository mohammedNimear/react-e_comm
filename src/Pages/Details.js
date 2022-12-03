import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details(props) {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const PRO_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(`${PRO_URL}/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.category}</p>
              <p className="card-text">
                <small className="text-muted">${product.price}</small>
              </p>
              <div>
                  <button type="button" className="btn btn-outline-success">
                    Add To Cart
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
//style={{max-width: "540px"}}
