import { useState } from "react"
import { useTranslation } from "react-i18next";

function Map({
    setTypePlace,
    typePlace,
    cityName,
    setCityName,
    cityList,
    status,
    setCityId,
    setCity,
    addressPlace,
    setAddressPlace
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
    return (
      <div className="create">
            <h1 className="create-work-title  mb-25">{t('create-work.map.title-one')}</h1>
            <div className='label-radio'>
                <input 
                    id="radio-4" 
                    type='radio' 
                    name='name1'
                    value={1}
                    setValue={1}
                    onChange={(event) => setTypePlace(event.target.value)} 
                />
                <label htmlFor="radio-4">{t('create-work.map.title-two')}</label>
            </div>
            <div className='label-radio mb-25'>
                <input 
                    id="radio-3" 
                    type='radio' 
                    name='name1'
                    value={2}
                    setValue={2}
                    onChange={(event) => setTypePlace(event.target.value)} 
                />
                <label htmlFor="radio-3">{t('create-work.map.title-three')}</label>
            </div>
            {// eslint-disable-next-line
            typePlace == 2 ?
            <>
            <input 
                className='create-name-input'
                placeholder={t('create-work.map.text-input')}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={() => changeOne()} 
                type="text" 
                value={cityName} 
                onChange={(e) => setCityName(e.target.value)} 
            />
            <div className={active ? "active" : "login"} onClick={() => setActive(false)}>
              <div className="counrty-block" onClick={(e) => e.stopPropagation()}>
                {status && cityList && cityList.length ? (
                cityList.map((response) => {
                  const click = () => {
                    setCity(response.fullAddress);
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
                            <>{t('create-work.map.block-text')}</>
                        </button>
                    )
                }
              </div>
            </div>
            
                <input
                    className='create-name-input' 
                    placeholder={t('create-work.map.text-input-two')}
                    type="text"
                    value={addressPlace}
                    onChange={(e) => setAddressPlace(e.target.value)}
                />
            </>
            :
                ''
            }
            
      </div>
    );
  }
  
  export default Map;