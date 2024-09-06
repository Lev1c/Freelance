import { useTranslation } from "react-i18next";

function Search({search, setSearch, hangleSearch,handleInputKeyDown}) {
    const { t } = useTranslation();
    
    return (
    <div className="work-search">
        <div className="none-mt container">
            <div className="work-search-block">
                <h1 className="work-search-text">{t('work.search.work-search-text')}</h1>
                <div className="work-input-block">
                    <input 
                        className="search"
                        id="search-work"
                        placeholder={t('work.search.placeholder')}
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyDown={handleInputKeyDown}
                    />
                    <button className="button-main" onClick={hangleSearch}>{t('work.search.button-main')}</button>
                </div>
                    
            </div>
        </div>    
    </div>
    );
  }
  
  export default Search;