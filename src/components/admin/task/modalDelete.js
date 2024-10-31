import photo from '../../../assets/icon/Close_SM.png'

import React from 'react';
import {observer} from "mobx-react-lite";
import { useTranslation } from 'react-i18next';
import { removeSubTaskCategories } from '../../../http/adminApi';

const ModalDelete = observer(({activeSeven, setActiveSeven, infoUserThree}) => {
    // eslint-disable-next-line
    const { t } = useTranslation();

    return (
        <div className={activeSeven ? "login active" : "login"} onClick={() => setActiveSeven(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
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