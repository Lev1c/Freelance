import photo from '../../../assets/icon/Close_SM.png'

import React, { useState} from 'react';
import {observer} from "mobx-react-lite";

import { setUserModeratorComment } from '../../../http/adminApi';

const ModalComment = observer(({activeFo, setActiveFo, infoUserOne}) => {

    const [login, setLogin] = useState("")


    return (
        <div className={activeFo ? "login active" : "login"} onMouseDown={() => setActiveFo(false)}>
            <div className="login-block" onMouseDown={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveFo(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Задать комментарий</p>
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
                        setUserModeratorComment(login, infoUserOne).then(() => window.location.reload())
                    }}>Отправить</button>
                    <button className='modal-button-two' onClick={() => setActiveFo(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalComment