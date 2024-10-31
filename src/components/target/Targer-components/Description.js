import photo3 from '../../../assets/icon/File_Download.png'
import photo1 from '../../../assets/icon/Chat_Dots.png'
import photo5 from '../../../assets/icon/User_01.png'
import photo4 from '../../../assets/icon/Map_Pin.png'
import star1 from '../../../assets/icon/Star 1.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 3.png'
import { saveAs } from 'file-saver';
import photo from '../../../assets/icon/upload.png'

import { useContext, useState } from 'react'
import { Context } from '../../..'
import Login from '../../modal/Login'
import ResponseToTask from '../../modal/ResponseToTask'
import { Link, useParams } from 'react-router-dom'
import { setAcceptOrder, setCloseOrder, setExecutorCompleteOrder, setPublicOrder,setDisputeOrder,  setOrderPhoto, deletePhoto } from '../../../http/orderApi'
import { useTranslation } from 'react-i18next'


function Description({descriptionInfo}) {
    const { t } = useTranslation();
    const { id } = useParams();
    const [modalActive, setModalActive] = useState(false)
    const [modalActiveTwo, setModalActiveTwo] = useState(false)
    const {user} = useContext(Context)

    const [imgUsers, setImgUser] = useState()
  // eslint-disable-next-line
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedFile(file.name);
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            setPreview(base64String);
            const base64StringImg = reader.result;
            setImgUser(base64StringImg);
            setOrderPhoto(id, [{nameFile: file.name,dataFile: base64String}]).then(() => window.location.reload())
          };
          reader.readAsDataURL(file);
        } else {
          setSelectedFile();
          setPreview();
        }
      };


    let info = descriptionInfo && descriptionInfo.order[0]
    
    let rateStart = Number(descriptionInfo.order[0].customerRate)
    let photoStar
    // eslint-disable-next-line
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
    function formatDate(dateString) {
        const date = new Date(dateString);
        const months = t('target.description.months',{ returnObjects: true });

        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        let formattedDate = '';
        if (year === currentYear && date.getMonth() === currentMonth) {
          formattedDate = `${t('target.description.formattedDate')} ${month}`;
        } else {
          formattedDate = `${t('target.description.formattedDate')} ${month} ${year}`;
        }

        return formattedDate;
    }

    const date = info.customerCreateDate;
    const formattedDate = formatDate(date);
    console.log(formattedDate);
    return (
      <div className="container">
        <div className="description-option-mobile">
            <div className='info-description-option-mobile'>
                <div className='block-list-task-txt-one'>   
                    <span className="description-option-text">{t('target.description.description-option-text')}</span>
                    <span className="description-option-text-two">
                    <span>
                        {// eslint-disable-next-line
                            info.status == 0 && <>{t('task.list.text-info-one')}</>
                        }
                        </span>
                        <span>
                        {// eslint-disable-next-line
                            info.status == 1 && <>{t('task.list.text-info-two')}</>
                        }
                        </span>
                        <span >
                        {// eslint-disable-next-line
                            info.status == 2 && <>{t('task.list.text-info-three')}</>
                        }
                        </span>
                        <span >
                        {// eslint-disable-next-line
                            info.status == 3 && <>{t('task.list.text-info-fo')}</>
                        }
                        </span>
                        <span >
                        {// eslint-disable-next-line
                            info.status == 4 && <>{t('task.list.text-info-five')}</>
                        }
                        </span>
                        <span>
                        {// eslint-disable-next-line
                            info.status == 5 && <>{t('task.list.text-info-six')}</>
                        }
                        </span>    
                    </span>
                </div>
                <div className="block-list-task-txt">
                    <span className='block-list-task-text-price mr'>
                        {info.startCost > 0 && info.endCost > 0 &&
                            <>
                                <span className='block-list-task-text-price mr'>{info.startCost}₸</span>
                                <span className=''>-</span>
                                <span className='block-list-task-text-price mr'>{info.endCost}₸</span>
                            </>
                        }
                        {info.startCost > 0 && info.endCost <= 0 &&
                            <span className='block-list-task-text-price mr'>{info.startCost}₸</span>
                        }
                        {info.endCost > 0 && info.startCost <= 0 &&
                            <span className='block-list-task-text-price mr'>{info.endCost}₸</span>
                        }
                        {// eslint-disable-next-line
                        info.endCost == 0 && info.startCost == 0 &&
                            <span className='block-list-task-text-price mr'>{info.startCost}₸</span>
                        }</span>
                </div>
            </div>
            <div className='description-line-block'>
                <div className='line-description'></div>
            </div>
        </div>
        <div className="description">
            
            <div className="description-block-one">
                <div className="description-option">
                    <div>   
                        <span className="description-option-text">{t('target.description.description-option-text')}</span>
                        <span className="description-option-text">
                            <span>
                            {// eslint-disable-next-line
                                info.status == 0 && <>{t('task.list.text-info-one')}</>
                            }
                            </span>
                            <span>
                            {// eslint-disable-next-line
                                info.status == 1 && <>{t('task.list.text-info-two')}</>
                            }
                            </span>
                            <span >
                            {// eslint-disable-next-line
                                info.status == 2 && <>{t('task.list.text-info-three')}</>
                            }
                            </span>
                            <span >
                            {// eslint-disable-next-line
                                info.status == 3 && <>{t('task.list.text-info-fo')}</>
                            }
                            </span>
                            <span >
                            {// eslint-disable-next-line
                                info.status == 4 && <>{t('task.list.text-info-five')}</>
                            }
                            </span>
                            <span>
                            {// eslint-disable-next-line
                                info.status == 5 && <>{t('task.list.text-info-six')}</>
                            }
                            </span>    
                        </span>
                    </div>
                    <div className="block-list-task-txt">
                        {info.startCost > 0 && info.endCost > 0 &&
                            <>
                                <span className='block-list-task-text-price mr'>{info.startCost}₸</span>
                                <span className=''>-</span>
                                <span className='block-list-task-text-price mr'>{info.endCost}₸</span>
                            </>
                        }
                        {info.startCost > 0 && info.endCost <= 0 &&
                            <span className='block-list-task-text-price mr'>{info.startCost}₸</span>
                        }
                        {info.endCost > 0 && info.startCost <= 0 &&
                            <span className='block-list-task-text-price mr'>{info.endCost}₸</span>
                        }
                        {// eslint-disable-next-line
                        info.endCost == 0 && info.startCost == 0 &&
                            <span className='block-list-task-text-price mr'>{info.startCost}₸</span>
                        }
                    </div>
                </div>
                <div className='description-block-option'>
                    
                    <p className='description-block-text-main'>{t('target.description.create-work')} {(info.createDate).substr(0, 10)} {info.endDate && <>{t('target.description.create-work-two')} {(info.endDate).substr(0, 10)}</>}</p>
                    <span className='description-block-text-under'>{info.description}</span>
                    {(info.needAgreement === 1 || info.needCloseDocuments === 1 || info.needCredit === 1 || info.needInsurance === 1) && 
                        <>
                            <p className='description-block-text-main'>{t('target.description.hang.title')}</p>
                            <span className='description-block-text-under'>
                                {info.needAgreement === 1 && <span>{t('target.description.hang.one')}</span>}
                                {info.needCloseDocuments === 1 && <span>{t('target.description.hang.two')}</span>}
                                {info.needCredit === 1 && <span>{t('target.description.hang.three')}</span>}
                                {info.needInsurance === 1 && <span>{t('target.description.hang.fo')}</span>}
                            </span>
                        </>     
                    } 
                    {info.documents.length > 0 ?
                    <>
                        <p className='description-block-text-main'>{t('target.description.files')}</p>
                        <div className='description-block-file'>
                            {info.documents.map((res) => {
                                const downloadPhoto = (url, name) => {
                                  fetch(url)
                                    .then(response => response.blob())
                                    .then(blob => {
                                      const fileName = `${name}`;
                                      saveAs(blob, fileName);
                                    })
                                    .catch(error => {
                                      console.error('Ошибка при скачивании фото:', error);
                                    });
                                }
                                return (
                                    // eslint-disable-next-line
                                    <>
                                    <span className='description-block-text-under-two button-download' key={res.idFile} onClick={() => downloadPhoto(`http://194.67.113.55/` 
                                        // eslint-disable-next-line
                                        + 
                                        `${res.pathFile}`, res.nameFile)}>
                                        <img src={photo3} alt='.' width={24}/>
                                        <button className='button-download'>{res.nameFile}</button>
                                    </span>
                                    <button className='description-block-text-under-two button-delete' onClick={() => deletePhoto(res.idFile, id ).then(window.location.reload())}>x</button>
                                    </>
                                )
                            })}
                        </div>
                    </>
                    :
                    ''
                    }
                    
                    {info.moderatorComment && <p className='description-block-text-main'>{t('target.description.moderatorComment')}{info.moderatorComment}</p>}
                       {// eslint-disable-next-line
                        (info.status <= 3 && (info.executor === -1 || info.customer === -1)) && (
                            <>      
                            <div className='block-img-edit target'>
                                <label class="button-edit">
                                    <input type="file" name="file[]" onChange={handleFileChange}/>
                                    {!preview && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('create-work.about.button-text')}</div>}
                                    {preview &&<img src={imgUsers} alt='.' id='phot' className='reg-user-img' width="auto" height={183}/>}
                                </label>
                            </div>
                        </>
                          )}
                    {info.subCategory.length > 0 ? 
                        <>
                            <p className='description-block-text-main'>{t('target.description.skills')}</p>
                            <ul className='description-block-ul'>
                                {info.subCategory.map(response => {
                                    return (
                                        <li className='description-block-text-li'>{response}</li>
                                    )
                                })}
                            </ul>
                        </>
                        :
                        ''
                    }
                        
                    <p className='description-block-text-main'>{t('target.description.map.title')}</p>
                    {info.typePlace === 1 ?
                        <span className='description-block-text-under'>{t('target.description.map.one')}</span>
                        :
                        <span className='description-block-text-under'>{t('target.description.map.two')}</span>
                    }
                    
                    {info.typePlace === 2 ?
                        <>
                            <p className='description-block-text-main'>{t('target.description.map.three')}</p>
                            <span className='description-block-text-under'>{t('target.description.map.fo')}</span>
                        </>
                        :
                        <></>
                    }
                   {info.typePayments === 0 ? "" : 
                   <>
                    <p className='description-block-text-main'>{t('target.description.pay.title')}</p>
                    <span className='description-block-text-under'>
                        {info.typePayments === 1 && <>{t('target.description.pay.one')}</>}
                        {info.typePayments === 2 && <>{t('target.description.pay.two')}</>}
                        {info.typePayments === 3 && <>{t('target.description.pay.three')}</>}
                    </span>
                    </>
                    }
                    {(info.feedbacks.aboutCustomer || info.feedbacks.aboutExecutor) && <h3>{t('target.description.feedbacks')}</h3>}
                    <span className='description-block-text-under'>
                        {info.feedbacks.aboutCustomer ? info.feedbacks.aboutCustomer.map(response => {
                            let rateStart = Number(response.rate)
    
                            let photoStar
                            // eslint-disable-next-line
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
                                    <>
                                    <div className="block-comment">
                                        <div className='block-comment-info'>
                                          <div>
                                            {photoStar}
                                            <span className='ml mr'>{rateStart}</span>
                                          </div>

                                        </div>
                                        <span>
                                          {response.feedback}
                                        </span>
                                    </div>
                                    </>
                                )
                            }) 
                        :
                        ""
                        }
                        {info.feedbacks.aboutExecutor ? info.feedbacks.aboutExecutor.map(response => {
                            let rateStart = Number(response.rate)
    
                            let photoStar
                            // eslint-disable-next-line
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
                                    <>
                                        <div className="block-comment">
                                            <div className='block-comment-info'>
                                              <div>
                                                {photoStar}
                                                <span className='ml mr'>{rateStart}</span>
                                              </div>

                                            </div>
                                            <span>
                                              {response.feedback}
                                            </span>
                                        </div>
                                    </>
                                )
                            }) 
                        :
                        ""
                        }
                    </span>
                </div>
                <div className='butto-mobile-description'>
                    {user.isAuth ?
                        <>
                           {// eslint-disable-next-line
                        (info.status == 2 && (info.executor === -1 || info.customer === -1)) && (
                          <button className='description-button-click-three' onClick={() => {setAcceptOrder(id).then(() => window.location.reload()) }}>
                            {t('target.description.button-click.one')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        (info.customer === -1 && (info.status == 0 || info.status == 2)) && (
                          <button className='description-button-click-three' onClick={() => {setPublicOrder(id).then(() => window.location.reload())}}>
                            {t('target.description.button-click.two')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        (info.customer === -1 && (info.status == 1 || info.status == 0)) && (
                          <Link to={'/target/edit/' + info.orderId} className='description-button-click-two'>
                            {t('target.description.button-click.three')}
                          </Link>
                        )}
                        {// eslint-disable-next-line
                        ((info.customer === -1) || (info.executor === -1)) && (
                            <Link to={'/target/edit/' + info.orderId} className='description-button-click-two'>
                              Мои задания
                            </Link>
                          )}
                        {// eslint-disable-next-line
                        (info.executor === -1 && info.status == 3) && (
                          <button className='description-button-click-three' onClick={() => {setExecutorCompleteOrder(id).then(() => window.location.reload())}}>
                            {t('target.description.button-click.fo')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        (info.customer === -1 && (info.status == 0 || info.status === 1 || info.status == 3)) && (
                          <button className='description-button-click-three' onClick={() => {setCloseOrder(id).then(() => window.location.reload()); }}>
                            {t('target.description.button-click.five')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        ((info.customer === -1 || info.executor === -1) && info.status == 4) && (
                          <Link to={'/target/feedback/' + info.orderId} className='description-button-click-two'>
                            {t('target.description.button-click.six')}
                          </Link>
                        )}
                        
                        {// eslint-disable-next-line
                        info.status == 1 && info.customer != -1 && (
                          <button onClick={() => setModalActiveTwo(true)} className='description-button-click-three'>
                            {t('target.description.button-click.seven')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        ((info.customer === -1 || info.executor === -1) && info.status >= 3 && info.status <= 4) && (
                          <button onClick={() => {setDisputeOrder(id).then(() => window.location.reload())}} className='description-button-click-three'>
                            {t('target.description.button-click.eight')}
                          </button>
                        )}
                        </>
                        :
                        <></>
                    }
                </div>
                
            </div>
            
            <div className="description-block-two">
                <Link to={'/profile/customer/' + info.customer} className='description-block-about'>
                    <span className='description-block-about-text-main'>{t('target.description.client')}</span>
                    <span className='description-block-about-text-under'>
                        <img src={photo5} alt='.' className='mr-5' width={24}/>{info.customerName}
                    </span>
                    {info.customerCountry &&
                        <span className='description-block-about-text-under'>
                            <img src={photo4} alt='.' className='mr-5' width={24}/>{info.customerCountry}
                        </span>
                    }
                    

                    <div className='description-star'>
                        {photoStar}
                        <span className='mr ml description-star-text'>{rateStart ? rateStart : 0}</span>
                        
                        <img src={photo1} alt='.' width={24}/>
                        <span className='ml description-star-text'>{info.customerCountRate ? info.customerCountRate : 0}</span>
                    </div>

                    <span className='description-block-about-text-under'>{formattedDate}</span>

                </Link>
                <div className='butto-description'>
                    {user.isAuth ?
                        <>
                        {// eslint-disable-next-line
                        (info.status == 2 && (info.executor === -1 || info.customer === -1)) && (
                          <button className='description-button-click-three' onClick={() => {setAcceptOrder(id).then(() => window.location.reload()) }}>
                            {t('target.description.button-click.one')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        (info.customer === -1 && (info.status == 0 || info.status == 2)) && (
                          <button className='description-button-click-three' onClick={() => {setPublicOrder(id).then(() => window.location.reload())}}>
                            {t('target.description.button-click.two')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        (info.customer === -1 && (info.status == 1 || info.status == 0)) && (
                          <Link to={'/target/edit/' + info.orderId} className='description-button-click-two'>
                            {t('target.description.button-click.three')}
                          </Link>
                        )}

                        {// eslint-disable-next-line
                        ((info.customer === -1) || (info.executor === -1)) && (
                            <Link to={'/task'} className='description-button-click-two'>
                              Мои задания
                            </Link>
                          )}

                        {// eslint-disable-next-line
                        (info.executor === -1 && info.status == 3) && (
                          <button className='description-button-click-three' onClick={() => {setExecutorCompleteOrder(id).then(() => window.location.reload())}}>
                            {t('target.description.button-click.fo')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        (info.customer === -1 && (info.status == 0 || info.status === 1 || info.status == 3)) && (
                          <button className='description-button-click-three' onClick={() => {setCloseOrder(id).then(() => window.location.reload()); }}>
                            {t('target.description.button-click.five')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        ((info.customer === -1 || info.executor === -1) && info.status == 4) && (
                          <Link to={'/target/feedback/' + info.orderId} className='description-button-click-two'>
                            {t('target.description.button-click.six')}
                          </Link>
                        )}

                        {// eslint-disable-next-line
                        info.status == 1 && info.customer != -1 && (
                          <button onClick={() => setModalActiveTwo(true)} className='description-button-click-three'>
                            {t('target.description.button-click.seven')}
                          </button>
                        )}

                        {// eslint-disable-next-line
                        ((info.customer === -1 || info.executor === -1) && info.status >= 3 && info.status <= 4) && (
                          <button onClick={() => {setDisputeOrder(id).then(() => window.location.reload())}} className='description-button-click-three'>
                            {t('target.description.button-click.eight')}
                          </button>
                        )}
                        </>
                        :
                        <></>
                    }
                </div>
                
            </div>
            
        </div>
        <Login active={modalActive} setActive={setModalActive}/>
        <ResponseToTask active={modalActiveTwo} setActive={setModalActiveTwo} id={id}/>
      </div>
    );
  }
  
  export default Description;