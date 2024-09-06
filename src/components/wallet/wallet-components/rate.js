import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'


const Rate = ({listWorked}) => {
    const { t } = useTranslation();
    let current = listWorked.wallet.currentTariff

    return (
      <div className="history-two">
          <h2>{t('wallet.rate.title')}</h2>
            <div className="history-card-two">
                            <div className="rate-info"> 
                                <div className='history-info'>
                                    <span>{current.tariffType === 0 && <>{t('wallet.rate.text-one')}</>}</span>
                                    <span>{current.tariffType === 1 && <>{t('wallet.rate.text-two')}</>}</span>
                                    <span>{current.tariffType === 2 && <>{t('wallet.rate.text-three')}</>}</span>
                                </div>
                                <div className="block-current">
                                    <div className="info-text-under">
                                        {current.tariffType === 1 && <>{t('wallet.rate.text-fo')}</>}
                                        {current.tariffType === 2 && <>{t('wallet.rate.text-five')}</>}
                                    </div>
                                    <div className="info-text-under">{current.tariffLimit}</div>
                                </div>
                            </div>
            </div>
            <div className="link-block">
                <Link to={'/wallet/rate'} className="history-button-two">{t('wallet.rate.button')}</Link>
            </div>
      </div>
    );
}
export default Rate;