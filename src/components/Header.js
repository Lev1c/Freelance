import React, { useState, useContext, useEffect } from 'react';

import Auth from './modal/Login';
import {Context, changeLanguage} from "../index";
import {observer} from 'mobx-react-lite';

import photo from '../assets/icon/cash_money_payment.png'
import photo2 from '../assets/icon/Mail.png'
import photo9 from '../assets/icon/settings.png'
import photo8 from '../assets/icon/Bell_Notification.png'
import logout from '../assets/icon/logout.png'


import photo5 from '../assets/icon/User_01.png'
import photo6 from '../assets/icon/Menu_Alt_01.png'
import photo7 from '../assets/icon/close.png'
import ChangePass from './modal/ChangePass';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalHeader from './modal/ModalHeader';
import { getEvents } from '../http/profileApi';
import { getAdminNotify } from '../http/adminApi';
import { animateScroll as scroll } from "react-scroll";

const Header = observer(() => {
    const [modalActive, setModalActive] = useState(false)
    const [modalActiveTwo, setModalActiveTwo] = useState(false)
    const [modalHeader, setModalHeader] = useState(false)
    const [activeNotice, setActiveNotice] = useState(false)
    const [activeNoticeThree, setActiveNoticeThree] = useState(false)
    const [activePanel, setActivePanel] = useState(false)

    const handleModalButtonClick = () => {
        setActiveNotice(!activeNotice);
    }
    const handleModalButtonClickThree = () => {
      setActiveNoticeThree(!activeNoticeThree);
  }
    const handleModalButtonClickTwo = () => {
      setActivePanel(!activePanel);
  }
    const [events, setEvents] = useState()
    const [eventsTwo, setEventsTwo] = useState()

    const {user} = useContext(Context)
    
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event) => {
      const language = event.target.value;
      changeLanguage(language);
    };
    const clickLogin = () => {
      setModalHeader(false)
      setModalActive(true)
    }
    const direct = () => {
      setModalHeader(false)
      setModalActive(false)
    }

    const scrollToSection = (sectionName) => {
        scroll.scrollToBottom()
      };

    const handleDocumentClick = (event) => {
      // Проверяем, что клик был не внутри вашего шапки
      const headerElement = document.getElementById('notice-header'); // Замените 'header' на идентификатор вашей шапки
      if (headerElement && !headerElement.contains(event.target)) {
        // Выполняем ваше действие, если клик был вне шапки
        setActiveNotice(false);
      }
    };
  
    // Добавляем слушатель события клика при монтировании компонента
    useEffect(() => {
      document.addEventListener('click', handleDocumentClick);
  
      // Очищаем слушатель при размонтировании компонента
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
      // eslint-disable-next-line
    }, []); 

    const handleDocumentClickThree = (event) => {
      // Проверяем, что клик был не внутри вашего шапки
      const headerElement = document.getElementById('notice-header-three'); // Замените 'header' на идентификатор вашей шапки
      if (headerElement && !headerElement.contains(event.target)) {
        // Выполняем ваше действие, если клик был вне шапки
        setActiveNoticeThree(false);
      }
    };
  
    // Добавляем слушатель события клика при монтировании компонента
    useEffect(() => {
      document.addEventListener('click', handleDocumentClickThree);
  
      // Очищаем слушатель при размонтировании компонента
      return () => {
        document.removeEventListener('click', handleDocumentClickThree);
      };
      // eslint-disable-next-line
    }, []); 

    const handleDocumentClickTwo = (event) => {
      // Проверяем, что клик был не внутри вашего шапки
      const headerElement = document.getElementById('notice-header-two'); // Замените 'header' на идентификатор вашей шапки
      if (headerElement && !headerElement.contains(event.target)) {
        // Выполняем ваше действие, если клик был вне шапки
        setActivePanel(false);
      }
    };
  
    // Добавляем слушатель события клика при монтировании компонента
    useEffect(() => {
      document.addEventListener('click', handleDocumentClickTwo);
  
      // Очищаем слушатель при размонтировании компонента
      return () => {
        document.removeEventListener('click', handleDocumentClickTwo);
      };
      // eslint-disable-next-line
    }, []); 


    let infoUser = JSON.parse(localStorage.getItem('info'))

    let resAdm = eventsTwo && eventsTwo.adminNotifies

    const hoursTranslations = t('work.list-task.hours', { returnObjects: true });
    const minutesTranslations = t('work.list-task.minutes', { returnObjects: true });
    const secondsTranslations = t('work.list-task.seconds', { returnObjects: true });
    return (
      <>
        <div className='header-back' >
          <div className="heade container">
            <div className="header">
              <ul className="nav">
                <Link to="/" className="link-logo">{t('header.logo')}</Link>
                <li className="item-search">
                        <Link to={
                            infoUser ? 
                                infoUser.executerStatus === 0 ? "/profile/verification/executor" : '/work'
                                : 
                                '/work'
                            } 
                        >
                        {t('header.work')}
                        </Link>
                </li>
                <li className="item-post">
                  {infoUser ? 
                    <>
                    {infoUser && infoUser.systemRole <= 1 &&
                      <Link to={infoUser.customerStatus === 0 ? "/profile/verification/customer" : '/create'}>
                        {t('header.create')}
                        </Link>
                    }
                    </>
                  :
                    <button className='' onClick={clickLogin}>{t('header.create')}</button>
                  }
                </li>
                <li className="item-about"><Link to="/about">{t('header.about')}</Link></li>
                <li className="item-about"><Link onClick={() => scrollToSection("section1")}>{t('header.how')}</Link></li>
                {user.isAuth ?
                  infoUser && infoUser.systemRole <= 1 && <li className="item-about"><Link to="/task">{t('header.task')}</Link></li>
                  :
                  <></>
                }
              </ul>
              {user.isAuth ?
              
              <div className="authorization">
                {infoUser && infoUser.systemRole <= 1 &&
                <>
                <Link className='auth-link-profile' to={'/profile/user'}>
                  <li className="item-authorization"><img src={`http://194.67.113.55/` + infoUser.avatar} alt='.' className='img-header' width={24}/></li>
                  <li className="item-authorization mr-auth">{infoUser.name}</li>
                </Link>
                <li className="item-authorization mr-auth">
                  <Link to='/wallet'>
                    <img src={photo} alt='.' width={24}/>
                  </Link>
                </li>
                <li className="item-authorization mr-auth" >
                  <Link to='/chat'>
                    <img src={photo2} alt='.' width={24}/>
                  </Link>
                </li>
                </>
                }
                {infoUser.systemRole > 1 && 
                <li className="item-authorization mr-auth" id="notice-header-two">
                  <button className='button-count' onClick={() => {
                    handleModalButtonClickTwo()
                    getAdminNotify().then(data => setEventsTwo(data))

                  }}>
                    <img src={photo9} alt='.' width={24}/>
                  </button>
                </li>
                }
                {infoUser && infoUser.systemRole <= 1 &&
                <li className="item-authorization mr-auth" id="notice-header">
                  <button className='button-count' onClick={() => {
                    handleModalButtonClick()
                    getEvents().then(data => setEvents(data))

                  }}>
                    <img src={photo8} alt='.' width={24}/>
                    {infoUser.unReadEvents > 0 &&
                      <div className="circle-two">
                        <span className="count-chat">{infoUser.unReadEvents}</span>
                      </div>
                    }
                  </button>
                </li>
                }
                <li className="item-authorization mr-auth" >
                        <button className='button-count' onClick={() => {
                          localStorage.removeItem('token')
                          localStorage.removeItem('info')
                          window.location.replace('/')
                        }}>
                          <img src={logout} alt='.' width={24}/>
                        </button>
                      </li>
                
                <select value={i18n.language} onChange={handleLanguageChange}>
                  <option value="RUS">RU</option>
                  <option value="KZ">KZ</option>
                  <option value="EN">EN</option>
                </select>
                <div id="notice-header" className={activePanel ? 'notice-header' : 'notice-header none'} onClick={() => handleModalButtonClickTwo()}>
                      <h3>Меню</h3>
                      <ul>
                        {eventsTwo &&
                          
                            <>
                            
                            {// eslint-disable-next-line
                            resAdm && resAdm.userCount && resAdm.userCount == -1 ?
                            ''
                            :
                            <li className='li-notice-two'>
                              <Link to='/admin/listuser'>Пользователи</Link>
                            </li>
                            }
                            {// eslint-disable-next-line
                            resAdm && resAdm.customersRequestsCount && resAdm.customersRequestsCount == -1 ?
                            ''
                            :
                              <li className='li-notice-two'>
                                  <Link to='/admin/customer'>Заказчики</Link>
                                  {resAdm.customersRequestsCount > 0 &&
                                  <div className="circle">
                                    <span className="count-chat">{resAdm.customersRequestsCount}</span>
                                  </div>
                                  }
                              </li>
                            }
                            {// eslint-disable-next-line
                            resAdm && resAdm.executorsRequestsCount && resAdm.executorsRequestsCount == -1 ?
                            ''
                            :
                              <li  className='li-notice-two'>
                                <Link to='/admin/executor'>Исполнители</Link>
                                {resAdm.executorsRequestsCount > 0 &&
                                <div className="circle">
                                  <span className="count-chat">{resAdm && resAdm.executorsRequestsCount}</span>
                                </div>
                                }
                                
                              </li>
                            }
                            {// eslint-disable-next-line
                            resAdm && resAdm.creditRequestsCount && resAdm.creditRequestsCount == -1 ?
                            ''
                            :
                              <li  className='li-notice-two'>
                                <Link to='/admin/credit'>Заявки на кредит</Link>
                                {resAdm.creditRequestsCount > 0 &&
                                <div className="circle">
                                  <span className="count-chat">{resAdm && resAdm.creditRequestsCount}</span>
                                </div>
                                }
                              </li>
                            }
                            {// eslint-disable-next-line
                            resAdm && resAdm.insuranceRequestsCount && resAdm.insuranceRequestsCount == -1 ?
                            ''
                            :
                              <li  className='li-notice-two'>
                                <Link to='/admin/insure'>Заявки на страхование</Link>
                                {resAdm.insuranceRequestsCount > 0 &&
                                <div className="circle">
                                  <span className="count-chat">{resAdm && resAdm.insuranceRequestsCount}</span>
                                </div>
                                }
                              </li>
                            }
                            {// eslint-disable-next-line
                            resAdm && resAdm.arbitrageCount && resAdm.arbitrageCount == -1 ?
                            ''
                            :
                              <li  className='li-notice-two'>
                                <Link to='/admin/arbitrate'>Арбитраж</Link>
                                {resAdm.arbitrageCount > 0 &&
                                <div className="circle">
                                    <span className="count-chat">{resAdm && resAdm.arbitrageCount}</span>
                                  </div>
                                }
                              </li>
                            }
                            {// eslint-disable-next-line
                            resAdm && resAdm.categoriesCount && resAdm.categoriesCount == -1 ?
                            ''
                            :
                              <li  className='li-notice-two'>
                                 <Link to='/admin/task'>Категории заданий</Link>
                                 {resAdm.categoriesCount > 0 &&
                                 <div className="circle">
                                    <span className="count-chat">{resAdm && resAdm.categoriesCount}</span>
                                  </div>
                                }
                              </li>
                            }
                            {// eslint-disable-next-line
                            resAdm && resAdm.settingsCount && resAdm.settingsCount == -1 ?
                            ''
                            :
                              <li  className='li-notice-two'>
                                 <Link to='/admin/settings'>Настройки</Link>
                              </li>
                              }
                          </>
                        }
                      </ul>
                  </div>
                  <div id="notice-header" className={activeNotice ? 'notice-header' : 'notice-header none'} onClick={() => handleModalButtonClick()}>
                      <h3>{t('header.uv')}</h3>
                      <ul>
                        {events &&  events.response.events.map(res => {
                          const urlRegex = /(https?:\/\/[^\s]+)/g;
                          const formatMessage = (message) => {
                            const parts = message.split(urlRegex);
                            return parts.map((part, index) => {
                              if (part.match(urlRegex)) {
                                return (
                                  <div>
                                  <a key={index} className='link-format-message' href={part} target="_blank" rel="noopener noreferrer">
                                    {t('header.link')}
                                  </a>
                                  </div>
                                );
                              } else {
                                return part;
                              }
                            });
                          };
                          function declOfNum(n, titles) {
                              const cases = [2, 0, 1, 1, 1, 2];
                              return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
                          }
                        
                          const createdDate = new Date(res.createDate);
                          const now = new Date();
                          const diffInMs = now - createdDate;
                        
                          let diffStr;
                          if (diffInMs < 60000) {
                            // Less than 60 seconds ago
                            const seconds = Math.floor(diffInMs / 1000);
                            diffStr = `${seconds} ${declOfNum(seconds, secondsTranslations)} ${t('work.list-task.back')}`;
                          } else if (diffInMs < 3600000) {
                            // Less than 60 minutes ago
                            const minutes = Math.floor(diffInMs / 60000);
                            diffStr = `${minutes} ${declOfNum(minutes, minutesTranslations)} ${t('work.list-task.back')}`;
                          } else if (diffInMs < 86400000) {
                            // Less than 24 hours ago
                            const hours = Math.floor(diffInMs / 3600000);
                            diffStr = `${hours} ${declOfNum(hours, hoursTranslations)} ${t('work.list-task.back')}`;
                          } else {
                            // More than 24 hours ago
                            const day = createdDate.getDate().toString().padStart(2, "0");
                            const month = (createdDate.getMonth() + 1).toString().padStart(2, "0");
                            const year = createdDate.getFullYear().toString();
                            diffStr = `${day}.${month}.${year}`;
                          }
                          return (
                            <>
                              <li className={res.read === 1 ? 'li-notice': "li-notice-back"}>
                                {formatMessage(res.message)}
                                <div className='li-notice-info'> 
                                  <p>{diffStr}</p>
                                </div>
                              </li>

                            </>
                          )
                        })
                        }
                      </ul>
                  </div>
                </div>
              :
              <div className="authorization">
                <li className="item-authorization"><button onClick={() => setModalActive(true)} className="button-login">{t('header.login')}</button></li>
                <p className="item-authorization">{t('header.or')}</p>
                <li className="item-authorization"><Link to='/registration' className="button-login">{t('header.register')}</Link></li>
                <select value={i18n.language} onChange={handleLanguageChange}>
                  <option value="RUS">RU</option>
                  <option value="KZ">KZ</option>
                  <option value="EN">EN</option>
                </select>
              </div>
              }
            </div>
          </div>
        </div>


        <div className='header-mobile'>
          <div className='heade container'>
              <div className='header-mobile-block'>
                  {user.isAuth ? 
                    <div className='header-mobile-block-button'>
                      <button className='button-header-mobile' onClick={() => setModalHeader(true)}>
                        <img src={photo6} alt='.' width={24}/>
                      </button>
                    </div>
                    :
                    <div className=''>
                      <button className='button-header-mobile' onClick={() => setModalHeader(true)}>
                        <img src={photo6} alt='.' width={24}/>
                      </button>
                    </div>
                    }
                  <div><Link to="/" className="link-logo">{t('header.logo')}</Link></div>
                  {user.isAuth ? 
                    <div className="authorization">
                      <li className="item-authorization mr-auth">
                        <Link to='/wallet'>
                            <img src={photo} alt='.' width={24}/>
                        </Link>
                      </li>
                      
                      
                      <li className="item-authorization mr-auth" id="notice-header-three">
                        <button className='button-count' onClick={() => {
                          handleModalButtonClickThree()
                          getEvents().then(data => setEvents(data))

                        }}>
                          <img src={photo8} alt='.' width={24}/>
                          {infoUser.unReadEvents > 0 &&
                            <div className="circle-two">
                              <span className="count-chat">{infoUser.unReadEvents}</span>
                            </div>
                          }
                        </button>
                      </li>
                      <li className="item-authorization" >
                        <button className='button-count' onClick={() => {
                          localStorage.removeItem('token')
                          localStorage.removeItem('info')
                          window.location.replace('/')
                        }}>
                          <img src={logout} alt='.' width={24}/>
                        </button>
                      </li>
                      <div id="notice-header-three" className={activeNoticeThree ? 'notice-header' : 'notice-header none'} onClick={() => handleModalButtonClick()}>
                      <h3>{t('header.uv')}</h3>
                      <ul>
                        {events &&  events.response.events.map(res => {
                          const urlRegex = /(https?:\/\/[^\s]+)/g;
                          const formatMessage = (message) => {
                            const parts = message.split(urlRegex);
                            return parts.map((part, index) => {
                              if (part.match(urlRegex)) {
                                return (
                                  <a key={index} className='link-format-message' href={part} target="_blank" rel="noopener noreferrer">
                                    {t('header.link')}
                                  </a>
                                );
                              } else {
                                return part;
                              }
                            });
                          };
                          function declOfNum(n, titles) {
                              const cases = [2, 0, 1, 1, 1, 2];
                              return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
                          }
                        
                          const createdDate = new Date(res.createDate);
                          const now = new Date();
                          const diffInMs = now - createdDate;
                        
                          let diffStr;
                          if (diffInMs < 60000) {
                            // Less than 60 seconds ago
                            const seconds = Math.floor(diffInMs / 1000);
                            diffStr = `${seconds} ${declOfNum(seconds, secondsTranslations)} ${t('work.list-task.back')}`;
                          } else if (diffInMs < 3600000) {
                            // Less than 60 minutes ago
                            const minutes = Math.floor(diffInMs / 60000);
                            diffStr = `${minutes} ${declOfNum(minutes, minutesTranslations)} ${t('work.list-task.back')}`;
                          } else if (diffInMs < 86400000) {
                            // Less than 24 hours ago
                            const hours = Math.floor(diffInMs / 3600000);
                            diffStr = `${hours} ${declOfNum(hours, hoursTranslations)} ${t('work.list-task.back')}`;
                          } else {
                            // More than 24 hours ago
                            const day = createdDate.getDate().toString().padStart(2, "0");
                            const month = (createdDate.getMonth() + 1).toString().padStart(2, "0");
                            const year = createdDate.getFullYear().toString();
                            diffStr = `${day}.${month}.${year}`;
                          }
                          return (
                            <>
                              <li className={res.read === 1 ? 'li-notice': "li-notice-back"}>
                                {formatMessage(res.message)}
                                <div className='li-notice-info'> 
                                  <p>{diffStr}</p>
                                </div>
                              </li>

                            </>
                          )
                        })
                        }
                      </ul>
                  </div>
                    </div>
                    :
                    <div><img src={photo5} alt='.' width={24}/></div>
                  }
                  
              </div>
          </div>

              {modalHeader ?
                <div className='modal-header-block'>

                  <button className='button-header-mobile' onClick={() => setModalHeader(false)}>
                    <img src={photo7} alt='.' width={24}/>
                  </button>

                  <div className='block-left-header-mobile'>
                    <div className='logo-mobile'><Link to="/" className="link-logo" onClick={direct}>{t('header.logo')}</Link></div>
                    <div>
                      <ul className='nav'>
                          {user.isAuth ?
                          <div className='auth-header-mobile'>
                            <li className="item-about"><Link to={'/profile/user'} onClick={direct}>{t('header.lk')}</Link></li>
                            <li className="item-about"><Link to="/chat" onClick={direct}>{t('header.message')}</Link></li>
                            <li className="item-about"><Link onClick={direct}>{t('header.uv')}</Link></li>
                            <li className="item-about"><Link to='/wallet' onClick={direct}>{t('header.wallet')}</Link></li>
                            <li className="item-about"><Link to="/task" onClick={direct}>{t('header.task')}</Link></li>
                            
                          </div>
                          :
                          <>
                            <li className="item-about"><Link to="/about" onClick={direct}>{t('header.about')}</Link></li>
                            <li className="item-about"><Link to="/how" onClick={direct}>{t('header.how')}</Link></li>
                          </>
                          }
                      </ul>
                    </div>

                    <div>
                      {user.isAuth ?
                      <></>
                      :
                      <ul className='nav-two'>
                        <li className="item-authorization"><button onClick={() => clickLogin()} className="button-login">{t('header.login')}</button></li>
                        <p className="item-authorization">{t('header.or')}</p>
                        <li className="item-authorization"><Link to='/registration' className="button-login" onClick={direct}>{t('header.register')}</Link></li>
                      </ul>
                      }
                    </div>

                    <div>
                      {user.isAuth ? 
                      <ul className='nav-three'>
                          <li className="item-about"><Link to="/about">{t('header.about')}</Link></li>
                          <li className="item-about"><Link to="/how">{t('header.how')}</Link></li>
                          <br/>
                          <li className="item-search">
                            <Link to={
                                      infoUser ? 
                                          infoUser.executerStatus === 0 ? "/profile/verification/executor" : '/work'
                                          : 
                                          '/work'
                                      }  onClick={direct}>{t('header.work')}
                            </Link>
                          </li>
                          <li className="item-post">
                            <Link to={
                                       infoUser ? 
                                           infoUser.customerStatus === 0 ? "/profile/verification/customer" : '/create'
                                           : 
                                           '/'
                                       }  onClick={direct}>{t('header.create')}
                            </Link>
                          </li>
                      </ul>
                      :
                      <ul className='nav-three'>
                          <li className="item-search"><Link to={
                            infoUser ? 
                                infoUser.executerStatus === 0 ? "/profile/verification/executor" : '/work'
                                : 
                                '/work'
                            }  onClick={direct}>{t('header.work')}</Link></li>
                          <li className="item-post"><Link to={
                            infoUser ? 
                                infoUser.customerStatus === 0 ? "/profile/verification/customer" : '/create'
                                : 
                                '/'
                            }  onClick={direct}>{t('header.create')}</Link></li>
                      </ul>
                      }
                    </div>

                    <div className="authorization">
                      <select value={i18n.language} onChange={handleLanguageChange}>
                          <option value="RUS">RU</option>
                          <option value="KZ">KZ</option>
                          <option value="EN">EN</option>
                      </select>
                    </div>
                      
                  </div>
                </div>
                :
                <></>
              }
        </div>


        {modalHeader ?
          <ModalHeader modalHeader={modalHeader} setModalHeader={setModalHeader} t={t}/>
          :
          <></>
        }
        {modalActive ? 
          <Auth active={modalActive} setActive={setModalActive} setActiveTwo={setModalActiveTwo}/>
          :
          <></>
        }
        {modalActiveTwo ? 
          <ChangePass activeTwo={modalActiveTwo} setActiveTwo={setModalActiveTwo} setActive={setModalActive}/>
          :
          <></>
        }
      </>
    );
  }
) 
export default Header;