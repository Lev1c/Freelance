import { useTranslation } from "react-i18next";

function Document({needCloseDocuments,needInsurance,needCredit, handleCheckboxChange, setNeedAgreement,needAgreement, setNeedCloseDocuments, setNeedInsurance, setNeedCredit}) {
    const { t } = useTranslation();
    return (
      <div className="create">
            <h1 className="create-work-title">{t('create-work.document.title-one')}</h1>
            <p className="mb-25">{t('create-work.document.under-title-one')}</p>
            <div className='checkbox mb'>
                <input 
                    id="checkbox_1" 
                    type='checkbox' 
                    className="list-filter-input"
                    name='name5'
                    value={1}
                    setValue={1}
                    onChange={(event) => {
                        needAgreement === 0 ?
                            setNeedAgreement(1)
                            :
                            setNeedAgreement(0)
                    }} 
                />
                <label htmlFor="checkbox_1" className="checkbox__label">
                    <p className="p-edit-under">{t('create-work.document.title-two')}</p>
                    <span className="span-edit-under">{t('create-work.document.under-title-two')}</span>
                </label>
            </div>
            <div className='checkbox mb'>
                <input 
                    id="checkbox_2" 
                    type='checkbox' 
                    className="list-filter-input"
                    name='name5'
                    value={1}
                    setValue={1}
                    onChange={(event) => {
                        needCloseDocuments === 0 ?
                            setNeedCloseDocuments(1)
                            :
                            setNeedCloseDocuments(0)
                    }} 
                />
                <label htmlFor="checkbox_2" className="checkbox__label">
                    <p className="p-edit-under">{t('create-work.document.title-three')}</p>
                    <span className="span-edit-under">{t('create-work.document.under-title-three')}</span>
                </label>
            </div>
            <div className='checkbox mb'>
                <input 
                    id="checkbox_14" 
                    type='checkbox' 
                    className="list-filter-input"
                    value={1}
                    setValue={1}
                    onChange={(event) => {
                        needInsurance === 0 ?
                            setNeedInsurance(1)
                            :
                            setNeedInsurance(0)
                    }}
                />
                <label htmlFor="checkbox_14" className="checkbox__label">
                    <p className="p-edit-under">{t('create-work.document.title-fo')}</p>
                    <span className="span-edit-under">{t('create-work.document.under-title-fo')}</span>
                </label>
            </div>
            <div className='checkbox '>
               <input 
                    type='checkbox' 
                    className="list-filter-input" 
                    id="checkbox_15"
                    value={1}
                    setValue={1}
                    onChange={(event) => {
                        needCredit === 0 ?
                            setNeedCredit(1)
                            :
                            setNeedCredit(0)
                    }}
                />
                <label htmlFor="checkbox_15" className="checkbox__label">
                    <p className="p-edit-under">{t('create-work.document.title-five')}</p>
                    <span className="span-edit-under">{t('create-work.document.under-title-five')}</span>
                </label>
            </div>
      </div>
    );
  }
  
  export default Document;