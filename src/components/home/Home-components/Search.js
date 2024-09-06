import { Link, useNavigate } from 'react-router-dom';
import photo1 from '../../../assets/photo/Ellipse 1.png'
import photo3 from '../../../assets/photo/Ellipse 5.png'
import photo2 from '../../../assets/photo/Ellipse 4.png'
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import Login from '../../modal/Login';
import ChangePass from '../../modal/ChangePass';
import { findWork, getTaskCategories } from '../../../http/userAPI';
import {Context} from "../../../index";
import { TARGET_ROUTE, WORK_ROUTE } from '../../../utils/consts';

function Search() {
    const { user } = useContext(Context);

    const navigate = useNavigate();
    const [category, setCategory] = useState()
    const [taskCategories, setTaskCategories] = useState()

    useEffect(() => {
        findWork(taskCategories).then(res => setCategory(res))
    },[taskCategories])

    const [modalActive, setModalActive] = useState(false)
    const [modalActiveTwo, setModalActiveTwo] = useState(false)

    const clickLogin = () => {
      setModalActive(true)
    }
    const { t } = useTranslation();

    let infoUser = JSON.parse(localStorage.getItem('info'))

// eslint-disable-next-line
    const [focused, setFocused] = useState(false)

    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    const [active, setActive] = useState(false)

     let changeOne = () => {
        setActive(true)
    }

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            user.setIdCategory(taskCategories)
            navigate(WORK_ROUTE)
        }
      };

    return (
      <div className="container">
        <div className="search-block">
            <div className="block-search">
                <h1 className="main-search-text">{t('home.search.main-text')}</h1>
                <p className="under-search-text">{t('home.search.under-text')}</p>
                <div className="main-search">
                        <div className='block-input-category-search'>
                            <input 
                            className="search"
                            placeholder={t('home.search.main-search')}
                            type="text"
                            value={taskCategories}
                            setValue={taskCategories}
                            onChange={(event)=> setTaskCategories(event.target.value)}
                            onKeyDown={handleInputKeyDown}
                        />
                    </div>
                    <button className="button-main" onClick={() =>{
                            user.setIdCategory(taskCategories)
                            navigate(WORK_ROUTE)
                         }}
                         >
                            {t('home.search.button-main')}
                        </button>
                </div>
                <p className="text-under">{t('home.search.text-under.or')}
                    {infoUser ? 
                        <>
                          <Link to={infoUser.customerStatus === 0 ? "/profile/verification/customer" : '/create'}>
                            {t('home.search.text-under.link-create')}
                            </Link>
                        </>
                        :
                        <button className='' onClick={clickLogin}>{t('home.search.text-under.link-create')}</button>
                    }
                </p>
            </div>
            <div className='back-search'></div>
            <div className="block-photo">
                <div className='block-photo-one'>
                    <div className="ellipse">
                        <div className="block-ellipse-one"></div>
                    </div>
                    <div className="ellipse-two">
                        <div className="block-ellipse-two"></div>
                    </div>
                    <img 
                        src={photo1}
                        className='ellipse-photo'
                        alt='description'
                        width={134}
                    />
                </div>
                <div className='block-photo-two'>
                    <img 
                        src={photo2}
                        className='back-img'
                        alt='description'
                        width={134}
                    />
                    <div className="ellipse-three">
                        <div className="block-ellipse-three"></div>
                    </div>
                    <div className="ellipse-four">
                        <div className="block-ellipse-four"></div>
                    </div>
                </div>
                <div className='block-photo-three'>
                    <div className="ellipse-five">
                        <div className="block-ellipse-five"></div>
                    </div>
                    <img 
                        src={photo3}
                        width={134}
                        className='ellipse-photo-three'
                        alt='description'
                    />
                </div>
            </div>
        </div>
        {modalActive ? 
          <Login active={modalActive} setActive={setModalActive} setActiveTwo={setModalActiveTwo}/>
          :
          <></>
        }
        {modalActiveTwo ? 
          <ChangePass activeTwo={modalActiveTwo} setActiveTwo={setModalActiveTwo} setActive={setModalActive}/>
          :
          <></>
        }
      </div>    
    );
  }
  
  export default Search;