import photo from '../../../assets/icon/Close_SM.png'

import React, { useEffect, useState,} from 'react';
import {observer} from "mobx-react-lite";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {removeExecutorEducation, setExecutorEducation } from '../../../http/profileApi';
import { useTranslation } from 'react-i18next'


export const ModalEducationModalEdit = observer(({activeTwo, setActiveTwo, responsee}) => {
    const { t } = useTranslation();
    const [nameExperience, setNameExperience] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState('')
    const [dateTwo, setDateTwo] = useState('')
    const [response, setResponse] = useState('')
    

	const click = async () => {
        await setExecutorEducation(nameExperience,description ,date, dateTwo, responsee.educationId)
        .then(response => setResponse(response))    
	}
    const clickDelete = async () => {
        await removeExecutorEducation(responsee.educationId)
        .then(response => setResponse(response))   
    }

    if(response && response.response.status === true) {
        window.location.reload()
    }

    useEffect(() => {
      if (responsee) {
        setNameExperience(responsee.nameEducation);
        setDescription(responsee.descriptionEducation);
        setDate(new Date(responsee.startEducation));
        setDateTwo(new Date(responsee.endEducation));
      }
    }, [responsee]);
    return (
        
        <div className={activeTwo ? "login active" : "login"} onMouseDown={() => setActiveTwo(false)}>
            <div className="login-block" onMouseDown={e => e.stopPropagation()}>
                <div className="login-text">
                    <div className='exp-title'>
                        <span>{t('profile.education.title-three')}</span>
                        <button 
                            onClick={() => setActiveTwo(false)} 
                            className='button-login-modal'
                        >
                            <img src={photo} alt='' width={24}/>
                        </button>
                    </div>
                    <button className='button-title mt' onClick={clickDelete}>{t('profile.education.delete')}</button>
                </div>
                <div className="login-input">
                    <div className="modal-block-edit">
                        <input 
                            className='login-input-modal' 
                            placeholder={t('profile.education.text-input-one')}
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
                            placeholder={t('profile.education.text-input-two')}
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
                            placeholderText={t('profile.education.text-input-three')}
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            name="test"
                            novalidate
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
                            placeholderText={t('profile.education.text-input-fo')}
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            name="test"
                            novalidate
                        />
                    </div> 
                </div>
                <div className='button-block-login'>
                    <button id='ches' className='login-button' onClick={click}>{t('profile.addWork.save')}</button>
                </div>
            </div>
        </div>
       
    )
}
)
export default ModalEducationModalEdit