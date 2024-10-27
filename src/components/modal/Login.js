import React, { useState, useRef, useEffect } from 'react';
import { login } from '../../http/userAPI';
import { observer } from 'mobx-react-lite';

import closeIcon from '../../assets/icon/Close_SM.png';
import errors from '../../assets/icon/error.png';
import calendarIcon from '../../assets/icon/Calendar.png';
import eyeIcon from '../../assets/icon/icon-eye.png';
import { Link, useNavigate } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../../utils/consts';
import { useTranslation } from 'react-i18next';

export const Login = observer(({active, setActive, setActiveTwo}) => {
    const { t } = useTranslation();
    const [loginn, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')
    const [modalActivePassword, setModalActivePassword] = useState(true)
    const inputRef2 = useRef(null);

    const navigate = useNavigate();

    const handleModalButtonClick = () => {
        setModalActivePassword(!modalActivePassword);
    };

    function change() {
        setActive(false)
        setActiveTwo(true)
    }

    function direct() {
        setActive(false)
    }

	const click = async () => {
		try {
			await login(loginn, password)
            .then(data => {
                setError(data)
                localStorage.setItem('acting_token', data.response.token)
                localStorage.setItem('token', data.response.token)
                
            })
		} catch (e) {

        }
	}
    
    let infoUser = localStorage.getItem('info')
    let acting_token = localStorage.getItem('acting_token')

    let parseInfoUser
    if (infoUser !== 'undefined') {
        parseInfoUser = JSON.parse(infoUser)
    }

    let tok = localStorage.getItem('token')
    if (tok === 'undefined' || infoUser === 'undefined') {
        localStorage.removeItem('info')
        localStorage.removeItem('token')
    }

    if (error && error.response.status === true) {
        window.location.reload()
        if(acting_token || !tok) {
            window.location.replace('/registration')
        } 

    }
    // eslint-disable-next-line


    useEffect(() => {
        // eslint-disable-next-line
        if (acting_token &&
            // eslint-disable-next-line
            parseInfoUser && parseInfoUser.name === '' 
            // eslint-disable-next-line
            || parseInfoUser && parseInfoUser.surname === '' 
            ) 
            {
            navigate(REGISTRATION_ROUTE)
            setActive(false)
        } 
    // eslint-disable-next-line
    },[])

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            click();
        }
      };
      const handleInputKeyDown1 = (event) => {
        if (event.key === 'Enter') {
          inputRef2.current.focus();
        }
      };
    


    return (
        
        <div className={active ? "login active" : "login"} onClick={() => setActive(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <span>{t('modal.login.title')}</span>
                    <button 
                        onClick={() => setActive(false)} 
                        className='button-login-modal'
                    >
                        <img src={closeIcon} alt='' width={24}/>
                    </button>
                </div>
                <div className="login-input">
                    <input 
                        className={error && error.response.message ? 'login-input-modal-error': 'login-input-modal'} 
                        placeholder={t('modal.login.text-input-one')} 
                        type="login"
                        value={loginn}
                        setValue={loginn}
                        onChange={(event)=> setLogin(event.target.value)}
                        name="login"
                        required
                        onKeyDown={handleInputKeyDown1}
                    />
                    {error &&
                      <p className=
                        {
                            error.message === 'Не указан пароль' 
                            || 
                            error.message === 'Пароль должен быть не менее 8-ми знаков, содержать цифры, заглавные и прописные буквы'  
                            ||
                            error.status === false
                            ? 
                            "message-error-none" : 'message-error'
                        }>
                            {error.response.status === false &&<> <img src={errors} alt='.' width={16}/>{error.response.message}</>}
                    </p>
                    }
                    <input 
                        className='login-input-modal' 
                        placeholder={t('modal.login.text-input-two')} 
                        type={modalActivePassword ? "password" : "text"}
                        value={password}
                        setValue={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        required
                        ref={inputRef2}
                        onKeyDown={handleInputKeyDown}
                    />
                    <button className="login-img" onClick={handleModalButtonClick}>
                      <img width={24} src={modalActivePassword ? calendarIcon : eyeIcon} alt="Show/Hide password" />
                    </button>
                    <button className='button-password' onClick={change}>{t('modal.login.button-one')} </button>
                </div>
                <div className='button-block-login'>
                    <button className='login-button' onClick={click}>{t('modal.login.button-two')}</button>
                    <span className='login-text-under'>{t('modal.login.text')} <Link to='/registration' className='link-reg-login' onClick={direct}>{t('modal.login.link')}</Link></span>
                </div>
            </div>
            
        </div>
       
    )
}
)
export default Login