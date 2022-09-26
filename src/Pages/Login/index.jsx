import Emojes from "../../Components/Emojes";
import { DivHome } from "../home/styles";
import { DivForm, Button, Input } from "./styles";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Loginschema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("email is required")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    password: yup.string().required("Password is required").min(6),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Loginschema),
  });

  let history = useHistory();
  function handleClick() {
    history.push("/register");
  }

  return (
    <DivHome>
      <Emojes />
      <DivForm onSubmit={handleSubmit(e=> console.log(e))}>
        <h1>Login</h1>
        {!errors.email ? (
          <Input>
            <FontAwesomeIcon color="#0494E5" icon={faEnvelope} />
            <input {...register("email")} type="text" placeholder="E-mail" />
          </Input>
        ) : (
          <Input error={true}>
            <FontAwesomeIcon color="red" icon={faEnvelope} />
            <input
              {...register("email")}
              type="text"
              placeholder={errors.email?.message}
            />
          </Input>
        )}
        {!errors.password ? <Input>
          <FontAwesomeIcon color="#0494E5" icon={faLock} />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </Input>: <Input error={true}>
          <FontAwesomeIcon color="red" icon={faLock} />
          <input
            {...register("password")}
            type="password"
            placeholder={errors.password?.message}
          />
        </Input>}
        
        <div className="buttons">
          <Button>Entrar</Button>
        </div>
        <p>
          Não tem conta?
          <a className="singin" onClick={handleClick}>
            Cadastre-se!
          </a>
        </p>
        <span>Este site não pede informações pessoais nem de pagamento </span>
      </DivForm>
    </DivHome>
  );
};

export default LoginPage;
