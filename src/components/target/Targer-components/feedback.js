import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 1.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { setFeedbackOrder } from '../../../http/orderApi';
import { useTranslation } from 'react-i18next'

const FeedBack = () => {
    const { t } = useTranslation();
    const [text, setText] = useState('')
    const [filterRate, setFilterRate] = useState(star2);
    const { id } = useParams();
    const [response, setResponse] = useState()
    const click = () => {
        setFeedbackOrder(filterRate, text, id).then(data => setResponse(data))
    }
    if(response && response.status === true) {
         window.location.replace('/target/' + id )
    }
    const [image, setImage] = useState(star2);
    const [image2, setImage2] = useState(star2);
    const [image3, setImage3] = useState(star2);
    const [image4, setImage4] = useState(star2);
    const [image5, setImage5] = useState(star2);
    return (
      <div className="target">
      <div className="target-back">
        <div className="none-mt container">
          <p className="target-text">{t('target.feedback.title')}</p>
        </div>
      </div>
      <div className="container create-work mt-30">
        <h2>{t('target.feedback.text-one')}</h2>
        <textarea 
            className="textarea-add" 
            placeholder={t('target.feedback.text-input-one')}
            value={text}
            setValue={text}
            onChange={(event) => setText(event.target.value)}
        />
        <div className="mt-30">
            <h2>{t('target.feedback.text-two')}</h2>
            <div className="list-filter-work mt">
                        <div className="list-filter-work-text-under">
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage(star3)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onClick={() => {
                                    setFilterRate(1)
                                    filterRate >= 1 && setFilterRate(0)
                                }}
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                
                            >
                                <img src={image} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage2(star3) 
                                    setImage(star3)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(2)
                                }}
                            >
                                <img src={image2} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage2(star3) 
                                    setImage(star3)
                                    setImage3(star3)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(3)
                                }}
                            >
                                <img src={image3} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage2(star3) 
                                    setImage(star3)
                                    setImage3(star3)
                                    setImage4(star3)
                                    filterRate === 5 ? setImage5(star3) : setImage5(star2)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate === 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(4)
                                }}
                            >
                                <img src={image4} alt='.' width={32}/>
                            </button>
                            <button 
                                className='button-start' 
                                onMouseEnter={() => {
                                    setImage5(star3)
                                    setImage2(star3) 
                                    setImage(star3)
                                    setImage3(star3)
                                    setImage4(star3)
                                }} 
                                onMouseLeave={() => {
                                    filterRate >= 1 ? setImage(star3) : setImage(star2)
                                    filterRate >= 2 ? setImage2(star3) : setImage2(star2)
                                    filterRate >= 3 ? setImage3(star3) : setImage3(star2)
                                    filterRate >= 4 ? setImage4(star3) : setImage4(star2)
                                    filterRate >= 5 ? setImage5(star3) : setImage5(star2)
                                }}
                                onClick={() => {
                                    setFilterRate(5)
                                }}
                            >
                                <img src={image5} alt='.' width={32}/>
                            </button>
                        </div>
                    </div>
        </div>
        <div className="block-btn-feedback mt-30">
            <button className="btn-feedback" onClick={click}>{t('target.feedback.button')}</button>
        </div>
      </div>
    </div>
    );
}
export default FeedBack;