import { useTranslation } from 'react-i18next';
import photo from '../../../assets/vector/Vector.png'

function Work() {
    const { t } = useTranslation();
    return (
      <div className="container">
        <div className="work">
            <h1 className="work-main-text">{t('home.work.work-main-text')}</h1>
            <div className='block-work'>
                <div className="work-block">
                    <div className='block-img-vector'>
                        <div className='block-vector-work'>
                            <img className='vector-work' src={photo} width={32} alt='.'/>
                        </div>
                        <div className='work-arrow'>
                            <div></div>
                        </div>
                    </div>
                    <div className='work-description'>
                        <span className='work-one-text'><p>1. </p>{t('home.work.work-description-one.work-one-text')}</span>
                        <span className='work-two-text'>{t('home.work.work-description-one.work-two-text')}</span>
                    </div>
                    
                </div>
                <div className="work-block">
                    <div className='block-img-vector'>
                        <div className='block-vector-work'>
                            <img className='vector-work' src={photo} width={32} alt='.'/>
                        </div>
                        <div className='work-arrow'>
                            <div></div>
                        </div>
                    </div>
                    <div className='work-description'>
                        <span className='work-one-text'><p>2. </p> {t('home.work.work-description-two.work-one-text')}</span>
                        <span className='work-two-text'>{t('home.work.work-description-two.work-two-text')}</span>
                    </div>
                    
                </div>
                <div className="work-block">
                    <div className='block-img-vector'>
                        <div className='block-vector-work'>
                            <img className='vector-work' src={photo} width={32} alt='.'/>
                        </div>
                        <div className='work-arrow'>
                            <div></div>
                        </div>
                    </div>
                    <div className='work-description'>
                        <span className='work-one-text'><p>3. </p> {t('home.work.work-description-three.work-one-text')}</span>
                        <span className='work-two-text'>{t('home.work.work-description-three.work-two-text')}</span>
                    </div>
                   
                </div>
                <div className="work-block">
                    <div className='block-vector-work'>
                        <img className='vector-work' src={photo} width={32} alt='.'/>
                    </div>
                    <div className='work-description' id='last-mobile'>
                        <span className='work-one-text'><p>4. </p> {t('home.work.work-description-fo.work-one-text')}</span>
                        <span className='work-two-text'>{t('home.work.work-description-fo.work-two-text')}</span>
                    </div>
                    
                </div>
            </div>  
        </div>
      </div>
    );
  }
  
  export default Work;