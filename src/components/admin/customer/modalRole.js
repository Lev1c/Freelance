import photo from '../../../assets/icon/Close_SM.png'

import {observer} from "mobx-react-lite";

const ModalRole = observer(({activeFive, setActiveFive, infoUserOne,photoPassport,selfPhotoPassport,attorney,taxPayer,taxpayerReg}) => {

    return (
        <div className={activeFive ? "login active" : "login"} onClick={() => setActiveFive(false)}>
            <div className="login-block modal-adm" onClick={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Фотографии</span>
                    <button 
                        onClick={() => setActiveFive(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <div>
                    <h3>Фотография паспорта</h3>
                    {photoPassport ? <img src={`http://194.67.113.55/` + photoPassport} alt='.'/> : <p>отсутствует</p> }
                    <h3>фото селфи с паспортом</h3>
                    {selfPhotoPassport ? <img src={`http://194.67.113.55/` + selfPhotoPassport} alt='.'/> : <p>отсутствует</p> }
                    <h3>Скан доверенности</h3>
                    {attorney ? <img src={`http://194.67.113.55/` + attorney} alt='.'/> : <p>отсутствует</p> }
                    <h3>Свидетельства о постановке на учёт</h3>
                    {taxPayer ? <img src={`http://194.67.113.55/` + taxPayer} alt='.'/> : <p>отсутствует</p> }
                    <h3>Свидетельства о регистрации</h3>
                    {taxpayerReg ? <img src={`http://194.67.113.55/` + taxpayerReg} alt='.'/> : <p>отсутствует</p> }
                </div>
            </div>
        </div>
        )
    }
)
export default ModalRole