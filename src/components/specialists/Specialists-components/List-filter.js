import photo1 from '../../../assets/icon/Map.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 1.png'
import photo3 from '../../../assets/group/Group4.png'
import photo5 from '../../../assets/group/Group6.png'
import photo4 from '../../../assets/icon/close.png'
import { useState } from 'react'
import { getCity, getRegion } from '../../../http/userAPI'
import { getExecutorList } from '../../../http/profileExecuterApi'
import { useTranslation } from 'react-i18next'

const ListFilter = ({
        click,
        activeFilter,
        setActiveFilter,
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
        listCityId,
        setWork,
        filterSubCategory, 
        filterCategory,
        filterCountFeedbackStart,
        filterCountFeedbackEnd,
        filterRate,
        online,
        setOnline,
        setFilterCountFeedbackStart,
        setFilterCountFeedbackEnd,
        setFilterRate,
        setFilterSubCategory,
        getTaskCategoriess,
        taskCategories,
        handleCheckboxChange,
        handleReset,
        filt,
        setFilt
    }) => {
    const { t } = useTranslation();
    const [clickChange, setClickChange] = useState(false)

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
    const [image, setImage] = useState(star2);
    const [image2, setImage2] = useState(star2);
    const [image3, setImage3] = useState(star2);
    const [image4, setImage4] = useState(star2);
    const [image5, setImage5] = useState(star2);

    const clear = () => {
        setImage(star2)
        setImage2(star2)
        setImage3(star2)
        setImage4(star2)
        setImage5(star2)
        handleReset()
        setListCityId()
        setCity('')
        setRegion('')
        setListRegionId()
        setCountry('')
        setCountry('')
        setListCountryId()

    }
    return (
        <div className={activeFilter ? "list-filter-active" : "list-filter"}>
            <div className="list-filter-block">
                <div className="filter-list">
                    <h1 className='filter-text-main'>{t('specialists.list-filter.filter')}</h1>
                    <button className='button-filter-mobile' onClick={() => setActiveFilter(false)}>{t('specialists.list-filter.button-filter-mobile')}</button>
                    <div className="list-filter-work mt">
                        <span className="list-filter-work-text">{t('specialists.list-filter.category')}</span>
                        {getTaskCategoriess &&
                            clickChange ?
                                getTaskCategoriess && getTaskCategoriess.map((res) => {
                                  return (
                                    <span className="list-filter-work-text-under" key={res.id}>
                                      <div className="checkbox">
                                        <input
                                          type="checkbox"
                                          className="list-filter-input"
                                          id={`checkbox_${res.id}`}
                                          value={res.id}
                                          checked={taskCategories.includes(res.id)}
                                          onChange={() => handleCheckboxChange(res.id)}
                                        />
                                        <label htmlFor={`checkbox_${res.id}`} className="checkbox__label">
                                          {res.name}
                                        </label>
                                      </div>
                                    </span>
                                  );
                                })
                                :
                                getTaskCategoriess && getTaskCategoriess.slice(0,9).map((res) => {
                                  return (
                                    <span className="list-filter-work-text-under" key={res.id}>
                                      <div className="checkbox">
                                        <input
                                          type="checkbox"
                                          className="list-filter-input"
                                          id={`checkbox_${res.id}`}
                                          value={res.id}
                                          checked={taskCategories.includes(res.id)}
                                          onChange={() => handleCheckboxChange(res.id)}
                                        />
                                        <label htmlFor={`checkbox_${res.id}`} className="checkbox__label">
                                          {res.name}
                                        </label>
                                      </div>
                                    </span>
                                  );
                                })
                        }
                        {clickChange ?
                          <div className='button-block-work'>
                              <button className='button-title' onClick={() => setClickChange(false)}>{t('specialists.list-filter.clickChange.one')}</button>
                            </div>
                            :
                            <div className='button-block-work'>
                              <button className='button-title' onClick={() => setClickChange(true)}>{t('specialists.list-filter.clickChange.two')}</button>
                            </div>
                          }
                    </div>

                    <div className="list-filter-work">
                        <span className="list-filter-work-text mt">{t('specialists.list-filter.map.title')}</span>
                        <input 
                            className="list-filter-work-input-two"
                            type="text"
                            placeholder={t('specialists.list-filter.map.one')}
                            value={country}
                            setValue={country}
                            onChange={(event)=> setCountry(event.target.value)}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onClick={() => changeOne()}
                        />
                        <span className="list-filter-work-span-two"><img src={photo1} alt='.' width={24}/></span>
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
                        <input 
                            className="list-filter-work-input-two"
                            type="text"
                            placeholder={t('specialists.list-filter.map.two')}
                            value={region}
                            setValue={region}
                            onChange={(event)=> setRegion(event.target.value)}
                            onFocus={onFocusTwo}
                            onBlur={onBlurTwo}
                            onClick={() => changeTwo()}
                        />
                        <span className="list-filter-work-span-two"><img src={photo1} alt='.' width={24}/></span>
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
                        <input 
                            className="list-filter-work-input-two"
                            type="text"
                            placeholder={t('specialists.list-filter.map.three')}
                            value={city}
                            setValue={city}
                            onChange={(event)=> setCity(event.target.value)}
                            onFocus={onFocusThree}
                            onBlur={onBlurThree}
                            onClick={() => changeThree()}
                        />
                        <span className="list-filter-work-span-two"><img src={photo1} alt='.' width={24}/></span>
                            <div className={activeThree ? "active" : "login"} onClick={() => setActiveThree(false)}>
                                <div className="counrty-block" onClick={e => e.stopPropagation()}>
                                {listCity
                                    && listCit.map((response) => {
                                    let click = async () => {
                                        setCity(response.name)
                                        setActiveThree(false)
                                        setListCityId(response.cityId)
                                        await getExecutorList(filterSubCategory, filterCategory,filterCountFeedbackStart,filterCountFeedbackEnd,filterRate,listCityId, online)
                                        .then(data => setWork(data))
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

                    <div className="list-filter-workd mt">
                        <span className="list-filter-work-text">{t('specialists.list-filter.rate')}</span>
                        <div className="list-filter-work-text-under">
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage(star3)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onClick={() => {
                                    setFilterRate(1)
                                    filterRate >= 1 && setFilterRate(0)
                                }}
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                
                            >
                                <img src={image} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage2(star3) 
                                    setImage(star3)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(2)
                                }}
                            >
                                <img src={image2} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage2(star3) 
                                    setImage(star3)
                                    setImage3(star3)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(3)
                                }}
                            >
                                <img src={image3} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage2(star3) 
                                    setImage(star3)
                                    setImage3(star3)
                                    setImage4(star3)
                                    filterRate === 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate === 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(4)
                                }}
                            >
                                <img src={image4} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage5(star3)
                                    setImage2(star3) 
                                    setImage(star3)
                                    setImage3(star3)
                                    setImage4(star3)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(5)
                                }}
                            >
                                <img src={image5} alt='.' width={32}/>
                            </button>
                        </div>
                    </div>

                    <div className="list-filter-workd mt">
                        <span className="list-filter-work-text">{t('specialists.list-filter.feedback.title')}</span>
                        <span className="list-filter-work-text-under">
                            <input 
                                className='list-spec-input' 
                                placeholder={t('specialists.list-filter.feedback.one')}
                                type="text"
                                value={filterCountFeedbackStart}
                                setValue={filterCountFeedbackStart}
                                onChange={(event) => setFilterCountFeedbackStart(event.target.value)}
                            />
                            <span className='between-input'>—</span>
                            <input 
                                className='list-spec-input' 
                                placeholder={t('specialists.list-filter.feedback.two')}
                                type="text"
                                value={filterCountFeedbackEnd}
                                onChange={(event) => setFilterCountFeedbackEnd(event.target.value)}
                            />
                        </span>
                    </div>

                    <div className="list-filter-workd mt">
                        <span className="list-filter-work-text">{t('specialists.list-filter.online.title')}</span>
                        <span className="list-filter-work-text-under">
                            <div className='list-spec-online'>
                                <button
                                    className='button-online'
                                    onClick={() => {
                                        online === false ? setOnline(true) : setOnline(!true)
                                    }}>
                                    <img src={online === false ? photo3 : photo5} alt='.' width={50} />
                                </button>
                                <span className='ml'>{t('specialists.list-filter.online.text')}</span>
                            </div>
                        </span>
                    </div>
                    <button className='remove-list' onClick={clear}>{t('specialists.list-filter.clear')}<img src={photo4} alt='.' width={24}/></button>
                </div>
            </div>
        </div>
    );
  }
  
  export default ListFilter;