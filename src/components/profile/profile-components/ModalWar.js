import photo from '../../../assets/icon/Close_SM.png'

import React from 'react';
import {observer} from "mobx-react-lite";


const ModalWar = observer(({modalActive, setModalActive}) => {
    
    return (
        <div className={modalActive ? "login active" : "login"} onClick={() => setModalActive(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setModalActive(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <span></span>
                    
                <div className="login-input mt-15">
                    <p>После замены ФИО мы заново попросим вас пройти верификацию</p>
                </div>
                <div className='button-block-login mt-15'>
                    <button className='login-button verif-button' onClick={() => setModalActive(false)} >Ок</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalWar