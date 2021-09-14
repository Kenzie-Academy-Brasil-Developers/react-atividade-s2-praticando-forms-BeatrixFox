import { Link } from "react-router-dom";
import CardDescription from "../CardDescription/CardDescription";
import "./CardColection.css";

export const CardColection = ({ filesUser }) => {
  return (
    <div className="CardDescription-container">
      {filesUser.map((person, index) => (
        <div key={index}>
          <CardDescription person={person} />
        </div>
      ))}
      <div className="CardDescription-link">
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
};

export default CardColection;
