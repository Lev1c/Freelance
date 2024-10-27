import photo from '../../../assets/icon/Close_SM.png'

import React from 'react';
import {observer} from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const Modal = observer(({modalActive, setModalActive}) => {
    const { t } = useTranslation();
    return (
        <div className={modalActive ? "login active" : "login"} onClick={() => setModalActive(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <span>{t('verif.modal.title-one')}</span>
                    <button 
                        onClick={() => setModalActive(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <span></span>
                    
                <div className="login-input mt-15">
                    <p>{t('verif.modal.text-one')}</p>
                    <p className='mt-15'>{t('verif.modal.text-two')}</p>
                    <ul className='ul-modal-verif'>
                        <li>{t('verif.modal.li-one')} </li>
                        <li>{t('verif.modal.li-two')}</li>
                        <li>{t('verif.modal.li-three')}</li>
                        <li>{t('verif.modal.li-fo')}</li>
                        <li>{t('verif.modal.li-five')}</li>
                        <li>{t('verif.modal.li-six')}</li>
                    </ul>
                    <p className='mt-15'>{t('verif.modal.under-text')}</p>
                </div>
                
            </div>
        </div>
        )
    }
)
export default Modal