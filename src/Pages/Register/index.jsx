import Emojes from "../../Components/Emojes";
import { DivHome } from "../home/styles";
import { DivForm, Input, Button } from "../Login/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

const RegisterPage = () => {

    let history = useHistory();
    function handleClick() {
    history.push("/login");
    }

    return(
        <DivHome>
            <DivForm>
                <Input><FontAwesomeIcon color="#0494E5" icon={faUser}/><input type="text" placeholder="Usuario"/></Input>
                <Input><FontAwesomeIcon color="#0494E5" icon={faEnvelope}/><input type="text" placeholder="Email"/></Input>
                <Input><FontAwesomeIcon color="#0494E5" icon={faLock}/><input type="text" placeholder="Password"/></Input>
                <Input><FontAwesomeIcon color="#0494E5" icon={faLock}/><input type="text" placeholder="Comfirm Password"/></Input>
                <div className="buttons">
                <Button>Registrar-se</Button>
                <Button className="back" onClick={handleClick}><FontAwesomeIcon color="#ffffff" icon={faArrowLeft}/></Button>
                </div>
            </DivForm>
            <Emojes/>
        </DivHome>
    )
}

export default RegisterPage