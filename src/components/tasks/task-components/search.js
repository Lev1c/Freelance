import { useTranslation } from 'react-i18next'

const Search = ({ search, setSearch, role, handleExecutorClick, handleCustomerClick }) => {
  const { t } = useTranslation();
  return (
    <div className="work-search">
      <div className="none-mt container">
        <div className="work-search-block">
          <h1 className="work-search-text">{t('task.search.title')}</h1>
          <div className="target-text-unde mt-30">
            <button
              className={`task-text-under ${
                role === 'executor' ? 'text-under-active' : ''
              }`}
              onClick={handleExecutorClick}
            >
              {t('task.search.text-one')}
            </button>
            <button
              className={`task-text-under ${
                role === 'customer' ? 'text-under-active' : ''
              }`}
              onClick={handleCustomerClick}
            >
              {t('task.search.text-two')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;