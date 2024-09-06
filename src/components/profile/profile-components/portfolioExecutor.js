import photo from '../../../assets/group/Add_Plus.png'

import { useContext,  useState } from "react";
import { Context } from "../../..";
import {observer} from "mobx-react-lite";
import { Link } from 'react-router-dom';
import ModalPortfolio from './modalPortfolio';
import { useTranslation } from 'react-i18next'

const PortfolioExecutor =  observer((userProfile) => {
    const { t } = useTranslation();
    const {user} = useContext(Context)
    const [active, setActive] = useState(false)
    const [response, setResponse] = useState('')

    return (
      <>
      {userProfile.userProfile.response.profile.executerStatus === 1 ?
        <div className="mt-60">
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
                {user.isAuth &&
                  <Link className="button-executorPortfolio" to={'/profile/add-work'} >
                    <Link to={'/profile/add-work'}><img src={photo} alt='.' width={60}/>{t('profile.portfolio.text')}</Link>
                  </Link>
                  
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
export default PortfolioExecutor;