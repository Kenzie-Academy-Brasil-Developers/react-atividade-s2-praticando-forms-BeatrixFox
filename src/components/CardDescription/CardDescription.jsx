import "./CardDescription.css";

export const CardDescription = ({ person }) => {
  return (
    <section className="CardDescription-card">
      <h2 className="CardDescription-user">{person.user}</h2>
      <h3 className="CardDescription-name">{person.name}</h3>
      <h3 className="CardDescription-age">{person.age}</h3>
      <p className="CardDescription-cellphone">{person.cellphone}</p>
      <p className="CardDescription-job">{person.job}</p>
      <p className="CardDescription-email">{person.email}</p>
    </section>
  );
};
export default CardDescription;
