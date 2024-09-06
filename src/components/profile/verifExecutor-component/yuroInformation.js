import { useTranslation } from "react-i18next";

const YuroInformation = ({nameOrg, setNameOrg, inn, setInn, regAddress, setRegAddress}) => {
    const { t } = useTranslation();
    return (
      <div className="selection">
        <div className="selection-block-info">
            <h2 className="">{t('verif.info.title-one')}</h2>
              <div>
                <h4>{t('verif.info.text-one')}</h4>
                <input 
                  className="add-name-input" 
                  placeholder={t('verif.info.input-text')} 
                  type='text'
                  value={nameOrg}
                  setValue={nameOrg}
                  onChange={(event)=> setNameOrg(event.target.value)}
                />
                <h4>{t('verif.info.text-two')}</h4>
                <input 
                  className="add-name-input" 
                  placeholder='ххххххххх' 
                  type='text'
                  value={inn}
                  setValue={inn}
                  onChange={(event)=> setInn(event.target.value)}
                />
                <h4>{t('verif.info.text-three')}</h4>
                <input 
                  className="add-name-input" 
                  placeholder={t('verif.info.input-text-three')}
                  type='text'
                  value={regAddress}
                  setValue={regAddress}
                  onChange={(event)=> setRegAddress(event.target.value)}
                />
              </div>
        </div>
      </div>
    );
  }

export default YuroInformation;