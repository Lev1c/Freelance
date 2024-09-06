import photo from '../../../assets/icon/Close_SM.png'

import React, { useState} from 'react';
import {observer} from "mobx-react-lite";
import errors from '../../../assets/icon/error.png';
import { useTranslation } from 'react-i18next';
import { removeSubTaskCategories, setTaskCategoriesModerate, setUserLock } from '../../../http/adminApi';

const ModalDelete = observer(({activeSeven, setActiveSeven, infoUserThree}) => {
    const { t } = useTranslation();
    const [login, setLogin] = useState("")
    const [infoMes, setInfoMes] = useState('')


    return (
        <div className={activeSeven ? "login active" : "login"} onMouseDown={() => setActiveSeven(false)}>
            <div className="login-block" onMouseDown={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveSeven(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Вы уверены в удалении навыка?</p>
                <div className='modal-block-button mt-15'>
                    <button className='modal-button-adm mr' onClick={() => {
                        removeSubTaskCategories(infoUserThree).then(() => window.location.reload())
                    }}>Удалить</button>
                    <button className='modal-button-two' onClick={() => setActiveSeven(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalDelete