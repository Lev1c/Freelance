import photo from '../../assets/icon/Close_SM.png'

import React, { useState} from 'react';
import { remindPassword } from '../../http/userAPI';
import {observer} from "mobx-react-lite";
import errors from '../../assets/icon/error.png';
import { useTranslation } from 'react-i18next';

const ChangePass = observer(({activeTwo, setActiveTwo, setActive}) => {
    const { t } = useTranslation();
    const [login, setLogin] = useState("")
    const [infoMes, setInfoMes] = useState('')

    

    function change() {
        setActiveTwo(false)
        setActive(true)
    }
    
    const click = async () => {
        await remindPassword(login).then(data => setInfoMes(data)); 
    }

    let button
    if (infoMes.message === 'We have e-mailed your password reset link!') {
        button = <button className='disabled login-button reg-button' disabled onClick={click}>{t('modal.changePass.button-one')}</button>
    } else {
        button = <button className='login-button reg-button' onClick={click}>{t('modal.changePass.button-one')}</button>
    }
   
    return (
        <div className={activeTwo ? "login active" : "login"} onClick={() => setActiveTwo(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <span>{t('modal.changePass.button-one')}</span>
                    <button 
                        onClick={() => setActiveTwo(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <span>{t('modal.changePass.text-one')}</span>
                <div className="login-input mt-15">
                    <input 
                        className='login-input-modal' 
                        placeholder={t('modal.changePass.input-text-one')}
                        type="email"
                        value={login}
                        setValue={login}
                        onChange={(event)=> setLogin(event.target.value)}
                        required
                        name='email'
                    />
                    {infoMes &&
                      <p className= {
                            infoMes.status === false
                            ? 
                            "message-error-none" : 'message-error'
                        }
                        >
                            {infoMes.response.status === false && <> <img src={errors} alt='.' width={16}/>{infoMes.response.message}</>}
                    </p>
                    }
                    {infoMes &&
                      <p className= {
                            infoMes.status === true
                            ? 
                            "message-error-none" : 'message-error'
                        }
                        >
                            {infoMes.response.status === true && <>{infoMes.response.message}</>}
                    </p>
                    }

                </div>
                <div className='button-block-login'>
                   {button}
                    <span className='login-text-under'><button onClick={change}>{t('modal.changePass.link')}</button></span>
                </div>
            </div>
        </div>
        )
    }
)
export default ChangePass