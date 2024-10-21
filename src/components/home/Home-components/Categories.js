import { Link, useNavigate } from 'react-router-dom';
import exnernalink from '../../../assets/icon/External_Link.png'
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from 'react';
import { getTaskCategories } from '../../../http/userAPI';
import { Context } from '../../..';
import { WORK_ROUTE } from '../../../utils/consts';
import { animateScroll as scroll } from "react-scroll";

function Categories() {
    const { t } = useTranslation();
    const { user } = useContext(Context);

    const navigate = useNavigate();
    const [category, setCategory] = useState([])
    const [taskCategories, setTaskCategories] = useState()

    useEffect(() => {
        getTaskCategories().then(res => setCategory(res))
    },[])


    let listC = category && category.filter((item) => {
      if (taskCategories && ! item.name.toLowerCase().includes(taskCategories.toLowerCase())) {
        return false;
      }
      return true
    })

    const scrollToSection = (sectionName) => {
        scroll.scrollTo(sectionName, {
          smooth: true,
          duration: 500,
        });
      };
    
    return (
        <>
        <div className="container">
            <div className="categories">
            <h1 className="categories-main-text">{t('home.categories.categories-main-text')}</h1>
                <div className="quar">
                {listC && listC.slice(0,8).map((response) => {

                    return (
                        <button 
                            key={response.id}
                            className='feature'
                            onClick={() => {
                                user.setIdCategory(response.id)
                                navigate(WORK_ROUTE)
                                scrollToSection("section1")
                            }}
                        >
                                <span className="categories-main">{response.name}</span>
                                <span className="categories-under">2055 специалистов</span>
                        </button>
                        
                    )
                    })
                    }
                </div>
                <span className="categories-text-under">
                    <Link to="/specialists" onClick={() => scrollToSection("section1")}>{t('home.categories.categories-text-under')}</Link>
                   
                </span>
            </div>
          </div>
        </>
    );
}
  
export default Categories;
  