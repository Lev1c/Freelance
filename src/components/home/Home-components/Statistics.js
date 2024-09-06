import { useTranslation } from 'react-i18next';
import photo from '../../../assets/vector/Vector.png'
import photo2 from '../../../assets/vector/Vector2.png'
import photo3 from '../../../assets/vector/Vector3.png'
import photo4 from '../../../assets/vector/Vector4.png'

function Statistics() {
    const { t } = useTranslation();
    return (
      <div className="container">
        <div className="block-statistics">
                <ul className="statistics">
                    <li className="groups">
                        <div className='block-vector'>
                            <img className='vector' src={photo} width={32} alt='.'/>
                        </div>
                        <div className='groups-text-under'>
                            <span className='statistics-main-text'>700 000 </span>
                            <span className='statistics-under-text'>
                                {t('home.statistics.statistics-under-text.one')}
                            </span>
                        </div>
                    </li>
                    <li className="groups">
                        <div className='block-vector'>
                            <img className='vector' src={photo2} width={32} alt='.'/>
                        </div>
                        <div className='groups-text-under'>
                            <span className='statistics-main-text'>2 157 000 </span>
                            <span className='statistics-under-text'>
                                {t('home.statistics.statistics-under-text.two')}
                            </span>
                        </div> 
                    </li>
                    <li className="groups">
                        <div className='block-vector'>
                            <img className='vector' src={photo3} width={32} alt='.'/>
                        </div>
                        <div className='groups-text-under'>
                            <span className='statistics-main-text'>50 000 000 РУБ </span>
                            <span className='statistics-under-text'>
                                {t('home.statistics.statistics-under-text.three')}    
                            </span>
                        </div>       
                    </li>
                    <li className="groups">   
                        <div className='block-vector'>
                            <img className='vector' src={photo4} width={32} alt='.'/>
                        </div>                     
                        <div className='groups-text-under'>
                            <span className='statistics-main-text'>99%</span>
                            <span className='statistics-under-text'>
                                {t('home.statistics.statistics-under-text.fo')}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
    );
  }
  
  export default Statistics;