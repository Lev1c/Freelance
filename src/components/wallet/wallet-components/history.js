import { useTranslation } from 'react-i18next'

const History = ({clickTwo, listWorked, click, activeButton, selectedValue, handleButtonClick, listWork }) => {
  const { t } = useTranslation();
  let list = listWorked.wallet.transactions

  const filteredTransactions = () => {
    if (selectedValue === "accession") {
      return list.filter(
        (res) => res.Amount > 0
      );
    } else if (selectedValue === "write-offs") {
      return list.filter(
        (res) => res.Amount < 0
      );
    } else {
      return list;
    }
  };
  
  return (
    <div className="history">
      <h2>{t('wallet.history.title')}</h2>
      <ul className="ul-side-history">
        <li className={`list-side-history ${selectedValue === 'all' ? 'history-pag' : ''}`}>
          <button onClick={() => handleButtonClick('all')}>{t('wallet.history.text-one')}</button>
        </li>
        <li className={`list-side-history ${selectedValue === 'accession' ? 'history-pag' : ''}`}>
          <button onClick={() => handleButtonClick('accession')}>{t('wallet.history.text-two')}</button>
        </li>
        <li className={`list-side-history ${selectedValue === 'write-offs' ? 'history-pag' : ''}`}>
          <button onClick={() => handleButtonClick('write-offs')}>{t('wallet.history.text-three')}</button>
        </li>
      </ul>
      <div className="history-pagination"></div>
      <div className='block-history-card'>
      {
       listWorked.wallet.transactions && filteredTransactions().map((res) => {
         const cardValue = res.card.includes('|') && !/^[\s|]+$/.test(res.card) ? res.card : null;
        return (
          
            <div className="history-card" key={res.id}>
            <div className="history-info">
              <span>{res.Description}</span>
              <span className="info-text-under">{res.ConfirmDateIso}</span>
            </div>
            <div className="history-card-info">
              <span>{res.Amount} ₸</span>
              
              {cardValue && <span className="info-text-under">{cardValue}</span>}
            </div>
          </div>
          
          
        );
      })
    }
    </div>
    </div>
  );
};

export default History;