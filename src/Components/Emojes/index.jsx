import happyMoji from "../../img/happy.svg"
import angryMoji from "../../img/Angry.svg"
import sadMoji from "../../img/sad.svg"
import tenseMoji from "../../img/tense.svg"
import fineMoji from "../../img/fine.svg"
import flirtyMoji from "../../img/flirty.svg"
import { DivMojis } from "./styles"

const Emojes = () => {
    return (
        <DivMojis>
            <img className="happy" src={happyMoji} alt="Emoje feliz" />
            <img className="angry" src={angryMoji} alt="Emoje Raiva" />
            <img className="flirty" src={flirtyMoji} alt="Emoje Apaixonado" />
            <img className="sad" src={sadMoji} alt="Emoje Triste" />
            <img className="tense" src={tenseMoji} alt="Emoje Tenso" />
            <img className="fine" src={fineMoji} alt="Emoje Normal" />
        </DivMojis>
    )
}

export default Emojes