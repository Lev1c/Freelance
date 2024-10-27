import photo from '../../../assets/icon/Close_SM.png'

import React, { useState,} from 'react';
import {observer} from "mobx-react-lite";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { addExecutorExperience } from '../../../http/profileApi';
import { useTranslation } from 'react-i18next'

export const ModalExperienceModal = observer(({active, setActive,}) => {
    const { t } = useTranslation();
    const [nameExperience, setNameExperience] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState('')
    const [dateTwo, setDateTwo] = useState('')
    const [response, setResponse] = useState('')
    

	const click = async () => {
            await addExecutorExperience(nameExperience,description ,date, dateTwo)
            .then(response => setResponse(response))    
	}
    if(response && response.response.status === true) {
        window.location.reload()
    }
    return (
        
        <div className={active ? "login active" : "login"} onClick={() => setActive(false)}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <span>{t('profile.experience.title-two')}</span>
                    <button 
                        onClick={() => setActive(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='' width={24}/>
                    </button>
                </div>
                <div className="modal-input">
                    <div className="modal-block-edit">
                        <input 
                            className='login-input-modal' 
                            placeholder={t('profile.experience.text-input-one')} 
                            type="text"
                            value={nameExperience}
                            setValue={nameExperience}
                            onChange={(event)=> setNameExperience(event.target.value)}
                            required
                        />
                    </div>
                    <div className="modal-block-edit">
                        <textarea 
                            className="textarea-two" 
                            placeholder={t('profile.experience.text-input-two')} 
                            type='text'
                            value={description}
                            setValue={description}
                            onChange={(event)=> setDescription(event.target.value)}
                        />
                    </div>
                    <div className="modal-block-edit input-block-edit mt-30">
                        <DatePicker 
                            showIcon
                            type="text"
                            id="datepicker"
                            selected={date} 
                            maxDate={new Date()}
                            locale={ru}
                            onChange={(dateFormat) => setDate(dateFormat)} 
                            dateFormat="dd.MM.yyyy"
                            placeholderText={t('profile.experience.text-input-three')} 
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            name="test"
                            novalidate
                            autoComplete="off"
                        />
                    </div>
                    <div className="modal-block-edit input-block-edit">
                        <DatePicker 
                            showIcon
                            type="text"
                            id="datepicker"
                            selected={dateTwo} 
                            maxDate={new Date()}
                            locale={ru}
                            onChange={(dateFormat) => setDateTwo(dateFormat)} 
                            dateFormat="dd.MM.yyyy"
                            placeholderText={t('profile.experience.text-input-fo')} 
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            name="test"
                            novalidate
                            autoComplete="off"
                        />
                    </div> 
                </div>
                <div className='button-block-login'>
                    <button id='ches' className='login-button' onClick={click}>{t('profile.experience.add')} </button>
                </div>
            </div>
        </div>
       
    )
}
)
export default ModalExperienceModal