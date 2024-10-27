import { useTranslation } from "react-i18next";

function Money({startCost, setStartCost,endCost, setEndCost,setTypePayments,typePayments}) {
    const { t } = useTranslation();
    console.log(typePayments)
    return (
    <div>
        <div className="work-title-create">
            <h1 className="create-work-title">{t('create-work.money.title-one')}</h1>
            <p className="mb-25">{t('create-work.money.title-two')}</p>
        </div>
      <div className="creates">
            
            <div className="input-date">
                <div className="input-block-edit">
                    <h4>{t('create-work.money.one')}</h4>
                    <input 
                        className="input-date-input" 
                        placeholder="0 ₽" 
                        type='text'
                        value={startCost}
                        setValue={startCost}
                        onChange={(event)=> setStartCost(event.target.value)}
                    />
                </div>
                <div className="radio-edit">
                    <div className="radio-edit-block radio-edit-block-two">
                        <h4>{t('create-work.money.under-title-one')}</h4>
                        <div className='label-radio'>
                            <input 
                                id="radio-6" 
                                type='radio' 
                                name='name2'
                                value={0}
                                setValue={0}
                                onChange={(event) => setTypePayments(event.target.value)} 
                            />
                            <label htmlFor="radio-6">{t('create-work.money.radio-one')}</label>
                        </div>
                        <div className='label-radio'>
                            <input 
                                id="radio-7"
                                type='radio' 
                                name='name2'
                                value={3}
                                setValue={3}
                                onChange={(event) => setTypePayments(event.target.value)} 
                            />
                            <label htmlFor="radio-7">{t('create-work.money.radio-two')}</label>
                        </div>
                    </div>
                </div>
                <div className="input-block-edit">
                    <h4>{t('create-work.money.two')}</h4>
                    <input 
                        className="input-date-input" 
                        placeholder="0 ₽" 
                        type='text'
                        value={endCost}
                        setValue={endCost}
                        onChange={(event)=> setEndCost(event.target.value)}
                    />
                </div>
            </div>
            <div className="radio-edit">
                <div className="radio-edit-block" id='radio-edit-block-mobile'>
                    <h4>{t('create-work.money.under-title-one')}</h4>
                    <div className='label-radio'>
                        <input id="radio-8" 
                            type='radio'
                            name='name5'
                            value={0}
                            setValue={0}
                            onChange={(event) => setTypePayments(event.target.value)} 
                        />
                        <label htmlFor="radio-8">{t('create-work.money.radio-one')}</label>
                    </div>
                    <div className='label-radio'>
                        <input 
                            id="radio-9" 
                            type='radio'
                            name='name5'
                            value={3}
                            setValue={3}
                            onChange={(event) => setTypePayments(event.target.value)} 
                        />
                        <label htmlFor="radio-9">{t('create-work.money.radio-two')}</label>
                    </div>
                </div>
                
                {// eslint-disable-next-line
                typePayments == 3 ?
                ''
                :
                <div className="radio-edit-block">
                <h4>{t('create-work.money.under-title-two')}</h4>
                    <div className='label-radio'>
                        <input 
                            id="radio-10" 
                            type='radio'
                            name='name4'
                            value={1}
                            setValue={1}
                            onChange={(event) => setTypePayments(event.target.value)} 
                        />
                        <label htmlFor="radio-10">{t('create-work.money.radio-three')}</label>
                    </div>
                    <div className='label-radio'>
                        <input 
                            id="radio-11" 
                            type='radio' 
                            name='name4'
                            value={2}
                            setValue={2}
                            onChange={(event) => setTypePayments(event.target.value)}
                        />
                        <label htmlFor="radio-11">{t('create-work.money.radio-fo')}</label>
                    </div>
                </div>
                }
                
            </div>
      </div>
      </div>
    );
  }
  
  export default Money;