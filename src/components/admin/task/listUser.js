import { useEffect, useState } from "react";
import { getSubTaskCategoriesAdmin, getTaskCategoriesAdmin, getUsersAdm } from "../../../http/adminApi";
import ModalLock from "./modalLock";
import ModaUnlLock from "./modalUnLock";
import ModalComment from "./modalComment";
import ModalRole from "./modalRole";
import { animateScroll as scroll } from "react-scroll";
import ModalSubAdd from "./modalSubAdd";
import ModalDelete from "./modalDelete";
import ModalChange from "./modalChange";



const ListUserTask = () => {
    const [list, setList] = useState()
    const [search, setSearch] = useState('')
    useEffect(() => {
        getTaskCategoriesAdmin().then((data) => setList(data))
    },[])
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFo, setActiveFo] = useState(false)
    const [activeFive, setActiveFive] = useState(false)
    const [activeSix, setActiveSix] = useState(false)
    const [activeSeven, setActiveSeven] = useState(false)
    const [activeEight, setActiveEight] = useState(false)

    const [infoUserOne, setInfoUserOne] = useState()
    const [infoUserTwo, setInfoUserTwo] = useState()
    const [infoUserThree, setInfoUserThree] = useState()

    const [displayCount, setDisplayCount] = useState(10);

    if (list && list === 403) {
        window.location.replace('/')
    }
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleAdditionalInfo = (index) => {
      setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index));
    };
    

    const handleButtonPostList = () => {
        list && list.taskCategoriesAdmin ?
        getTaskCategoriesAdmin(search).then((data) => setList(data))
        :
        getSubTaskCategoriesAdmin(infoUserOne, search).then(data => setList(data))
    }

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleButtonPostList()
        }
      };

      const scrollToSection = (sectionName) => {
        scroll.scrollTo(sectionName, {
          smooth: true,
          duration: 500,
        });
      };

      useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            displayCount < (list && list.taskCategoriesAdmin ? (list && list.taskCategoriesAdmin && list.taskCategoriesAdmin.length) : (list && list.subTaskCategoriesAdmin && list.subTaskCategoriesAdmin.length))
          ) {
            setDisplayCount(prevCount => prevCount + 10);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [displayCount, (list && list.taskCategoriesAdmin ? (list && list.taskCategoriesAdmin && list.taskCategoriesAdmin.length) : (list && list.subTaskCategoriesAdmin && list.subTaskCategoriesAdmin.length))]);

    return (
      <div className="">
        <div className="work-search">
        <div className="none-mt container">
            <div className="work-search-block">
                <h1 className="work-search-text">Список Категорий</h1>
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
                {list && list.taskCategoriesAdmin ?
                    <button className="button-main-adm" onClick={() => {
                        setActiveFive(true)
                    }}>
                        Создать категорию
                    </button>
                    :
                    <button className="button-main-adm" onClick={() => {
                        setActiveSix(true)
                    }}>
                        Добавить навык
                    </button>
                }
            </div>
        </div>    
        </div>
        <div className="container">
            <div className="block-adm-list">
            {list && list.subTaskCategoriesAdmin &&
            <>
             <button className="button-action-adm-two" onClick={() => getTaskCategoriesAdmin().then((data) => setList(data))}>Вернуться обратно</button>
             <p className="mt-15">{infoUserTwo}</p>
             </>
            }
                <ul>
                        <div className="block-list-user-all">
                            {list && list.taskCategoriesAdmin ? list && list.taskCategoriesAdmin && list.taskCategoriesAdmin.slice(0, displayCount).map((res,index) => {
                                return (
                                    <>
                                    <div className="block-list-adm">
                                        <div className="block-list-user-info">
                                        <div className="block-addit">
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Наименование раздела</li> 
                                                </div>
                                                <li>{res.name}</li>
                                            </div>
                                            <div className="block-list-card">
                                            </div>
                                        
                                        </div>                                
                                        </div>
                                        <div className="button-action-list-adm">
                                            {res.moderate == 0 && 
                                                <button className="button-action-adm" onClick={() => {
                                                    setInfoUserOne(res.id)
                                                    setActiveTwo(true)
                                                }}>
                                                    Утвердить категорию
                                                </button>
                                            }
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.id)
                                                setActiveThree(true)
                                            }}>
                                                Удалить категорию
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setInfoUserOne(res.id)
                                                setActiveFo(true)
                                            }}>
                                                Изменить категорию
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                getSubTaskCategoriesAdmin(res.id).then(data => setList(data))
                                                scrollToSection("section1")
                                                setInfoUserOne(res.id)
                                                setInfoUserTwo(res.name)
                                            }}>
                                                Список навыков
                                            </button>
                                        </div>
                                    </div>
                                    
                                    </>
                                )
                            })
                            :
                            list && list.subTaskCategoriesAdmin && list.subTaskCategoriesAdmin.slice(0, displayCount).map((res,index) => {
                                return (
                                    <>
                                    
                                    <div className="block-list-adm">
                                       
                                        <div className="block-list-user-info">
                                        <div className="block-addit">
                                            <div className="block-list-card">
                                                <div className="block-list-user-about">
                                                    <li className="block-list-user-about-li">Наименование раздела</li> 
                                                </div>
                                                <li>{res.name}</li>
                                            </div>
                                           
                                        
                                        </div>                                
                                        </div>
                                        <div className="button-action-list-adm">
                                            <button className="button-action-adm" onClick={() => {
                                                setActiveSeven(true)
                                                setInfoUserThree(res.id)
                                            }}>
                                                Удалить навык
                                            </button>
                                            <button className="button-action-adm" onClick={() => {
                                                setActiveEight(true)
                                                setInfoUserThree(res.id)
                                            }}>
                                                Изменить навык
                                            </button>
                                        </div>
                                    </div>
                                    
                                    </>
                                )
                            })
                            }
                        </div>
                </ul>
            </div>
        </div>
        <ModalLock activeTwo={activeTwo} setActiveTwo={setActiveTwo} infoUserOne={infoUserOne}/>
        <ModaUnlLock activeThree={activeThree} setActiveThree={setActiveThree} infoUserOne={infoUserOne}/>
        <ModalComment activeFo={activeFo} setActiveFo={setActiveFo} infoUserOne={infoUserOne}/>
        <ModalRole activeFive={activeFive} setActiveFive={setActiveFive} infoUserOne={infoUserOne}/>
        <ModalSubAdd activeSix={activeSix} setActiveSix={setActiveSix} infoUserOne={infoUserOne}/>
        <ModalDelete activeSeven={activeSeven} setActiveSeven={setActiveSeven} infoUserThree={infoUserThree}/>
        <ModalChange activeEight={activeEight} setActiveEight={setActiveEight} infoUserThree={infoUserThree}/>
      </div>
    );
  }

export default ListUserTask;