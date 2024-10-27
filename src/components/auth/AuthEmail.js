import React, {useState } from 'react';
import {confirmEmail} from '../../http/userAPI';
import {observer} from "mobx-react-lite";
import errors from '../../assets/icon/error.png';

const AuthEmail = observer(() => {
    const [code, setCode] = useState()
    const [infoMes, setInfoMes] = useState('')

    const click = async () => {
        await confirmEmail(code).then(data => setInfoMes(data)); 
    }

    let button
    if (infoMes && infoMes.message === 'Неверный код') {
        button = <button className='login-button email-auth-button' onClick={click}>Продолжить</button>
        window.location.replace("/profile");
    } else {
        button = <button className='login-button email-auth-button' onClick={click}>Продолжить</button>
    }
    console.log(infoMes)
    return (
        <div className="auth-pass">
            <div className="auth-pass-block">
                <div className="login-text">
                    <span>Подтверждение почты</span>
                </div>
                <span></span>
                <div className="mt-15">

                </div>
                <div className="login-input mt-15">
                   <input 
                        className={infoMes && infoMes.response.message === 'Неверный код'  ? 'login-input-modal-error' : 'login-input-modal' }
                        placeholder="Введите код" 
                        type="login"
                        value={code}
                        setValue={code}
                        onChange={(event)=> setCode(event.target.value)}
                        name="login"
                        required
                    />
                    {infoMes &&
                      <p className=
                        {
                            infoMes.message === 'Неверный код' 
                            || 
                            infoMes.status === false
                            ? 
                            "message-error-none" : 'message-error'
                        }>
                            {infoMes.response.status === false && <> <img src={errors} alt='.' width={16}/>{infoMes.response.message}</>}
                    </p>
                    }
                </div>
                <div className='button-block-login'>
                    {button}
                </div>
            </div>
        </div>
        )
    }
)
export default AuthEmail