import avloniy from "../img/avloniy.png";
import cardNaqishLG from "../img/cardNaqishLG.svg"
import cardNaqishSM from "../img/cardNaqishSM.svg"

export default function Katalog(){
    return(
        <div className="katalog">
            <div className="katalog-item">
                <div className="item-img">
                    <img src={avloniy} alt="dfbkj sjhdf" />
                </div>
                <div className="item-text">
           
                </div>
                <img className="cardNaqishLG" src={cardNaqishLG} alt="" />
                <img className="cardNaqishSM" src={cardNaqishSM} alt="" />
            </div>
        </div>
    )
}