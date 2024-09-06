import { useState } from "react";
import star1 from '../../../assets/icon/Star 1.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 3.png'
import { useTranslation } from 'react-i18next'

function Comment(userProfile) {
  const { t } = useTranslation();
  const [active, setActive] = useState(false)

  let listFeedback = userProfile.userProfile.response.executorFeedbacks
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
        {userProfile.userProfile.response.executorFeedbacks.length !== 0 ?
        <>
        <div className="profile-title">
          <span className="title">{t('profile.comment.title')}</span>
        </div>
        <div className="comment-profile">
              <div>
                {listFeedbacks.map((response) => {
                  let rateStart = response.rate
                  let photoStar
                  if (rateStart === 0.5) {
                      photoStar =
                      <>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 1.0) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 1.5) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 2.0) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 2.5) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 3.0) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 3.5) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 4.0) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star2} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 4.5) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star3} className='ml-3' alt='.' width={16}/>
                      </> 
                  }
                  if (rateStart === 5.0) {
                      photoStar =
                      <>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                          <img src={star1} className='ml-3' alt='.' width={16}/>
                      </> 
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
              
              {listFeedback.length <= 1 ?
                 <></>
                :
                active === true ?
                  <button onClick={clickAllfalse} className="button-title two">{t('profile.comment.button-one')}</button>
                  :
                  <button onClick={clickAll} className="button-title two">{t('profile.comment.button-two')}</button>
              
              }
  
        </div>
        </>
      : "" }
    </div>
    );
  }
  
  export default Comment;