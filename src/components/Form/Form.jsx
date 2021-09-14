import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Form.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Form = ({ users }) => {
  const [filesUser, setFilesUser] = useState([]);
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    validEmail: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido")
      .oneOf([yup.ref("email"), null], "emails divergentes"),
    name: yup
      .string()
      .required("Nome obrigatório")
      .max(18, "Ultrapassou o limite maximo de 18 caracteres"),
    user: yup
      .string()
      .required("Nome de User obrigatório")
      .max(10, "Tem que ter no max 10 caracteres"),
    cellphone: yup.string().required("Telefone obrigatório"),
    age: yup
      .number()
      .required("Idade obrigatório")
      .min(18, "Idade minima exigida é de 18 anos"),
    job: yup.string().required("Profissão obrigatório"),
    status: yup.string().notRequired(),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
        "Sua senha tem que ter 8 caracteres de comprimento , uma letra maiúscula , um caractere especial (!@#$&*), um numero , uma letra minúscula"
      ),
    validPassword: yup
      .string()
      .required("Confirmação necessária")
      .oneOf([yup.ref("password"), null], "senhas divergentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setFilesUser([...filesUser, data]);
    users.push(data);
    history.push("/cards");
  };

  return (
    <div className="container">
      <h3>Formulário</h3>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="*User" {...register("user")} />
        <input placeholder="*Nome" {...register("name")} />
        <input placeholder="*Email" {...register("email")} />
        <input
          placeholder="*Confirmação de email"
          {...register("validEmail")}
        />
        <input placeholder="*Senha" {...register("password")} />
        <input
          placeholder="*Confirmação de senha"
          {...register("validPassword")}
        />
        <input placeholder="*Telefone" {...register("cellphone")} />
        <input placeholder="*Idade" {...register("age")} />
        <input placeholder="*Profissão" {...register("job")} />
        <input placeholder="Estado civil" {...register("status")} />
        <section className="messages-err">
          <p>{errors.user?.message}</p>
          <p>{errors.name?.message}</p>
          <p>{errors.email?.message}</p>
          <p>{errors.validPassword?.message}</p>
          <p>{errors.password?.message}</p>
          <p>{errors.cellphone?.message}</p>
          <p>{errors.age?.message}</p>
          <p>{errors.job?.message}</p>
          <p>{errors.status?.message}</p>
        </section>

        <button type="submit">Enviar!</button>
      </form>
      <section>
        <Link to="/cards">Ir para user registrados</Link>
      </section>
    </div>
  );
};

export default Form;
