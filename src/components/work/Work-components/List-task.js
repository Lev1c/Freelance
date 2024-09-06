import photo1 from '../../../assets/icon/Chat_Dots.png'
import photo3 from '../../../assets/icon/Map_Pin dbfbvfv.png'
import star1 from '../../../assets/icon/Star 1.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 3.png'

import React, { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from './Loader';
import { Context } from "../../../index";
import { useTranslation } from 'react-i18next'
import Login from '../../modal/Login'
import ChangePass from '../../modal/ChangePass'
import { animateScroll as scroll } from "react-scroll";

const ListTask = ({
        options,
        listWork,
        value,
        setValue,
        currentWork,
        prevPage,
        currentPage,
        workList,
        paginate,
        nextPage,
        lastPageBlock,
        loading,
        setActiveFilter,
        setValueId
    }) => {
    const { t } = useTranslation();
    const targetRef = useRef(null);

    const scrollToSection = (sectionName) => {
        scroll.scrollTo(sectionName, {
          smooth: true,
          duration: 500,
        });
      };

    const {user} = useContext(Context)

    const [modalActive, setModalActive] = useState(false)
    const [modalActiveTwo, setModalActiveTwo] = useState(false)
    
    const hoursTranslations = t('work.list-task.hours', { returnObjects: true });
    const minutesTranslations = t('work.list-task.minutes', { returnObjects: true });
    const secondsTranslations = t('work.list-task.seconds', { returnObjects: true });
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // вызовите функцию, которая будет загружать элементы
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
                    <button className='button-filter' onClick={() => setActiveFilter(true)}>{t('work.list-task.button-filter')}<img src={photo3} alt='.' width={24}/></button>
                    <span className="list-task-text-main">
                        <span className='text-list-task'>{t('work.list-task.text-list-task.one')}:</span> {listWork && listWork.length} {t('work.list-task.text-list-task.two')}
                    </span>
                </div>
                <p className="list-task-text-under-one" id="section1">
                    <span className='text-list-task'>{t('work.list-task.text-list-task-select')} -</span>
                    <span className="list-task-text-under-two">
                        <select className="select-list-task" value={value && value.id} onChange={(event) => {setValue(event.target.value);}} >
                            {options}
                        </select>
                    </span>
                </p>
            </div>
            <div className="list-task-ads">
                {loading && <Loader cards={5}/>}
                {listWork && currentWork.map((response, index) => {
                    

                    function declOfNum(n, titles) {
                        const cases = [2, 0, 1, 1, 1, 2];
                        return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]];
                    }

                    const createdDate = new Date(response.createDate);
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

                    let rateStart = response.rate
                    let photoStar
                    if (rateStart === 0) {
                    photoStar =
                    <>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 0.5 || rateStart === 0.6 || rateStart === 0.7 || rateStart === 0.8 || rateStart === 0.9) {
                    photoStar =
                    <>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 1.0 || rateStart === 1.1 || rateStart === 1.2 || rateStart === 1.3 || rateStart === 1.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 1.5 || rateStart === 1.6 || rateStart === 1.7 || rateStart === 1.8 || rateStart === 1.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 2.0 || rateStart === 2.1 || rateStart === 2.2 || rateStart === 2.3 || rateStart === 2.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 2.5 || rateStart === 2.6 || rateStart === 2.7 || rateStart === 2.8 || rateStart === 2.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 3.0 || rateStart === 3.1 || rateStart === 3.2 || rateStart === 3.3 || rateStart === 3.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 3.5 || rateStart === 3.6 || rateStart === 3.7 || rateStart === 3.8 || rateStart === 3.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 4.0 || rateStart === 4.1 || rateStart === 4.2 || rateStart === 4.3 || rateStart === 4.4) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star2} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 4.5 || rateStart === 4.6 || rateStart === 4.7 || rateStart === 4.8 || rateStart === 4.9) {
                    photoStar =
                    <>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star1} className='ml-3' alt='.' width={16}/>
                        <img src={star3} className='ml-3' alt='.' width={16}/>
                    </>;
                } else if (rateStart === 5.0) {
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

                    return (
                        user.isAuth ? 
                            <>
                            <Link to={
                                user.isAuth ? 
                                    getProfile.executerStatus === 0 ? "/profile/verification/executor" : '/target/' + response.orderId
                                    : 
                                    '/work'
                                } 
                                key={response.orderId}
                            >
                            <div className="list-task-ads-block">
                                <div className="block-list-task-main">
                                    <h1>{response.name}</h1>    
                                    <div className='block-list-task-txt'>
                                        {response.startCost > 0 && response.endCost > 0 &&
                                            <>
                                                <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                                <span className='description-star-text'>-</span>
                                                <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                            </>
                                        }
                                        {response.startCost > 0 && response.endCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        }
                                        {response.endCost > 0 && response.startCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                        }
                                        {// eslint-disable-next-line
                                        response.endCost == 0 && response.startCost == 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        }
                                    </div>
                                </div>
                                <span className='block-list-task-text-under block-list-task-text-under-two'>{response.about} <br/></span>
                                <span className='block-list-task-text-under'>{response.description}</span>
                                <ul className="list-task-ads-ul">
                                    {response.subCategory.map(res => {
                                        return(
                                            <li className='list-task-ads-li'>{res}</li>
                                        )
                                    })}
                                    
                                </ul>
                                <div className='block-list-task-txt-mobile'>
                                    <span className='block-list-task-text-price'>
                                      {response.startCost > 0 && response.endCost > 0 &&
                                            <>
                                                <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                                <span className='description-star-text'>-</span>
                                                <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                            </>
                                        }
                                        {response.startCost > 0 && response.endCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        }
                                        {response.endCost > 0 && response.startCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                        }
                                        {// eslint-disable-next-line
                                        response.endCost == 0 && response.startCost == 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        } 
                                    </span>
                                </div>
                                <div className='list-task-ads-gen'>
                                    <div className='list-task-ads-star'>
                                        {photoStar}
                                        <span className='ml mr'>{response.rate}</span>
                                        <img src={photo1} alt='.' width={24}/>
                                        <span className='ml'>{response.countRate}</span>
                                    </div>
                                    <span>{diffStr}</span>
                                </div>
                            </div>
                        </Link>
                            </>
                        :
                            <>
                            <button 
                                className='button-image-avatar-block'
                                onClick={() => setModalActive(true)}
                                key={response.orderId}
                            >
                            <div className="list-task-ads-block">
                                <div className="block-list-task-main">
                                    <h1>{response.name}</h1>    
                                    <div className='block-list-task-txt'>
                                        {response.startCost > 0 && response.endCost > 0 &&
                                            <>
                                                <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                                <span className='description-star-text'>-</span>
                                                <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                            </>
                                        }
                                        {response.startCost > 0 && response.endCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        }
                                        {response.endCost > 0 && response.startCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                        }
                                        {// eslint-disable-next-line
                                        response.endCost == 0 && response.startCost == 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        }
                                    </div>
                                </div>
                                <span className='block-list-task-text-under block-list-task-text-under-two'>{response.about} <br/></span>
                                <span className='block-list-task-text-under'>{response.description}</span>
                                <ul className="list-task-ads-ul">
                                    {response.subCategory.map(res => {
                                        return(
                                            <li className='list-task-ads-li'>{res}</li>
                                        )
                                    })}
                                    
                                </ul>
                                <div className='block-list-task-txt-mobile'>
                                    <span className='block-list-task-text-price'>
                                      {response.startCost > 0 && response.endCost > 0 &&
                                            <>
                                                <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                                <span className='description-star-text'>-</span>
                                                <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                            </>
                                        }
                                        {response.startCost > 0 && response.endCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        }
                                        {response.endCost > 0 && response.startCost <= 0 &&
                                            <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                                        }
                                        {// eslint-disable-next-line
                                        response.endCost == 0 && response.startCost == 0 &&
                                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                        } 
                                    </span>
                                </div>
                                <div className='list-task-ads-gen'>
                                    <div className='list-task-ads-star'>
                                        {photoStar}
                                        <span className='ml mr'>{response.rate}</span>
                                        <img src={photo1} alt='.' width={24}/>
                                        <span className='ml'>{response.countRate}</span>
                                    </div>
                                    <span>{diffStr}</span>
                                </div>
                            </div>
                        </button>
                            </>
                        
                       
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
                        disabled={currentPage === 1}
                    >
                        {t('work.list-task.list-task-numbering-navigation.one')}
                    </button>
                    {workList.map(number => (
                        <button 
                            className={`list-task-number ${number === currentPage ? 'button-active' : ''}`} 
                            key={number} 
                            onClick={() => {
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
                        disabled={currentPage === lastPageBlock}
                    >
                        {t('work.list-task.list-task-numbering-navigation.two')}
                    </button>
                    
                </div>
            </div>
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
};

export default ListTask;


