import { Link } from 'react-router-dom';
import photo from '../../../assets/photo/xtkkkk 1.png'
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from "react-scroll";

function Why() {
    const { t } = useTranslation();
    const scrollToSection = (sectionName) => {
        scroll.scrollTo(sectionName, {
          smooth: true,
          duration: 500,
        });
      };
    return (
        <div className="why">
            <div className="none-mt-abs container">
                <div className="block-why">
                    <div className="block-why-one">
                        <h1 className="why-main-text">{t('home.why.why-main-text')}</h1>
                        <ul className='why-ul'>
                            <li className='why-li'>
                                <span className='why-two-text'>01</span>
                                <span className='why-three-text'>{t('home.why.why-li.one')}</span>
                            </li>
                            <li className='why-li'>
                                <span className='why-two-text'>02</span>
                                <span className='why-three-text'>{t('home.why.why-li.two')}</span>
                            </li>
                            <li className='why-li'>
                                <span className='why-two-text'>03</span>
                                <span className='why-three-text'>{t('home.why.why-li.three')}</span>
                            </li>
                            <li className='why-li'>
                                <span className='why-two-text'>04</span>
                                <span className='why-three-text'>{t('home.why.why-li.fo')}</span>
                            </li>
                            <li className='why-li'>
                                <span className='why-two-text'>05</span>
                                <span className='why-three-text'>{t('home.why.why-li.five')}</span>
                            </li>
                            <li className='why-li'>
                                <span className='why-two-text'>06</span>
                                <span className='why-three-text'>{t('home.why.why-li.six')}</span>
                            </li>
                        </ul>
                        <Link 
                            to='/specialists' 
                            onClick={() => scrollToSection("section1")} 
                            className='why-button'
                        >
                            {t('home.why.why-button')}
                        </Link>
                    </div>
                    <div className="block-why-one">
                        <img
                        src={photo}
                        className="photo-why"
                        alt='des'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Why;