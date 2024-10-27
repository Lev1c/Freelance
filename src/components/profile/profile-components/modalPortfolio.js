import photo from '../../../assets/icon/Close_SM.png'

import React from 'react';
import {observer} from "mobx-react-lite";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

export const ModalPortfolio = observer(({active, setActive,response}) => {
    const { t } = useTranslation();
    return (
        
        <div className={active ? "login active" : "login"} onClick={() => setActive(false)} key={response.portfolioId}>
            <div className="login-block" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <div className='block-login-exit'>
                        <span>{response.nameProject}</span>
                        <button 
                            onClick={() => setActive(false)} 
                            className='button-login-modal'
                        >
                            <img src={photo} alt='' width={24}/>
                        </button>
                    </div>
                    
                    <div>
                        <Link className='button-title mr' to={'/profile/edit-work/' + response.portfolioId}>{t('profile.portfolio.title')}</Link>
                    </div>
                </div>
                <div className="mb">
                    <span>
                        {response.descriptionProject}
                    </span>
                </div>
                <div className='button-block-login'>
                    {response.photo1 && <img className='img-modal-portf' src={`http://194.67.113.55/` + response.photo1}  height={185} alt='.'/>}
                    {response.photo2 && <img className='img-modal-portf' src={`http://194.67.113.55/` + response.photo2}  height={185} alt='.'/>}
                    {response.photo3 && <img className='img-modal-portf' src={`http://194.67.113.55/` + response.photo3}  height={185} alt='.'/>}
                </div>
            </div>
        </div>
       
    )
}
)
export default ModalPortfolio