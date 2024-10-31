import { useEffect, useState } from "react";
import { getUsersAdm } from "../../../http/adminApi";
import ModalLock from "./modalLock";
import ModaUnlLock from "./modalUnLock";
import ModalComment from "./modalComment";
import ModalRole from "./modalRole";

import photo from '../../../assets/icon/expand.png'


const ListUser = () => {
    const [list, setList] = useState()
    const [search, setSearch] = useState('')
    useEffect(() => {
        getUsersAdm().then((data) => setList(data))
    },[])
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFo, setActiveFo] = useState(false)
    const [activeFive, setActiveFive] = useState(false)
    const [displayCount, setDisplayCount] = useState(10);

    const [infoUserOne, setInfoUserOne] = useState()
    console.log(infoUserOne)

    if (list && list === 403) {
        window.location.replace('/')
    }
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleAdditionalInfo = (index) => {
      setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index));
    };
    

    const handleButtonPostList = () => {
        getUsersAdm(search).then((data) => setList(data))
    }

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleButtonPostList()
        }
      };

      useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            displayCount < (list && list.users && list.users.length)
          ) {
            setDisplayCount(prevCount => prevCount + 10);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
      }, [displayCount, (list && list.users && list.users.length)]);

    return (
      <div className="">
        <div className="work-search">
        <div className="none-mt container">
            <div className="work-search-block">
                <h1 className="work-search-text">Список Пользователей</h1>
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
                            {list && list.users && list.users.slice(0, displayCount).map((res,index) => {
                                return (
                                    <>
                                    <div className="block-list-adm">
                                        <div className="block-list-user-info">
                                        <div className="block-addit">
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">ФИО пользователя</li> 
                                                </div>
                                                <li>{res.name} {res.middleName} {res.surname}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Логин пользователя</li> 
                                                </div>
                                                <li>{res.login}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Дата создания</li> 
                                                </div>
                                                <li>{res.createDate}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Системная Роль</li> 
                                                </div>
                                                {res.systemRole === 1 && <li>пользователь</li>}
                                                {res.systemRole === 2 && <li>кредитный менеджер</li>}
                                                {res.systemRole === 3 && <li>страховой менеджер</li>}
                                                {res.systemRole === 4 && <li>менеджер верификации</li>}
                                                {res.systemRole === 5 && <li>Администратор</li>}
                                            </div>
                                        </div>
                                        <div className="block-list-user">
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Дата рождения</li> 
                                                </div>
                                                <li>{res.birthday}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Номер телефона</li> 
                                                </div>
                                                <li>{res.phone}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Адрес почты</li> 
                                                </div>
                                                <li>{res.mail}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Заблокирован</li> 
                                                </div>
                                                {res.lock === 0 && <li>Нет</li>}
                                                {res.lock === 1 && <li>Да</li>}
                                            </div>
                                        </div>
                                        {expandedIndex === index &&
                                        <>
                                        <div className="block-list-user">
                                            <div className="block-list-card-two">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Пол</li> 
                                                </div>
                                                {res.gender === 1 && <li>Мужской</li>}
                                                {res.gender === 2 && <li>Женский</li>}
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Верифицирован телефон</li> 
                                                </div>
                                                {res.phoneStatus === 1 && <li>Да</li>}
                                                {res.phoneStatus === 0 && <li>Нет</li>}
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Верифицирована почта</li> 
                                                </div>
                                                {res.mailStatus === 1 && <li>Да</li>}
                                                {res.mailStatus === 0 && <li>Нет</li>}
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Последний вход</li> 
                                                </div>
                                                <li>{res.lastLogin}</li>
                                            </div>
                                        </div>
                                         <div className="block-list-user">
                                         <div className="block-list-card-two">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">комментарий Модератора </li> 
                                             </div>
                                             <li>{res.moderatorComment}</li>
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">профиль Заказчика</li> 
                                             </div>
                                             {res.isCustomer === 1 && <li>Да</li>}
                                            {res.isCustomer === 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">профиль Исполнителя</li> 
                                             </div>
                                            {res.mailStatus === 1 && <li>Да</li>}
                                            {res.mailStatus === 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Город</li> 
                                                </div>
                                                <li>{res.city}</li>
                                            </div>
                                     </div>
                                     </>
                                        }
                                        {expandedIndex === index ?
                                            <button className="open-info" onClick={() => toggleAdditionalInfo(index)}>
                                                Свернуть <img src={photo} alt="." width={18} className="img-open-info"/>
                                            </button>
                                            :
                                            <button className="open-info" onClick={() => toggleAdditionalInfo(index)}>
                                                Дополнительная информация <img src={photo} alt="." width={18}/>
                                            </button>
                                        }
                                        </div>
                                        <div className="button-action-list-adm">
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.id)
                                                setActiveTwo(true)
                                            }}>
                                                Заблокировать
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.id)
                                                setActiveThree(true)
                                            }}>
                                                Разблокировать
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.id)
                                                setActiveFo(true)
                                            }}>
                                                Оставить комментарий
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.id)
                                                setActiveFive(true)
                                            }}>
                                                Задать роль
                                            </button>
                                        </div>
                                    </div>
                                    
                                    </>
                                )
                            })}
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

export default ListUser;