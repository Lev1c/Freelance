import photo1 from '../../../assets/icon/Map.png'
import photo2 from '../../../assets/icon/Close_SM.png'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ListFilter({
    activeFilter,
    setActiveFilter,
    filterStartCost,
    setFilterStartCost,
    filterEndCost,
    setFilterEndCost,
    setFilterTypeOrder,
    handleCheckboxChange,
    setCity,
    setCityId,
    cityList,
    status,
    cityName,
    setCityName,
    handleReset,
    filterTypeOrder,
    getTaskCategoriess,
    taskCategories,
    
    }) {
    const { t } = useTranslation();
      // eslint-disable-next-line
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    const [active, setActive] = useState(false)

    let changeOne = () => {
        setActive(true)
    }
    const [clickChange, setClickChange] = useState(false)
    // eslint-disable-next-line
    const [city, setCitys] = useState()
    return (
        <div className={activeFilter ? "list-filter-active" : "list-filter"}>
            <div className="list-filter-block">
                <div className="filter-list">
                    <h1 className='filter-text-main'>{t('work.list-filter.filter-text-main')}</h1>
                    <button className='button-filter-mobile' onClick={() => setActiveFilter(false)}>
                      {t('work.list-filter.button-filter-mobile')}
                    </button>
                    <div className="list-filter-work">
                        <span className="list-filter-work-text">{t('work.list-filter.list-filter-work-text')}</span>
                            <div className='label-radio'>
                              <input
                                id="radio-10"
                                type='radio'
                                name='name5'
                                value={0}
                                checked={filterTypeOrder === 0}
                                onChange={() => setFilterTypeOrder(0)}
                              />
                              <label htmlFor="radio-10">
                                <p className={`p-edit-under ${filterTypeOrder === 0 ? 'active' : ''}`}>{t('work.list-filter.label-radio.one')}</p>
                              </label>
                            </div>
                            
                            <div className='label-radio'>
                              <input
                                id="radio-11"
                                type='radio'
                                name='name5'
                                value={1}
                                checked={filterTypeOrder === 1}
                                onChange={() => setFilterTypeOrder(1)}
                              />
                              <label htmlFor="radio-11">
                                <p className={`p-edit-under ${filterTypeOrder === 1 ? 'active' : ''}`}>{t('work.list-filter.label-radio.two')}</p>
                              </label>
                            </div>
                            
                            <div className='label-radio'>
                              <input
                                id="radio-12"
                                type='radio'
                                name='name5'
                                value={2}
                                checked={filterTypeOrder === 2}
                                onChange={() => setFilterTypeOrder(2)}
                              />
                              <label htmlFor="radio-12">
                                <p className={`p-edit-under ${filterTypeOrder === 2 ? 'active' : ''}`}>{t('work.list-filter.label-radio.three')}</p>
                              </label>
                            </div>
                   
                    </div>
                    <div className="list-filter-work list-filter-work-mobile">
                        <span className="list-filter-work-text">{t('work.list-filter.list-filter-work-text-two')}</span>
                        <div className='block-price-filter'>
                            <div className='list-filter-work-input-block'>
                                <input 
                                    className="list-filter-work-input"
                                    type="number"
                                    placeholder="₸"
                                    value={filterStartCost}
                                    onChange={(e) => setFilterStartCost(e.target.value)}
                                />
                                <span className="list-filter-work-span"> {t('work.list-filter.block-price-filter.one')}</span>
                            </div>
                            <div className='list-filter-work-input-block'>
                                <input 
                                    className="list-filter-work-input"
                                    type="number"
                                    placeholder="₸"
                                    value={filterEndCost}
                                    onChange={(e) => setFilterEndCost(e.target.value)}
                                />
                                <span className="list-filter-work-span"> {t('work.list-filter.block-price-filter.two')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="list-filter-work mt">
                        <span className="list-filter-work-text">{t('work.list-filter.list-filter-work-text-three')}</span>
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
                            getTaskCategoriess && getTaskCategoriess.slice(0, 9).map((res) => {
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
                              <button className='button-title' onClick={() => setClickChange(false)}>{t('work.list-filter.button-block-work.one')}</button>
                            </div>
                            :
                            <div className='button-block-work'>
                              <button className='button-title' onClick={() => setClickChange(true)}>{t('work.list-filter.button-block-work.two')}</button>
                            </div>
                          }
                          
                    </div>
                    
                    <div className="list-filter-work">
                    <span className="list-filter-work-text mt">{t('work.list-filter.list-filter-work-text-fo')}</span>
                    <input 
                        className='list-filter-work-input-two'
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={() => changeOne()} 
                        type="text" 
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)} 
                    />
                    <span className="list-filter-work-span-two"><img src={photo1} alt='.' width={24}/></span>
                    <div className={active ? "active" : "login"} onClick={() => setActive(false)}>
                      <div className="counrty-block" onClick={(e) => e.stopPropagation()}>
                        {status && cityList && cityList.length ? (
                            cityList.map((response) => {
                              
                              const click = () => {
                                setCity(response.fullAddress);
                                setCitys(response.fullAddress);
                                setCityName(response.fullAddress);
                                setActive(false);
                                setCityId(response.id);
                              };
                          
                              return (
                                <button key={response.id} onClick={click} className="button-where">
                                  {response.fullAddress}
                                </button>
                              );
                            })) 
                            :   (
                                    <button onClick={() => setActive(false)} className="button-where">
                                        <>{t('work.list-filter.button-where')}</>
                                    </button>
                                )
                        }
                      </div>
                    </div>
                        
                    </div>
                    
                    <button className='remove-list' onClick={handleReset}>{t('work.list-filter.remove-list-button')} <img className='img-remove-close' src={photo2} alt='.' width={24}/></button>
                    <button className='button-filter-mobile-three' onClick={() => setActiveFilter(false)}>
                      {t('work.list-filter.button-filter-mobile')}
                    </button>
                </div>
            </div>
        </div>
    );
  }
  
  export default ListFilter;