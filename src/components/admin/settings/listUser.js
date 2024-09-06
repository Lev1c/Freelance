import { useEffect, useState } from "react";
import { getCreditRequests, getInsuranceRequests, getSettings, getUsersAdm } from "../../../http/adminApi";
import ModalLock from "./modalLock";
import ModaUnlLock from "./modalUnLock";
import ModalComment from "./modalComment";
import ModalRole from "./modalRole";


const Settings = () => {
    const [list, setList] = useState()
    const [search, setSearch] = useState('')
    useEffect(() => {
        getSettings().then((data) => setList(data))
    },[])
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFo, setActiveFo] = useState(false)
    const [activeFive, setActiveFive] = useState(false)
    const [displayCount, setDisplayCount] = useState(10);

    const [infoUserOne, setInfoUserOne] = useState()


    if (list && list === 403) {
        window.location.replace('/')
    }

    

    const handleButtonPostList = () => {
        getSettings(search).then((data) => setList(data))
    }

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleButtonPostList()
        }
      };
      const handleInputChange = (index, value) => {
        // Создаем копию массива list.settings, чтобы не мутировать оригинальный массив
        const updatedSettings = [...list.settings];
        // Обновляем значение в копии массива на указанном индексе
        updatedSettings[index].value = value;
        // Обновляем состояние компонента с новым массивом list.settings
        setList({ ...list, settings: updatedSettings });
      };

      useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            displayCount < (list && list.settings && list.settings.length)
          ) {
            setDisplayCount(prevCount => prevCount + 10);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [displayCount, (list && list.settings && list.settings.length)]);

    return (
      <div className="">
        <div className="work-search">
        <div className="none-mt container">
            <div className="work-search-block">
                <h1 className="work-search-text">Настройки</h1>
                <div className="work-input-block">
                    <input 
                        className="search"
                        id="search-work"
                        placeholder="Поиск"
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        onKeyDown={handleInputKeyDown}
                    />
                    <button className="button-main" onClick={handleButtonPostList}>Найти</button>
                </div>
                    
            </div>
        </div>    
        </div>
        <div className="container">
            <div className="block-adm-list">
                <ul>
                        <div className="block-list-user-all">
                            
                                    <>
                                    <div className="block-list-adm">
                                        <div className="block-list-user-info">
                                        {list && list.settings && list.settings.slice(0, displayCount).map((res, index) => (
                                        <div key={index} className="block-addit">
                                            <div className="block-list-card-three">
                                            <p className="mb">{res.name}</p>
                                            <input
                                                className="input-date-input"
                                                value={res.value}
                                                type="text"
                                                onChange={(e) => handleInputChange(index, e.target.value)}
                                            />
                                            </div>
                                        </div>
                                        ))}
                                        
                                        <div className="block-list-user">
                                            
                                        </div>
                                        
                                       
                                        </div>
                                        <div className="button-action-list-adm">
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(list.settings)
                                                setActiveTwo(true)
                                            }}>
                                                Сохранить
                                            </button>
                                        </div>
                                    </div>
                                    
                                    </>
                                
                        </div>
                </ul>
            </div>
        </div>
        <ModalLock activeTwo={activeTwo} setActiveTwo={setActiveTwo} infoUserOne={infoUserOne}/>
        <ModaUnlLock activeThree={activeThree} setActiveThree={setActiveThree} infoUserOne={infoUserOne}/>
        <ModalComment activeFo={activeFo} setActiveFo={setActiveFo} infoUserOne={infoUserOne}/>
        <ModalRole activeFive={activeFive} setActiveFive={setActiveFive} infoUserOne={infoUserOne}/>
      </div>
    );
  }

export default Settings;