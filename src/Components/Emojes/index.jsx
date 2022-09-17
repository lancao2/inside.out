import happyMoji from "../../img/happy.svg"
import angryMoji from "../../img/Angry.svg"
import sadMoji from "../../img/sad.svg"
import tenseMoji from "../../img/tense.svg"
import fineMoji from "../../img/fine.svg"
import flirtyMoji from "../../img/flirty.svg"

const Emojes = () => {
    return (
        <div>
            <img src={happyMoji} alt="Emoje feliz" />
            <img src={angryMoji} alt="Emoje Raiva" />
            <img src={sadMoji} alt="Emoje Triste" />
            <img src={tenseMoji} alt="Emoje Tenso" />
            <img src={fineMoji} alt="Emoje Normal" />
            <img src={flirtyMoji} alt="Emoje Apaixonado" />
        </div>
    )
}

export default Emojes