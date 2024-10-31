import photo from '../../../assets/icon/Close_SM.png'

import React, { useState} from 'react';
import {observer} from "mobx-react-lite";
import { addSubTaskCategories } from '../../../http/adminApi';

const ModalSubAdd = observer(({activeSix, setActiveSix, infoUserOne}) => {

    const [login, setLogin] = useState("")

   
    return (
        <div className={activeSix ? "login active" : "login"} onClick={() => setActiveSix(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveSix(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Добавить навык</p>
                <div className="login-input">
                    <input 
                        className='login-input-modal mt-15'
                        placeholder="Введите текст"
                        type="login"
                        value={login}
                        setValue={login}
                        onChange={(event)=> setLogin(event.target.value)}
                        name="login"
                    />
                </div>
                <div className='modal-block-button mt-15'>
                    <button className='modal-button-adm mr' onClick={() => {
                        addSubTaskCategories(login, infoUserOne).then(() => window.location.reload())
                    }}>Отправить</button>
                    <button className='modal-button-two' onClick={() => setActiveSix(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalSubAdd