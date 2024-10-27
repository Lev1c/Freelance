import React, { useEffect, useState } from 'react';
import closeIcon from '../../../assets/icon/Close_SM.png';
import { getMyOrders, offerOrder } from '../../../http/orderApi';
import { useTranslation } from 'react-i18next';

const ModalOffer = ({active, setActive, idUser,nameUser}) => {
    const { t } = useTranslation();
    const [work,setWork] = useState();
    const [reply, setReply] = useState()
    useEffect(() => {
        getMyOrders().then(data => setWork(data))
    },[])

    const workReady = work && work.order.filter(res => res.status === '1')
    
    const hanldeSend = (orderId) => {
        offerOrder(orderId, idUser).then(data => setReply(data))
    }
    if(reply && reply.status === true) {
        window.location.replace('/chat')
    }
    return (
        <div className={active ? "login active" : "login"} onClick={() => setActive(false)}>
            <div className="login-block order" onClick={e => e.stopPropagation()}>
                <div className="login-text">
                    <div className='header-order-modal'>
                        <span>{t('specialists.modal.one')}</span>
                        <span>{t('specialists.modal.two')} {nameUser}</span>
                    </div>
                    <button 
                        onClick={() => setActive(false)} 
                        className='button-login-modal'
                    >
                        <img src={closeIcon} alt='' width={24}/>
                    </button>
                </div>
                <div className="list-order-modal">
                    {work && workReady.map(res => {
                        return (
                            <div className='block-list-order-modal'>
                                <h3>{res.name}</h3>
                                <button className='list-spec-button' onClick={() => hanldeSend(res.orderId)}>{t('specialists.modal.three')}</button>
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </div>
        )
}

export default ModalOffer