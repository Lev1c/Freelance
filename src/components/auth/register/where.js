import { useState } from 'react';
import photo from '../../../assets/icon/Planet.png'
import { getCity, getRegion } from '../../../http/userAPI';
import { useTranslation } from "react-i18next";

const Where = ({
        country, 
        setCountry, 
        listC, 
        region, 
        setRegion, 
        city, 
        setCity,
        setListRegion,
        listR,
        listRegion,
        setListCity,
        listCit,
        listCity,
        setListCountryId,
        setListRegionId,
        setListCityId,
        address,
        setAddress
    }) => {
    const { t } = useTranslation();
        // eslint-disable-next-line
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    // eslint-disable-next-line
    const [focusedTwo, setFocusedTwo] = useState(false)
    const onFocusTwo = () => setFocusedTwo(true)
    const onBlurTwo = () => setFocusedTwo(false)
    // eslint-disable-next-line
    const [focusedThree, setFocusedThree] = useState(false)
    const onFocusThree = () => setFocusedThree(true)
    const onBlurThree = () => setFocusedThree(false)
    
    const [active, setActive] = useState(false)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    
    let changeOne = () => {
        setActive(true)
        setActiveTwo(false)
        setActiveThree(false)
    }

    let changeTwo = () => {
        setActive(false)
        setActiveTwo(true)
        setActiveThree(false)
    }

    let changeThree = () => {
        setActive(false)
        setActiveTwo(false)
        setActiveThree(true)    
    }
    return (
        <div className="">
            <div className="skills">
                <div className="skills-search user">
                    <img src={photo} alt='.' className="where-icon" width={100}/>
                    <h2>{t('register.where.title-one')}</h2>
                    <p className='p'>{t('register.where.title-two')}</p>
                    <p className='main-text-user'>{t('register.where.text-one')}</p>
                    <input 
                        className="search where-search" 
                        placeholder={t('register.where.input-text')}
                        type='text'
                        value={country}
                        setValue={country}
                        onChange={(event)=> setCountry(event.target.value)}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={() => changeOne()}
                    />
                    <div className={active ? "active" : "login"} onClick={() => setActive(false)}>
                        <div className="counrty-block" onClick={e => e.stopPropagation()}>
                        
                        {listC.map((response) => {
                            let click = () => {
                                setCountry(response.name)
                                setActive(false)
                                getRegion(response.id).then(region => setListRegion(region))
                                setListCountryId(response.id)
                            }
                               return (
                                    <button 
                                        key={response.id} 
                                        onClick={click}
                                        className='button-where'
                                    >
                                        {response.name}
                                    </button>
                               )
                            })
                        }
                        </div>
                    </div>
                    <p className='main-text-user'>{t('register.where.text-two')}</p>
                    <input 
                        className="search where-search" 
                        placeholder={t('register.where.input-text-two')}
                        type='text'
                        value={region}
                        setValue={region}
                        onChange={(event)=> setRegion(event.target.value)}
                        onFocus={onFocusTwo}
                        onBlur={onBlurTwo}
                        onClick={() => changeTwo()}
                    />
                    <div className={activeTwo ? "active" : "login"} onClick={() => setActiveTwo(false)}>
                        <div className="counrty-block" onClick={e => e.stopPropagation()}>
                        {listRegion 
                            &&
                            listR.map((response) => {
                                let click = () => {
                                    setRegion(response.name)
                                    setActiveTwo(false)
                                    getCity(response.id).then(regio => setListCity(regio))
                                    setListRegionId(response.id)
                                }
                               return (
                                    <button 
                                        key={response.id} 
                                        onClick={click}
                                        className='button-where'
                                    >
                                    {response.name}
                                    </button>
                               )
                            })
                        
                        }
                        
                        </div>
                    </div>
                    <div className="input-date">
                        <div className="input-block-edit">
                            <p className='main-text-user'>{t('register.where.text-three')}</p>
                            <input 
                                className="input-date-input" 
                                type="text" 
                                placeholder={t('register.where.input-text-three')}
                                value={city}
                                setValue={city}
                                onChange={(event)=> setCity(event.target.value)}
                                onFocus={onFocusThree}
                                onBlur={onBlurThree}
                                onClick={() => changeThree()}
                            />
                            <div className={activeThree ? "active" : "login"} onClick={() => setActiveThree(false)}>
                                <div className="counrty-block" onClick={e => e.stopPropagation()}>
                                {listCity
                                    && listCit.map((response) => {
                                    let click = () => {
                                        setCity(response.name)
                                        setActiveThree(false)
                                        setListCityId(response.id)
                                    }

                                       return (
                                            <button 
                                                key={response.id} 
                                                onClick={click}
                                                className='button-where'
                                            >
                                                {response.name}
                                            </button>
                                       )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        <div className="input-block-edit">
                            <p className='main-text-user'>{t('register.where.text-fo')}</p>
                            <input 
                                className="input-date-input " 
                                type="text" 
                                placeholder={t('register.where.input-text-fo')}
                                value={address}
                                setValue={address}
                                onChange={(event)=> setAddress(event.target.value)}
                            />
                        </div>
                    </div>
                   
                </div>
                <div className="list-skills">
                    
                </div>
             </div>
        </div>
    );
  }
  
  export default Where;