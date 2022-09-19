import Emojes from "../../Components/Emojes";
import { DivHome, DivHomeInfoInfo, TryButton } from "./styles";
import { useHistory } from "react-router-dom";


const HomePage = () => {
    let history = useHistory();
    function handleClick() {
    history.push("/login");
    }
  return (
    <DivHome>
      <DivHomeInfoInfo>
        <h1>INSIDE OUT</h1>
        <p>COLOQUE TODOS OS SENTIMENTOS QUE ESTÃO DENTRO DE VOCÊ PARA FORA.</p>
        <TryButton onClick={handleClick}>EXPERIMENTAR</TryButton>
      </DivHomeInfoInfo>
      <div>
        <Emojes />
      </div>
    </DivHome>
  );
};

export default HomePage;
