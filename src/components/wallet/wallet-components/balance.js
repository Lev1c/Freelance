import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'


const Balance = ({listWorked}) => {
  const { t } = useTranslation();
    let logins = JSON.parse(localStorage.getItem('info'))
    let logi = logins.login

    useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.cloudpayments.ru/bundles/cloudpayments.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [sum,setSum] = useState()
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
        
    return (
      <div className="balance">
          <h3>{t('wallet.wallet-balnce.text-one')} {listWorked.wallet.balance} ₸</h3>
          <input 
            placeholder={t('wallet.wallet-balnce.text-three')}
            className="input-date-input wallet"
            type="text"
            value={sum}
            setVale={sum}
            onChange={(event) => setSum(event.target.value)}
          />
          <button className="balance-button" onClick={() => pay(logi, sum)}>{t('wallet.wallet-balnce.text-two')}</button>  
      </div>
    );
}
export default Balance;