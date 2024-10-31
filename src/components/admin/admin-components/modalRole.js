import photo from '../../../assets/icon/Close_SM.png'

import React, { useState} from 'react';
import {observer} from "mobx-react-lite";
import { setUserSystemRole } from '../../../http/adminApi';

const ModalRole = observer(({activeFive, setActiveFive, infoUserOne}) => {

    const arOptions = [
        { "id": 1, "name": "Пользователь" },
        { "id": 2, "name": "Кредитный менеджер" },
        { "id": 3, "name": "Страховой менеджер" },
        { "id": 4, "name": "Менеджер верификации" },
        { "id": 5, "name": "Администратор" }
      ];
      
      const [valueId, setValueId] = useState(0); // Значение по умолчанию

      const handleChange = (e) => {
        const selectedValue = parseInt(e.target.value, 10); // Преобразовываем строку в число
        setValueId(selectedValue);
      };

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
                <p>Вы уверены в изменении роли пользователя?</p>
               
                <select value={valueId} onChange={handleChange} className='edit-title-select-two mt-15'>
                    {arOptions.map((text) => (
                        <option key={text.id} value={text.id}>{text.name}</option>
                    ))}
                </select>
                <div className='modal-block-button mt-15'>
                    <button className='modal-button-adm mr' onClick={() => {
                        setUserSystemRole(infoUserOne, valueId).then(() => {window.location.reload()})
                    }}>Изменить</button>
                    <button className='modal-button-two' onClick={() => setActiveFive(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalRole