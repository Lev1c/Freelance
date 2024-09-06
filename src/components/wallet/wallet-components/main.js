import { useEffect, useState } from "react";
import Balance from "./balance";
import History from "./history";
import Rate from "./rate";
import { getWallet } from "../../../http/walletApi";
import { ClipLoader } from "react-spinners";
const Main = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getWallet()
      .then((data) => setInfo(data))
      .finally(() => setLoading(false))
    }, []);
    
    const [info, setInfo] = useState("");

    if(info && info === 403) {
      window.location.replace('/')
    }

    const [activeButton, setAvtiveButton] = useState(false)
    const [selectedValue, setSelectedValue] = useState('all');
    
    if (loading) {
      return (
        <div className="loader">
          <div className='block-loader'>
            <ClipLoader size={20} color={'#646464'}/>
          </div>
        </div>
      )
    }

    const handleButtonClick = (value) => {
      setSelectedValue(value);
    };
    let listWork = info
    
    if (selectedValue === "all") {
      // new Date(listWork.wallet.date) - new Date(listWork.wallet.date)
      
    } 
    if (selectedValue === "accession") {
      //  listWork.wallet.balnce > 0
    } 
    if (selectedValue === "write-offs") {
      // listWork.wallet.balnce < 0
    }

    let listWorked = listWork
    
    const click = () => {
      setAvtiveButton(true)
    }
    const clickTwo = () => {
      setAvtiveButton(false)
    }
    return (
      <div className="height-main-wallet">
        <div className="none-mt container-chat">
            <Balance listWorked={listWorked} />
            <History 
              listWorked={listWorked} 
              listWork={listWork}
              click={click}
              clickTwo={clickTwo}
              activeButton={activeButton}
              selectedValue={selectedValue}
              handleButtonClick={handleButtonClick}
            />
            <Rate listWorked={listWorked} />
        </div>
        <div className="container-chat-mobile">
            <div className="block-side-wallet">
              <Balance listWorked={listWorked} />
              <Rate listWorked={listWorked} />
            </div>
            <History 
              listWorked={listWorked} 
              listWork={listWork}
              click={click} 
              activeButton={activeButton}
              selectedValue={selectedValue}
              handleButtonClick={handleButtonClick}
            />
        </div>
      </div>
    );
}
export default Main;