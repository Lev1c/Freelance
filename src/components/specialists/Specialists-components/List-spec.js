import photo3 from '../../../assets/icon/Map_Pin dbfbvfv.png'
import star1 from '../../../assets/icon/Star 1.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 3.png'

import { Context } from "../../../index";

import React, { useEffect, useContext, useState } from 'react';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ModalOffer from './modalOffer';
import { useTranslation } from 'react-i18next';
import Login from '../../modal/Login';
import ChangePass from '../../modal/ChangePass';
import { animateScroll as scroll } from "react-scroll";

const ListSpec = ({
    options,
    listWork,
    value,
    setValue,
    currentCounrty,
    prevPage,
    curentPage,
    workList,
    paginate,
    nextPage,
    lastPageBlock,
    setActiveFilter
    }) => {
        const { t } = useTranslation();

        const [modalActive, setModalActive] = useState(false)
        const [modalActiveTwo, setModalActiveTwo] = useState(false)

        const scrollToSection = (sectionName) => {
            scroll.scrollTo(sectionName, {
              smooth: true,
              duration: 500,
            });
          };

        const {user} = useContext(Context)
        const targetRef = useRef(null);

        const [active, setActive] = useState(false)
        const [idUser, setIdUser] = useState('')
        const [nameUser, setNameUser] = useState('')

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        
                        console.log('Target is in view');
                    }
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 1.0,
                }
            );
            if (targetRef.current) {
                observer.observe(targetRef.current);
            }
            return () => {
                if (targetRef.current) {
                    // eslint-disable-next-line
                    observer.unobserve(targetRef.current);
                }
            };
            
        }, [targetRef]);

    return (
        <div className="list-task" id='list-task'>
            <div className="list-task-block">
                 <div className='list-task-filter'>
                    <button className='button-filter' onClick={() => setActiveFilter(true)}>{t('specialists.list-spec.filter')}<img src={photo3} alt='.' width={24}/></button>
                    <span className="list-task-text-main">
                        <span className='text-list-task'>{t('specialists.list-spec.text-list-task.one')}</span> {listWork && listWork.length} {t('specialists.list-spec.text-list-task.two')}
                    </span>
                </div>
            </div>
            <div className="list-task-ads">
            {listWork && currentCounrty.map((response, index) => {
                let rateStart = Number(response.rate).toFixed(1)
                let photoStar
                // eslint-disable-next-line
                if (rateStart == 0) {
                    photoStar =
                    <>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 0.5 || rateStart == 0.6 || rateStart == 0.7 || rateStart == 0.8 || rateStart == 0.9) {
                    photoStar =
                    <>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 1.0 || rateStart == 1.1 || rateStart == 1.2 || rateStart == 1.3 || rateStart == 1.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 1.5 || rateStart == 1.6 || rateStart == 1.7 || rateStart == 1.8 || rateStart == 1.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 2.0 || rateStart == 2.1 || rateStart == 2.2 || rateStart == 2.3 || rateStart == 2.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 2.5 || rateStart == 2.6 || rateStart == 2.7 || rateStart == 2.8 || rateStart == 2.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 3.0 || rateStart == 3.1 || rateStart == 3.2 || rateStart == 3.3 || rateStart == 3.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 3.5 || rateStart == 3.6 || rateStart == 3.7 || rateStart == 3.8 || rateStart == 3.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 4.0 || rateStart == 4.1 || rateStart == 4.2 || rateStart == 4.3 || rateStart == 4.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 4.5 || rateStart == 4.6 || rateStart == 4.7 || rateStart == 4.8 || rateStart == 4.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                    </>;
                    // eslint-disable-next-line
                } else if (rateStart == 5.0) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                    </>;
                }

                let getProfile = JSON.parse(localStorage.getItem('info'))

                const calculateAge = (dateString) => {
                  const today = new Date();
                  const birthDate = new Date(dateString);
                  const yearDifference = today.getFullYear() - birthDate.getFullYear();
                  const monthDifference = today.getMonth() - birthDate.getMonth();
                  const dayDifference = today.getDate() - birthDate.getDate();

                  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
                    return yearDifference - 1;
                  } else {
                    return yearDifference;
                  }
                };

                const getAgeString = (age) => {
                  if (age % 10 === 1 && age !== 11) {
                    return `${age} ${t('specialists.list-spec.years.one')}`;
                  } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
                    return `${age} ${t('specialists.list-spec.years.two')}`;
                  } else {
                    return `${age} ${t('specialists.list-spec.years.three')}`;
                  }
                };

                console.log(response.birthday);

                const birthDate = response.birthday;
                const age = birthDate ? calculateAge(birthDate) : null;
                const ageString = age !== null ? getAgeString(age) : null;

                return (
                        <div className="list-spec-ads-block list-spec-mt" ref={index === currentCounrty.length - 1 ? targetRef : null}>
                            <div className='list-spec-mains'>
                                {user.isAuth ?
                                <>
                                    <div className='list-spec-main'>
                                <Link to={
                                user.isAuth ? 
                                    getProfile.customerStatus === 0 ? "/profile/verification/customer" : '/profile/executor/' + response.profileId
                                    : 
                                    '/specialists'
                                }  className='image-avatar-block'>
                                    <img
                                        src={`http://194.67.113.55/` + response.avatar}
                                        alt='.' 
                                        
                                        className='image-avatar'
                                    />
                                </Link>

                                    <Link 
                                    to={
                                        user.isAuth ? 
                                            getProfile.customerStatus === 0 ? "/profile/verification/customer" : '/profile/executor/' + response.profileId
                                            : 
                                            '/specialists'
                                        }
                                    className='list-spec-block-main'>
                                        <span className='list-spec-block-main-text'>{response.name}</span>
                                        <span className='list-spec-block-main-under'>{(age || age === 0) ? `${ageString}` : ''}{(response.country && (age || age === 0)) && ','} {response.country}</span>
                                        <div className='list-task-ads-star mb-star'>
                                            {photoStar}
                                            <span className='mr ml ball-span'>
                                                {// eslint-disable-next-line
                                                    rateStart == 0.0 ? 0 : rateStart
                                                }
                                            </span>
                                        </div>
                                        <ul className='list-task-ads-ul'>
                                            {response.subCategory.map(res => {
                                                return (
                                                    <li className='list-task-ads-li'>{res}</li>
                                                )
                                            })}
                                        </ul>
                                    </Link>
                                   
                                
                                
                                    </div>
                                    <div className='list-spec-block-price'>
                                    <button className='list-spec-button' onClick={() => {
                                        setIdUser(response.profileId, response.profileId)
                                        setNameUser(response.name)
                                        setActive(true)
                                        }}>{t('specialists.list-spec.offer')}</button>
                                </div>
                                    </>
                                    :
                                    <>
                                    <div className='list-spec-main'>
                                <button to={
                                user.isAuth ? 
                                    getProfile.customerStatus === 0 ? "/profile/verification/customer" : '/profile/executor/' + response.profileId
                                    : 
                                    '/specialists'
                                }  className='button-image-avatar-block image-avatar-block'>
                                    <img
                                        src={`http://194.67.113.55/` + response.avatar}
                                        alt='.' 
                                        
                                        className='image-avatar'
                                    />
                                </button>
                                <div className='list-spec-block-main'>
                                    <button 
                                    onClick={() => setModalActive(true)}
                                    className='button-image-avatar-block list-spec-block-main'
                                    >
                                        <span className='list-spec-block-main-text'>{response.name}</span>
                                        <span className='list-spec-block-main-under'>{(age || age === 0) ? `${ageString}` : ''}{(response.country && (age || age === 0)) && ','} {response.country}</span>
                                        <div className='list-task-ads-star mb-star'>
                                            {photoStar}
                                            <span className='mr ml ball-span'>
                                                {// eslint-disable-next-line
                                                    rateStart == 0.0 ? 0 : rateStart
                                                }
                                            </span>
                                        </div>
                                        <ul className='list-task-ads-ul'>
                                            {response.subCategory.map(res => {
                                                return (
                                                    <li className='list-task-ads-li'>{res}</li>
                                                )
                                            })}
                                        </ul>
                                    </button>
                                    </div>
                                    </div>
                                    <div className='list-spec-block-price'>
                                        <button className='list-spec-button' onClick={() => {
                                            setModalActive(true)
                                            }}>{t('specialists.list-spec.offer')}</button>
                                    </div>
                                </>
                                }
                               
                            </div>
                        </div>
                )
                })}
            </div>
            <div className='list-task-numbering'>
                <div className='list-task-block-numbering'>
                    <button 
                        className="list-task-numbering-navigation"
                        id="btn1"
                        onClick={() => {
                            prevPage()
                            scrollToSection("section1")
                        }} 
                        disabled={curentPage === 1}
                    >
                        {t('specialists.list-spec.back')}
                    </button>
                    {workList.map(number => (
                        <button 
                            className={`list-task-number ${number === curentPage ? 'button-active' : ''}`} 
                            key={number} 
                            onClick={() =>{
                                 paginate(number)
                                 scrollToSection("section1")
                                }}
                        >
                            {number}
                        </button>
                    ))}
                    <button 
                        className='list-task-numbering-navigation' 
                        onClick={() => {
                            nextPage()
                            scrollToSection("section1")
                        }} 
                        disabled={curentPage === lastPageBlock}
                    >
                        {t('specialists.list-spec.forward')}
                    </button>
                    
                </div>
            </div>
            <ModalOffer active={active} setActive={setActive} idUser={idUser} nameUser={nameUser}/>
            {modalActive ? 
          <Login active={modalActive} setActive={setModalActive} setActiveTwo={setModalActiveTwo}/>
          :
          <></>
        }
        {modalActiveTwo ? 
          <ChangePass activeTwo={modalActiveTwo} setActiveTwo={setModalActiveTwo} setActive={setModalActive}/>
          :
          <></>
        }
        </div>
    );
  }
  
  export default ListSpec;