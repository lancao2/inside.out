import Emojes from "../../Components/Emojes";
import { DivHome } from "../home/styles";
import { DivForm, Button, Input } from "./styles";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, } from '@fortawesome/free-solid-svg-icons'

const LoginPage = () =>{

    let history = useHistory();
    function handleClick() {
    history.push("/register");
    }

    return(
        <DivHome>
            <Emojes/>
            <DivForm action="submit">
                <h1>Login</h1>
                <Input><FontAwesomeIcon color="#0494E5" icon={faEnvelope}/><input type="text" placeholder="E-mail" /></Input>
                <Input><FontAwesomeIcon color="#0494E5" icon={faLock}/><input type="password" placeholder="Password"/></Input>
                <div className="buttons"><Button>Entrar</Button></div>
                <p>Não tem conta?<a className="singin" onClick={handleClick}>Cadastre-se!</a></p>
                <span>Este site não pede informações pessoais nem de pagamento </span>
            </DivForm>
        </DivHome>
    )
}

export default LoginPage
