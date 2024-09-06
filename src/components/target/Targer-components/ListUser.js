import photo1 from '../../../assets/icon/Chat_Dots.png'
import { offerOrder, setOrderExecutor } from '../../../http/orderApi'
import star1 from '../../../assets/icon/Star 1.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 3.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ListUser = ({value, setValue, options, descriptionInfo, listUser}) => {
    const { t } = useTranslation();
    let list = descriptionInfo.order[0]

    return (
      <div className="container">
        <div className="list-filter">
            <div className='list-task-user'>
                <span className="list-task-text-main-two">{t('edit.listUser.title')}: {list.reactionsOrder && list.reactionsOrder === undefined ? <> </> :  list.reactionsOrder && list.reactionsOrder.length}</span>
            </div>
            <div className="list-click">
                {list.reactionsOrder && list.reactionsOrder.map((response, index) => {
                        let rateStart = Number(response.executorRate.toFixed(1))
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
                        const calculateAge = (dateString) => {
                              const today = new Date();
                              const birthDate = new Date(dateString);
                              const yearDifference = today.getFullYear() - birthDate.getFullYear();
                              const monthDifference = today.getMonth() - birthDate.getMonth();
                              const dayDifference = today.getDate() - birthDate.getDate();
                              if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
                                return yearDifference - 1;
                              } else {
                                return yearDifference;
                              }
                            };
                            const getAgeString = (age) => {
                              if (age % 10 === 1 && age !== 11) {
                                return `${age} ${t('specialists.list-spec.years.one')}`;
                              } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
                                return `${age} ${t('specialists.list-spec.years.two')}`;
                              } else {
                                return `${age} ${t('specialists.list-spec.years.three')}`;
                              }
                            };
                        
                            const birthDate = response.executorBirthday;
                            const age = birthDate ? calculateAge(birthDate) : null;
                            const ageString = age !== null ? getAgeString(age) : null;
                        
                        return (
                            <div className="block-list-click">
                            <Link className='info-block-list' to={'/profile/executor/' + response.profileId}>
                                <div className='block-img-list-click'>
                                    <img src={`http://194.67.113.55/` + response.executorAvatar} alt='.' className='img-list-click'/>
                                </div>
                                <div className='list-user-info'>
                                    <h2>{response.executorName} {response.executorSurname}</h2>
                                    <span className='list-spec-block-main-under'>{(age || age === 0) ? `${ageString}` : ''}{(response.country && (age || age === 0)) && ','} {response.executorCountry}</span>
                                    <div className='list-task-ads-star mb-star'>
                                        {photoStar}
                                        <span className='mr ml ball-span'>{rateStart}</span>
                                        <img src={photo1} alt='.' width={24}/>
                                        <span className='ml ball-span'>{response.executorCountRate}</span>
                                    </div>
                                    <h3 className='price-list-user'>{t('edit.listUser.text-one')}: {response.executorCost}₸</h3>
                                </div>
                            </Link>
                            <span className='about-list-user'>
                                {response.executorText}
                            </span>
                                <div className='block-button-list-user'>
                                    <button className='button-list-user' onClick={() => setOrderExecutor(descriptionInfo.order[0].orderId, response.profileId).then(() => {window.location.reload()})}>{t('edit.listUser.button-one')}</button>
                                    <button className='button-list-user-two' onClick={() => {
                                        offerOrder(descriptionInfo.order[0].orderId, response.profileId)
                                        .then(() => {window.location.replace('/chat')})
                                        }}>
                                        {t('edit.listUser.button-two')}
                                    </button>
                                </div>
                        </div>
                        )
                        }
                    )
                }
                
            </div>
        </div>
      </div>
    );
}
export default ListUser;