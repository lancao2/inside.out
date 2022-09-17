import Emojes from "../../Components/Emojes"
import { DivHomeInfo, DivHomeInfo_Info } from "./styles"
const HomePage = () => {
return(
    <DivHomeInfo>
        <DivHomeInfo_Info>
            <h1>INSIDE OUT</h1>
            <p>COLOQUE TODOS OS SENTIMENTOS QUE ESTÃO DENTRO DE VOCÊ PARA FORA.</p>
            <button>EXPERIMENTAR</button>
        </DivHomeInfo_Info>
        <div>
            <Emojes/>
        </div>
    </DivHomeInfo>
)
}

export default HomePage