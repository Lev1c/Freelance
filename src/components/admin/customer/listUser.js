import { useEffect, useState } from "react";
import { getCustomers } from "../../../http/adminApi";
import ModalLock from "./modalLock";
import ModaUnlLock from "./modalUnLock";
import ModalComment from "./modalComment";
import ModalRole from "./modalRole";

import photo from '../../../assets/icon/expand.png'

const ListUserCustomer = () => {
    const [list, setList] = useState()
    const [search, setSearch] = useState('')
    useEffect(() => {
        getCustomers().then((data) => setList(data))
    },[])
    console.log(list)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFo, setActiveFo] = useState(false)
    const [activeFive, setActiveFive] = useState(false)
    const [displayCount, setDisplayCount] = useState(10);
    const [photoPassport, setPhotoPassport] = useState()
    const [selfPhotoPassport, setSelfPhotoPassport] = useState()
    const [attorney, setAttorney] = useState()
    const [taxPayer, setTaxPayer] = useState()
    const [taxpayerReg, settaxpayerReg] = useState()

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
        getCustomers(search).then((data) => setList(data))
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
            displayCount < (list && list.customers && list.customers.length)
          ) {
            setDisplayCount(prevCount => prevCount + 10);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
      }, [displayCount, (list && list.customers && list.customers.length)]);

    return (
      <div className="">
        <div className="work-search">
        <div className="none-mt container">
            <div className="work-search-block">
                <h1 className="work-search-text">Список Заказчиков</h1>
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
                            {list && list.customers && list.customers.slice(0, displayCount).map((res,index) => {
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
                                                    <li className="block-list-user-about-li">Юридическое наименование</li> 
                                                </div>
                                                <li>{res.nameOrg}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">тип Заказчика</li> 
                                                </div>
                                                {// eslint-disable-next-line
                                                res.typeCustomer == 0 && <li>тип Заказчика</li>}
                                                {// eslint-disable-next-line
                                                res.typeCustomer == 1 && <li>Самозанятый</li>}
                                                {// eslint-disable-next-line
                                                res.typeCustomer == 2 && <li>ИП</li>}
                                                {// eslint-disable-next-line
                                                res.typeCustomer == 3 && <li>ООО</li>}
                                                {// eslint-disable-next-line
                                                res.typeCustomer == 4 && <li>АО</li>}
                                                {// eslint-disable-next-line
                                                res.typeCustomer == 5 && <li>Физическое лицо</li>}
                                            </div>
                                        </div>
                                        <div className="block-list-user">
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">ИНН Заказчика</li> 
                                                </div>
                                                <li>{res.inn}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">юр. адрес Заказчика</li> 
                                                </div>
                                                <li>{res.regAddress}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Банковский БИК</li> 
                                                </div>
                                                <li>{res.bankBik}</li>
                                            </div>
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Банковский счёт</li> 
                                                </div>
                                                <li>{res.bankAccount}</li>
                                            </div>
                                        </div>
                                        {expandedIndex === index &&
                                        <>
                                        <div className="block-list-user">
                                         <div className="block-list-card-two">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Дата верификации</li> 
                                             </div>
                                             <li>{res.validateAccountDate}</li>
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Аккаунт верифицирован</li> 
                                             </div>
                                            {// eslint-disable-next-line
                                            res.validateAccount == 1 && <li>Да</li>}
                                            {// eslint-disable-next-line
                                            res.validateAccount == 0 && <li>Нет</li>}
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Страна</li> 
                                             </div>
                                            <li>{res.country}</li>
                                         </div>
                                         <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">Город</li> 
                                                </div>
                                                <li>{res.city}</li>
                                            </div>
                                     </div>
                                     <div className="block-list-user">
                                         <div className="block-list-card-two">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">Комментарий модератора</li> 
                                             </div>
                                             <li>{res.moderatorComment}</li>
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">дата регистрации Заказчика</li> 
                                             </div>
                                             <li>{res.createDate}</li>
                                         </div>
                                         <div className="block-list-card">
                                             <div className="block-list-user-about">
                                                 <li className="block-list-user-about-l">рейтинг Заказчика</li> 
                                             </div>
                                            <li>{res.rate}</li>
                                         </div>
                                         <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-l">количество Отзывов</li> 
                                                </div>
                                                <li>{res.countRate}</li>
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
                                                setInfoUserOne(res.profileId)
                                                setActiveTwo(true)
                                            }}>
                                                Верифицировать
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.profileId)
                                                setActiveFo(true)
                                            }}>
                                                Оставить комментарий
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.profileId)
                                                setActiveFive(true)
                                                setPhotoPassport(res.passportPhoto)
                                                setSelfPhotoPassport(res.selfPassportPhoto)
                                                setAttorney(res.attorney)
                                                setTaxPayer(res.taxPayerCertificate)
                                                settaxpayerReg(res.taxpayerReg)
                                            }}>
                                                Фотографии
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
        <ModalRole 
            activeFive={activeFive} 
            setActiveFive={setActiveFive} 
            infoUserOne={infoUserOne}
            photoPassport={photoPassport}
            selfPhotoPassport={selfPhotoPassport}
            attorney={attorney}
            taxPayer={taxPayer}
            taxpayerReg={taxpayerReg}
        />
      </div>
    );
  }

export default ListUserCustomer;