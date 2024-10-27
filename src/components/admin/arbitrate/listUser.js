import { useEffect, useState } from "react";
import { getArbitrageRequests, getCreditRequests, getInsuranceRequests, getUsersAdm } from "../../../http/adminApi";
import ModalLock from "./modalLock";
import ModaUnlLock from "./modalUnLock";
import ModalComment from "./modalComment";
import ModalRole from "./modalRole";

import photo from '../../../assets/icon/expand.png'

const ListUserArbit = () => {
    const [list, setList] = useState()
    const [search, setSearch] = useState('')
    useEffect(() => {
        getArbitrageRequests().then((data) => setList(data))
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
        getArbitrageRequests(search).then((data) => setList(data))
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
            displayCount < (list && list.arbitrageRequests && list.arbitrageRequests.length)
          ) {
            setDisplayCount(prevCount => prevCount + 10);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [displayCount, (list && list.arbitrageRequests && list.arbitrageRequests.length)]);
    return (
      <div className="">
        <div className="work-search">
        <div className="none-mt container">
            <div className="work-search-block">
                <h1 className="work-search-text">Список Арбитражных Заказов</h1>
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
                            {list && list.arbitrageRequests && list.arbitrageRequests.slice(0, displayCount).map((res,index) => {
                                return (
                                    <>
                                    <div className="block-list-adm">
                                        <div className="block-list-user-info">
                                        <div className="block-addit">
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Наименование Заказа</li> 
                                                </div>
                                                <li>{res.orderName}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Нужна страховка</li> 
                                                </div>
                                                {res.needInsurance === 0 && <li>Нет</li>}
                                                {res.needInsurance === 1 && <li>Да</li>}
                                                {res.needInsurance === 2 && <li>Страховка одобрена</li>}
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Нужен кредит</li> 
                                                </div>
                                                {res.needCredit === 0 && <li>Нет</li>}
                                                {res.needCredit === 1 && <li>Да</li>}
                                                {res.needCredit === 2 && <li>Кредит одобрен</li>}
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Cтатус Заказа</li> 
                                                </div>
                                                <li>
                                                    {// eslint-disable-next-line
                                                        res.orderStatus == 0 && <>Черновик</>
                                                    }
                                                    {// eslint-disable-next-line
                                                        res.orderStatus == 1 && <>Опубликован</>
                                                    }
                                                    {// eslint-disable-next-line
                                                        res.orderStatus == 2 && <>Выбран исполнитель</>
                                                    }
                                                    {// eslint-disable-next-line
                                                        res.orderStatus == 3 && <>Заключена сделка</>
                                                    }
                                                    {// eslint-disable-next-line
                                                        res.orderStatus == 4 && <>Завершён</>
                                                    }
                                                    {// eslint-disable-next-line
                                                        res.orderStatus == 5 && <>Арбитраж</>
                                                    }    
                                                </li>
                                            </div>
                                        </div>
                                        <div className="block-list-user">
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Город</li> 
                                                </div>
                                                <li>{res.city}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Профиль Заказчика</li> 
                                                </div>
                                                <li>
                                                    <a className="link-format-message" href={"/profile/customer/" + res.customerProfileId} target="_blank">Перейти</a>
                                                </li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Профиль Исполнителя</li> 
                                                </div>
                                                <li>
                                                    <a className="link-format-message" href={"/profile/executor/" + res.executorProfileId} target="_blank">Перейти</a>
                                                </li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Юридическое название Заказчика</li> 
                                                </div>
                                                <li>{res.customerNameOrg}</li>
                                            </div>
                                        </div>
                                        {expandedIndex === index &&
                                        <>
                                        <div className="block-list-user">
                                            <div className="block-list-card-two">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l"> Юридическое название Исполнителя</li> 
                                                </div>
                                                <li>{res.executorNameOrg}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Заказчик верифицирован</li> 
                                                </div>
                                                {res.customerValidateAccount === 1 && <li>Да</li>}
                                                {res.customerValidateAccount === 0 && <li>Нет</li>}
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Исполнитель верифицирован</li> 
                                                </div>
                                                {res.executorValidateAccount === 1 && <li>Да</li>}
                                                {res.executorValidateAccount === 0 && <li>Нет</li>}
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Заказчик подписал сделку</li> 
                                                </div>
                                                {res.customerAccept === 1 && <li>Да</li>}
                                                {res.customerAccept === 0 && <li>Нет</li>}
                                            </div>
                                        </div>
                                         <div className="block-list-user">
                                         <div className="block-list-card-two">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Исполнитель подписал сделку</li> 
                                             </div>
                                             {res.executorAccept === 1 && <li>Да</li>}
                                            {res.executorAccept === 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Номер Исполнителя</li> 
                                             </div>
                                             <li>{res.executorPhone}</li>
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Номер Исполнителя подтверждён</li> 
                                             </div>
                                             {res.executorValidatePhone === 1 && <li>Да</li>}
                                            {res.executorValidatePhone === 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Адрес электронной почты Исполнителя</li> 
                                                </div>
                                                <li>{res.executorMail}</li>
                                            </div>
                                     </div>
                                     <div className="block-list-user">
                                         <div className="block-list-card-two">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Адрес электронной почты Исполнителя подтверждён</li> 
                                             </div>
                                             {res.executorValidateMail === 1 && <li>Да</li>}
                                            {res.executorValidateMail === 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Номер телефона Заказчика</li> 
                                             </div>
                                             <li>{res.customerPhone}</li>
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Номер телефона Заказчика подтверждён</li> 
                                             </div>
                                             {res.customerValidatePhone === 1 && <li>Да</li>}
                                            {res.customerValidatePhone === 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Адрес электронной почты Заказчика</li> 
                                                </div>
                                                <li>{res.customerMail}</li>
                                            </div>
                                     </div>
                                     <div className="block-list-user">
                                         <div className="block-list-card-two">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Адрес электронной почты Заказчика подтверждён</li> 
                                             </div>
                                             {res.customerValidateMail === 1 && <li>Да</li>}
                                            {res.customerValidateMail === 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Дата создания</li> 
                                                </div>
                                                <li>{res.createDate}</li>
                                            </div>
                                         <div className="block-list-card-two">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Комментарий Модератора</li> 
                                             </div>
                                             <li>{res.moderatorComment}</li>
                                         </div>
                                         
                                     </div>
                                     <div className="block-list-user">
                                         <div className="block-list-card-three">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Описание Заказа</li> 
                                             </div>
                                             <li>{res.orderDescription}</li>
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
                                                setInfoUserOne(res.orderId)
                                                setActiveTwo(true)
                                            }}>
                                                Завершить Арбитраж 
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.orderId)
                                                setActiveFo(true)
                                            }}>
                                                Оставить комментарий
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.documents)
                                                setActiveFive(true)
                                            }}>
                                                Документы
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

export default ListUserArbit;