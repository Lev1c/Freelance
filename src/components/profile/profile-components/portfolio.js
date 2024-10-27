import { useState } from "react";
import {observer} from "mobx-react-lite";
import ModalPortfolio from './modalPortfolio';
import { useTranslation } from 'react-i18next'

const Portfolio =  observer((userProfile) => {
    const { t } = useTranslation();
    const [active, setActive] = useState(false)
    const [response, setResponse] = useState('')
    console.log(response)
    return (
      <>
      {userProfile.userProfile.response.profile.executerStatus === 1 ?
        <div className="portfolio">
          <div className="profile-title">
            <span className="title">{t('profile.portfolio.title-two')}</span>
          </div>
          <div className="block-portfolio">
            <div className='block-portf'>

                {
                  userProfile.userProfile.response.executorPortfolio.map((response) => {
                    return(
                      <>
                        <button className='button-executorPortfolio' onClick={() => {
                            setActive(true) 
                            setResponse(response)
                            }} 
                            key={response.portfolioId}
                          >
                           <img src={`http://194.67.113.55/` + response.photo1} maxWidth={210}  height={175} alt='.'/>
                           <span className='text-nameProject'>{response.nameProject}</span>
                        </button>
                        
                      </>
                    )
                  })
                }
                
            </div>
          </div>
        </div>
        :
        <></>
      }
      <ModalPortfolio response={response} active={active} setActive={setActive}/>
      </>
    );
  }
) 
export default Portfolio;