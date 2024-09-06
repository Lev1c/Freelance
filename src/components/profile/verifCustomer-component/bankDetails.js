import { useTranslation } from "react-i18next";

const BankDetails = ({bankBik, setBankBik, bankAccount,setBankAccount}) => {
    const { t } = useTranslation();
    return (
      <div className="selection">
        <div className="selection-block-info">
            <h2 className="">{t('verif.bank-details.title-one')}</h2>
              <div>
                <h4>{t('verif.bank-details.text-one')}</h4>
                <input 
                  className="add-name-input" 
                  placeholder={t('verif.bank-details.input-text')}
                  type='text'
                  value={bankBik}
                  setValue={bankBik}
                  onChange={(event)=> setBankBik(event.target.value)}
                />
                <h4>{t('verif.bank-details.text-two')}</h4>
                <input 
                  className="add-name-input" 
                  placeholder='ххххххххх' 
                  type='text'
                  value={bankAccount}
                  setValue={bankAccount}
                  onChange={(event)=> setBankAccount(event.target.value)}
                />
              </div>
        </div>
      </div>
    );
  }

export default BankDetails;