import { NavLink } from "react-router-dom";
import "./CategoryList.css";

const myRoutes = [
  {
    id: 1,
    path: "/products/shirt",
    label: "Remeras",
  },
  {
    id: 2,
    path: "/products/tanktop",
    label: "Musculosas",
  },
  {
    id: 3,
    path: "/products/hoodie",
    label: "Buzos",
  },
  {
    id: 4,
    path: "/products/jacket",
    label: "Camperas",
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="categoryList">
        {myRoutes.map((route) => (
          <li key={route.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "currentCategory" : "categories"
              }
              to={route.path}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryList;
