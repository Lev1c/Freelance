import { useTranslation } from "react-i18next";

const Legal = ({typeExecutor, setTypeExecutor}) => {
    const { t } = useTranslation();
    return (
     <div className="selection">
        <div className="selection-block">
            <h2 className="">{t('verif.legal.title-one')}</h2>
            <h3 className="">{t('verif.legal.title-two')}</h3>
            <div className='label-type'>
                <form >
                    <div className='label-radio'>
                        <input 
                            id="radio-4" 
                            type='radio' 
                            name='name1'
                            value={1}
                            setValue={1}
                            onChange={(event) => setTypeExecutor(event.target.value)} 
                        />
                        <label htmlFor="radio-4">{t('verif.legal.text-one')}</label>
                    </div>
                    <div className='label-radio'>
                        <input 
                            id="radio-5" 
                            type='radio' 
                            name='name1'
                            value={2}
                            setValue={2}
                            onChange={(event) => setTypeExecutor(event.target.value)} 
                        />
                        <label htmlFor="radio-5">{t('verif.legal.text-two')}</label>
                    </div>
                    <div className='label-radio'>
                        <input 
                            id="radio-6" 
                            type='radio' 
                            name='name1'
                            value={3}
                            setValue={3}
                            onChange={(event) => setTypeExecutor(event.target.value)} 
                        />
                        <label htmlFor="radio-6">{t('verif.legal.text-three')}</label>
                    </div>
                    <div className='label-radio'>
                        <input 
                            id="radio-7" 
                            type='radio' 
                            name='name1'
                            value={4}
                            setValue={4}
                            onChange={(event) => setTypeExecutor(event.target.value)} 
                        />
                        <label htmlFor="radio-7">{t('verif.legal.text-fo')}</label>
                    </div>
                    
                </form>
            </div>
        </div>
      </div>
    );
  }

export default Legal;