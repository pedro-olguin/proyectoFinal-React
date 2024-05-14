import { NavLink } from "react-router-dom";
import "../styles/CategoryList.css";

const Rutas = [
  { path: "/", label: "Home" },
  { path: "/Categoria/Lomos", label: "Lomos" },
  { path: "/Categoria/Hamburguesas", label: "Hamburguesas" },
  { path: "/Categoria/Pizzas", label: "Pizzas" },
];
function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        {Rutas.map((ruta) => (
          <li key={ruta.path}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryList;
