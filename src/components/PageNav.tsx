import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <ul className="flex items-center gap-16 list-none">
        <li>
          <NavLink to="/product" className="text-lg uppercase">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className="text-lg uppercase">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="text-lg uppercase bg-green-500 text-black px-4 py-2 rounded-md transition hover:bg-green-600"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
