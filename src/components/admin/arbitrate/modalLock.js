import photo from '../../../assets/icon/Close_SM.png'

import React, { useState} from 'react';
import {observer} from "mobx-react-lite";
import errors from '../../../assets/icon/error.png';
import { useTranslation } from 'react-i18next';
import { acceptCreditRequest, acceptInsuranceRequests, closeArbitrage, setUserLock } from '../../../http/adminApi';

const ModalLock = observer(({activeTwo, setActiveTwo, infoUserOne}) => {
    const { t } = useTranslation();
    const [login, setLogin] = useState("")
    const [infoMes, setInfoMes] = useState('')




   
    return (
        <div className={activeTwo ? "login active" : "login"} onMouseDown={() => setActiveTwo(false)}>
            <div className="login-block" onMouseDown={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveTwo(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Вы уверены в завершении арбитража ?</p>
                <div className='modal-block-button mt-15'>
                    <button className='modal-button-adm mr' onClick={() => {
                        closeArbitrage(infoUserOne).then(() => window.location.reload())
                    }}>Завершить</button>
                    <button className='modal-button-two' onClick={() => setActiveTwo(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalLock