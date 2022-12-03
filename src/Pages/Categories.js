// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Categories() {
//   const [categories, getCategories] = useState([]);

//   const PRO_URL = "https://fakestoreapi.com/categorys";
//   useEffect(() => {
//     fetch(`${PRO_URL}/categories`)
//       .then((res) => res.json())
//       .then((data) => getCategories(data));
//   }, []);

//   return (
//     <>
//       {categories.map((category) => {
//         return (
//           <div
//               key={category.id}
//               className="card m-2"
//               style={{ width: "18rem" }}
//             >
//               <img
//                 src={category.image}
//                 className="card-img-top"
//                 alt={category.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{category.title}</h5>
//                 <p className="card-text">{category.price}</p>
//               </div>
//               <div className="card-body btns">
//                 <div>
//                   <Link
//                     to={`/category/${category.id}`}
//                     className="card-link btn btn-info"
//                   >
//                     Details
//                   </Link>
//                 </div>
//                 <div>
//                   <button type="button" className="btn btn-success">
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//         );
//       })}
//     </>
//   );
// }

// export default Categories;
