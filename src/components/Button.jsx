import { Link } from "react-router-dom";

const Button = ({ type, text, className, to }) => {
  return (
    <Link to={to} className={`btn btn-${type ?? "primary"} ${className ?? ""}`}>
      {text}
    </Link>
  );
};

export default Button;
