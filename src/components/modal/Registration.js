import closeIcon from '../../assets/icon/Close_SM.png';
import calendarIcon from '../../assets/icon/Calendar.png';
import eyeIcon from '../../assets/icon/icon-eye.png';

import React, { useState} from 'react';
import { registration } from '../../http/userAPI';
import {observer} from "mobx-react-lite";

const Registration = observer(({activeThree, setActiveThree, setActive}) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [phone, setNumber] = useState("")
    const [surname, setSurname] = useState("")
    const [name, setName] = useState("")
    const [patronymic, setPatronymic] = useState("")
    const [error, setError] = useState('', null)
    const [modalActivePassword, setModalActivePassword] = useState(true)
    const [modalActivePasswordConf, setModalActivePasswordConf] = useState(true)

    const passwordsMatch = password === password1;
    // eslint-disable-next-line 
    const isButtonEnabled = passwordsMatch && password1 !== '';

    const handlePassword1Change = (event) => setPassword(event.target.value);
    const handlePassword2Change = (event) => setPassword1(event.target.value);

    const handleModalButtonClick = () => {
        setModalActivePassword(!modalActivePassword);
    };

    const handleModalButtonClickTwo = () => {
        setModalActivePasswordConf(!modalActivePasswordConf);
    };

    function change() {
        setActiveThree(false)
        setActive(true)
    }
    
    
    const click = async () => {
        try {
            await registration(email, password, phone, surname, name, patronymic).then(e => setError(e));
        } catch (e) {

        }
    }
    if (error.access_token) {
        setActiveThree(false)
        setActive(true)
    } else {

    }
    return (
        <div className={activeThree ? "login active" : "login"} onClick={() => setActiveThree(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <span>Регистрация</span>
                    <button 
                        onClick={() => setActiveThree(false)} 
                        className='button-login-modal'
                    >
                        <img src={closeIcon} alt='.'/>
                    </button>
                </div>
                <div className="login-input">
                    <div className='input-reg-check'>
                        <div className='label-radio'>
                            <input id="radio-1" type='radio' name='name1'/>
                            <label htmlFor="radio-1">Я исполнитель</label>
                        </div>
                        <div className='label-radio'>
                            <input id="radio-2" type='radio' name='name1'/>
                            <label htmlFor="radio-2">Я заказчик</label>
                        </div>
                    </div>
                    {error && <p className='error-red'>{error.surname}</p> }
                    <input 
                        className='login-input-modal' 
                        placeholder="Фамилия" 
                        type="text"
                        value={surname}
                        setValue={surname}
                        onChange={(event)=> setSurname(event.target.value)}
                        required
                    />
                    {error &&<p className='error-red'>{error.name}</p> }
                    <input 
                        className='login-input-modal' 
                        placeholder="Имя" 
                        type="text"
                        value={name}
                        setValue={name}
                        onChange={(event)=> setName(event.target.value)}
                        required
                    />
                    {error &&<p className='error-red'>{error.patronymic}</p> }
                    <input 
                        className='login-input-modal' 
                        placeholder="Отчевство" 
                        type="text"
                        value={patronymic}
                        setValue={patronymic}
                        onChange={(event)=> setPatronymic(event.target.value)}
                        required
                    />
                    {error &&<p className='error-red'>{error.email}</p> }
                    <input 
                        className='login-input-modal' 
                        placeholder="Электронная почта" 
                        type="email"
                        value={email}
                        setValue={email}
                        onChange={(event)=> setEmail(event.target.value)}
                        required
                        name='email'
                    />
                    {error &&<p className='error-red'>{error.phone}</p> }
                    <input 
                        className='login-input-modal' 
                        placeholder="Телефон" 
                        type="text"
                        value={phone}
                        setValue={phone}
                        onChange={(event)=> setNumber(event.target.value)}
                        required
                    />
                    {error &&<p className='error-red'>{error.password}</p> }
                    <input 
                        className='login-input-modal' 
                        placeholder="Пароль" 
                        type={modalActivePassword ? "password" : "text"}
                        value={password}
                        setValue={password}
                        onChange={handlePassword1Change}
                        required
                    />
                    <button className="login-img" onClick={handleModalButtonClick}>
                      <img width={24} src={modalActivePassword ? calendarIcon : eyeIcon} alt="Show/Hide password" />
                    </button>
                    <input 
                        className='login-input-modal' 
                        placeholder="Подтверждение пароля" 
                        type={modalActivePasswordConf ? "password" : "text"}
                        value={password1} 
                        onChange={handlePassword2Change} 
                    />
                    <button className="login-img" onClick={handleModalButtonClickTwo}>
                      <img width={24} src={modalActivePasswordConf ? calendarIcon : eyeIcon} alt="Show/Hide password" />
                    </button>
                    <div class="checkbox">
                    <input 
                        type='checkbox' 
                        className="list-filter-input" 
                        id="checkbox_1"
                        required
                    />
                    <label htmlFor="checkbox_1" className="checkbox__label checkbox-reg">Отправляя данные я соглашаюсь <a className='link-reg' href='/'>с политикой конфиденциальности</a></label>
                    </div>
                </div>
                <div className='button-block-login'>
                    <button className='login-button reg-button' onClick={click}>Зарегистрироваться</button>
                    <span className='login-text-under' >Есть аккаунт? <button onClick={change}>Войти</button></span>
                </div>
            </div>
        </div>
        )
    }
)
export default Registration