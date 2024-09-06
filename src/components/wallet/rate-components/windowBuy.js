import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'


const WindowBuy = ({response ,response2,value, cost,click,response3}) => {
    const { t } = useTranslation();
    let logins = JSON.parse(localStorage.getItem('info'))
    let logi = logins.login
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget.cloudpayments.ru/bundles/cloudpayments.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
    }, [isHovered]);
    let sam = cost - response2.wallet.balance

    const pay = (logi, price) => {
      const widget = new window.cp.CloudPayments();
      widget.pay(
        'charge',
        {
          publicId: 'pk_051da99f0887237332c83dafd92d3',
          description: 'Пополнение баланса ' + logi,
          amount: Number(price),
          currency: 'KZT',
          accountId: logi,
          skin: 'classic',
          data: {
            myProp: 'myProp value'
          }
        },
        {
          onSuccess: function (options) {
            window.location.reload()
          },
          onFail: function (reason, options) {
            // Действие при неуспешной оплате
          },
          onComplete: function (paymentResult, options) {
            // Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
            // Например, вызов вашей аналитики Facebook Pixel при необходимости
          }
        }
      );
    };
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return (    
        <div className="history-three">
          <h2>{value}</h2>
            <div className="history-card-two">
                <div className="history-info">
                    <h4>{t('wallet.buy.title-one')}:</h4>
                    <span className="info-text-under">{t('wallet.buy.title-two')}:</span>
                </div>
                <div className="history-card-info">
                    <h4>{cost} ₸</h4>
                    <span className="info-text-under">{response2.wallet.balance} ₸</span>
                </div>
            </div>
        {cost <= response2.wallet.balance ?
            <button className="history-button-one" onClick={click}>{t('wallet.buy.button')}</button>
            :
            <button 
              className="history-button-one" 
              onClick={() => pay(logi, sam)}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              {t('wallet.buy.button')}
            </button>
        }         
      </div>
    );
}
export default WindowBuy;