import {observer} from "mobx-react-lite";
import { useTranslation } from 'react-i18next'

const Portfolio =  observer((userProfile) => {
    const { t } = useTranslation();
    return (
      <div className="portfolio">
        <div className="profile-title">
          <span className="title">{t('profile.portfolio.title-two')}</span>
         
        </div>
        <div className="block-portfolio">
          <div className='block-portf'>
              {userProfile.userProfile.response.executorPortfolio.map((response) => {
                return(
                <button className='button-executorPortfolio'>
                    <img src={`http://194.67.113.55/` + response.photo1} width={260} height={185} alt='.'/>
                    <span className='text-nameProject'>{response.nameProject}</span>
                </button>
                )
              })}
             
          </div>
        </div>
      </div>
    );
  }
) 
export default Portfolio;