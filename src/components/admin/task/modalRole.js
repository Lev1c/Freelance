import photo from '../../../assets/icon/Close_SM.png'

import React, { useState} from 'react';
import {observer} from "mobx-react-lite";

import { addTaskCategories} from '../../../http/adminApi';

const ModalRole = observer(({activeFive, setActiveFive, infoUserOne}) => {

    const [login, setLogin] = useState("")

    return (
        <div className={activeFive ? "login active" : "login"} onClick={() => setActiveFive(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveFive(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Добавить категорию</p>
               
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
                        addTaskCategories(login).then(() => {window.location.reload()})
                    }}>Добавить</button>
                    <button className='modal-button-two' onClick={() => setActiveFive(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalRole