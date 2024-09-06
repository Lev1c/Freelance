import { useContext, useState } from "react";
import { Context } from "../../..";
import star1 from '../../../assets/icon/Star 1.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 3.png'
import photo from '../../../assets/vector/Screenshot.png'
import { useTranslation } from 'react-i18next'

function CommentCustomer({userProfile}) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false)
  const {user} = useContext(Context)
  let listFeedback = userProfile.response.customerFeedbacks
  let listFeedbacks = listFeedback.slice(0, 1)

  const clickAll = () => {
    setActive(true)
  }

  const clickAllfalse = () => {
    setActive(false)
  }

  if(active === true) {
    listFeedbacks = listFeedback.slice(0)
  }
    return (
      <div className="comment">
        <div className="profile-title">
          <span className="title">{t('profile.comment.title')}</span>
        </div>
      <div className="comment-profile">
          {user.isAuth &&
              listFeedback.length !== 0 ?
              <div>
                {listFeedbacks.map((response) => {
                  let rateStart = response.rate
                  let photoStar
                  if (rateStart === 0) {
                      photoStar =
                      <>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 0.5 || rateStart === 0.6 || rateStart === 0.7 || rateStart === 0.8 || rateStart === 0.9) {
                      photoStar =
                      <>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 1.0 || rateStart === 1.1 || rateStart === 1.2 || rateStart === 1.3 || rateStart === 1.4) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 1.5 || rateStart === 1.6 || rateStart === 1.7 || rateStart === 1.8 || rateStart === 1.9) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 2.0 || rateStart === 2.1 || rateStart === 2.2 || rateStart === 2.3 || rateStart === 2.4) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 2.5 || rateStart === 2.6 || rateStart === 2.7 || rateStart === 2.8 || rateStart === 2.9) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 3.0 || rateStart === 3.1 || rateStart === 3.2 || rateStart === 3.3 || rateStart === 3.4) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 3.5 || rateStart === 3.6 || rateStart === 3.7 || rateStart === 3.8 || rateStart === 3.9) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 4.0 || rateStart === 4.1 || rateStart === 4.2 || rateStart === 4.3 || rateStart === 4.4) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 4.5 || rateStart === 4.6 || rateStart === 4.7 || rateStart === 4.8 || rateStart === 4.9) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                      </>;
                  } else if (rateStart === 5.0) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                      </>;
                  }
                  return (
                    <div className="block-comment">
                        <div className='block-comment-info'>
                          <div>
                            {photoStar}
                            <span className='ml mr'>{response.rate}</span>
                          </div>

                        </div>
                        <span>
                          {response.feedback}
                        </span>
                    </div>
                  )
                })}
              </div>
              :
                <div className="block-comment-profile">
                  <img src={photo} width={255} alt="."/>
                  <p>{t('profile.comment.text')}</p>
                </div>
            }

            {listFeedback.length <= 1 ?
               <></>
              :
              active === true ?
                <button onClick={clickAllfalse} className="button-title two">{t('profile.comment.button-one')}</button>
                :
                <button onClick={clickAll} className="button-title two">{t('profile.comment.button-two')}</button>
             
            }
            
            
      </div>
    </div>
    );
  }
  
  export default CommentCustomer;