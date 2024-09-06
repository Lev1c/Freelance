import RateOption from "./rateOption";
import WindowBuy from "./windowBuy";
import photo from '../../../assets/icon/Arrow_Right_LG.png'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTariffs, getWallet, payTariff } from "../../../http/walletApi";


const Main = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getTariffs().then(data => setResponse(data))
      getWallet().then(data => setResponse2(data)).finally(() => setLoading(false))
    },[])

    const [response, setResponse] = useState()
    const [response2, setResponse2] = useState()
    const [response3, setResponse3] = useState()
    const [value, setValue] = useState('0 откликов');
    const [cost, setCost] = useState(0);
    const [tariffIdd, setTariffIdd] = useState()
    if (response2 && response2 === 403) {
      window.location.replace('/')
    }
    if (loading) {
      return   
    }
    const click = () => {
      payTariff(tariffIdd).then(data => setResponse3(data))
      
    }
    if(response3 && (response3.status === true)) {
      window.location.replace('/wallet')
    }

    return (
      <div className="container">
        <div className="container-chat-two">
            <Link to={'/wallet'} className="link-rate"><img src={photo} alt="." width={36}/></Link>
            <div className="container-rate">
                <RateOption 
                  response={response}
                  setValue={setValue}
                  setTariffIdd={setTariffIdd}
                  setCost={setCost}
                />
                <WindowBuy click={click} cost={cost} value={value} response={response} response2={response2} response3={response3}/>
            </div>
        </div>  
      </div>
    );
}
export default Main;