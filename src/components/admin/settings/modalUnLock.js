import photo from '../../../assets/icon/Close_SM.png'

import React from 'react';
import {observer} from "mobx-react-lite";
import { setUserUnLock } from '../../../http/adminApi';

const ModaUnlLock = observer(({activeThree, setActiveThree, infoUserOne}) => {

    return (
        <div className={activeThree ? "login active" : "login"} onClick={() => setActiveThree(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveThree(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Вы уверены в разблокировке пользователя?</p>
                <div className='modal-block-button mt-15'>
                    <button className='modal-button-adm mr' onClick={() => setUserUnLock(infoUserOne).then(() => window.location.reload())}>Разблокировать</button>
                    <button className='modal-button-two' onClick={() => setActiveThree(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModaUnlLock