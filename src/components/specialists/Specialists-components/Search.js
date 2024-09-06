import { useTranslation } from 'react-i18next'

function Search({search, setSearch}) {
    const { t } = useTranslation();
    return (
    <div className="work-search">
        <div className="none-mt container">
            <div className="work-search-block">
                <h1 className="work-search-text">{t('specialists.search.title')}</h1>
                <div className="work-input-block">
                    <input 
                            className="search"
                            placeholder={t('specialists.search.text-input')}
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    <button className="button-main">{t('specialists.search.button')}</button>
                </div>
            </div>
        </div>    
    </div>
    );
  }
  
  export default Search;