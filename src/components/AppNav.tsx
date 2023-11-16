import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div className="mt-8 mb-4">
      <ul className="flex list-none rounded-md bg-gray-800">
        <li>
          <NavLink
            className="block uppercase text-sm font-semibold rounded-md px-4 py-2"
            to="cities"
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block uppercase text-sm font-semibold rounded-md px-4 py-2"
            to="countries"
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
