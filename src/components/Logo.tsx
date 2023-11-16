import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img className="h-14" src="/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
