import photo from '../../assets/icon/Close_SM.png'

import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import { useParams } from 'react-router-dom';
import { setReactionOrder } from '../../http/orderApi';
import error from '../../assets/icon/error.png'
import { useTranslation } from 'react-i18next';

const ResponseToTask = observer(({active, setActive}) => {
    const { t } = useTranslation();
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const {id} = useParams()
    const [response,setResponse] = useState('')
    const click = async () => {
        await setReactionOrder(id,price, description).then(data => setResponse(data));
        
    };
    if(response && response.status === true) {
        window.location.reload()
    }
    return (
        <div className={active ? "response active" : "response"} onMouseDown={() => setActive(false)}>
            <div className="response-block" onMouseDown={e => e.stopPropagation()}>
                <div className="login-text">
                    <span>{t('modal.toTask.title')}</span>
                    <button 
                        onClick={() => setActive(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>   
                <span>{t('modal.toTask.text-one')}</span>    
                <div className="login-input-two mt">
                    <input 
                        className='login-input-modal-two' 
                        placeholder="0 ₸" 
                        type="text"
                        value={price}
                        setValue={price}
                        onChange={(event)=> setPrice(event.target.value)}
                        required
                        name='text'
                    />
                    {response &&
                      <p className=
                        {response.message === '' || response.message === ''  || response.status === true
                        ? "message-error-none" : 'message-error'
                        }><img src={error} alt='.' width={16}/>{response.message}
                    </p>
                    }
                </div>
                <span>{t('modal.toTask.text-two')}</span>    
                <div className="login-input-two mt">
                    <textarea 
                        className="textarea-two search-two" 
                        placeholder={t('modal.toTask.input-text')}
                        value={description}
                        setValue={description}
                        onChange={(event)=> setDescription(event.target.value)}
                    />
                </div>
                <div className='button-block-login'>
                    <button className='login-button verif-button' onClick={click}>{t('modal.toTask.button')}</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ResponseToTask