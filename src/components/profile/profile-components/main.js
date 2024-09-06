import star1 from '../../../assets/icon/Star 1.png'
import star2 from '../../../assets/icon/Star 2.png'
import star3 from '../../../assets/icon/Star 3.png'
import photo4 from '../../../assets/icon/Map_Pin.png'
import Pencil from '../../../assets/icon/Edit_Pencil_Line_02.png'
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({userProfile,matchedService}) => {
    const { t } = useTranslation();

    const taskArray = t('profile.profile-user.task-array', { returnObjects: true })
    let rateStart = userProfile && userProfile.response.executorProfile.rate && (userProfile.response.executorProfile.rate || userProfile.response.customerProfile.rate).toFixed(1);

    let photoStar;
    // eslint-disable-next-line
    if (rateStart == 0) {
        photoStar =
        <>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 0.5 || rateStart == 0.6 || rateStart == 0.7 || rateStart == 0.8 || rateStart == 0.9) {
        photoStar =
        <>
            <img src={star3} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 1.0 || rateStart == 1.1 || rateStart == 1.2 || rateStart == 1.3 || rateStart == 1.4) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 1.5 || rateStart == 1.6 || rateStart == 1.7 || rateStart == 1.8 || rateStart == 1.9) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star3} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 2.0 || rateStart == 2.1 || rateStart == 2.2 || rateStart == 2.3 || rateStart == 2.4) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 2.5 || rateStart == 2.6 || rateStart == 2.7 || rateStart == 2.8 || rateStart == 2.9) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star3} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 3.0 || rateStart == 3.1 || rateStart == 3.2 || rateStart == 3.3 || rateStart == 3.4) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 3.5 || rateStart == 3.6 || rateStart == 3.7 || rateStart == 3.8 || rateStart == 3.9) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star3} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 4.0 || rateStart == 4.1 || rateStart == 4.2 || rateStart == 4.3 || rateStart == 4.4) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star2} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 4.5 || rateStart == 4.6 || rateStart == 4.7 || rateStart == 4.8 || rateStart == 4.9) {
        photoStar =
        <>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star1} className='ml-3' alt='.' width={16}/>
            <img src={star3} className='ml-3' alt='.' width={16}/>
        </>;
        // eslint-disable-next-line
    } else if (rateStart == 5.0) {
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

        const birthDate = userProfile.response.profile.birthday;
        const age = birthDate ? calculateAge(birthDate) : null;
        const ageString = age !== null ? getAgeString(age) : null;

    function getDeclension(number, forms) {
        const cases = [2, 0, 1, 1, 1, 2];
        return forms[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]];
    }
    return (
        <>
        <div className="profile-main">
            
            <div className="block-profile-main">
                <div className='profile-avatar'>
                    <img 
                        src={`http://194.67.113.55/` + userProfile.response.profile.avatar} 
                        alt='.' 
                        className='profile-img'
                    />
                    {userProfile.response.profile.online === false ? 
                        <span className='profile-user-online'><li>{t('profile.profile-user.offline')}</li></span>
                        :
                        <span className='profile-user-online'><li>{t('profile.profile-user.online')}</li></span>
                    }
                </div>
                <div className='block-profile-info'>
                    <div className='info-main'>
                        <div className='info-name'>
                            <span className='mr'>{userProfile.response.profile.name}</span>
                            <span>{userProfile.response.profile.surname}</span>
                        </div>
                        <span className='info-user'>{matchedService && matchedService.name}</span>
                        {userProfile.response.profile.country &&
                                <span className='map ml-minus'>
                                    <img src={photo4} alt='.' width={24}/>
                                    {userProfile.response.profile.country}, {userProfile.response.profile.city}
                                </span>
                            }
                        <span className='info-user mt'>{(age || age === 0) ? `${ageString}` : ''}
                           
                        </span>
                        {userProfile.response.profile.customerStatus === 0 || userProfile.response.profile.executerStatus === 0 ?
                            <></>
                            :
                            <> 
                             <div className='info-user'>
                               {photoStar}
                                <span className='ml mr'>{rateStart}</span>
                                <span className='reviews'>({userProfile.response.executorProfile.countRate} {t('profile.profile-user.rate')})</span>
                            </div>
                           <span className='info-user'>
                            {t('profile.profile-user.done')}: {userProfile.response.executorProfile.countRate} 
                            {t('profile.profile-user.task')}{getDeclension(userProfile.response.executorProfile.countRate, taskArray)}
                           </span>
                            </>
                        }
                       
                    </div>
                    <div className='block-profile-info-main'>
                        <Link to={'/profile/edit-profile'} className='link-profile'>{t('profile.profile-user.edit')}</Link>
                        <Link to={'/profile/edit-profile'} className='link-profile-mobile'><img src={Pencil} alt='.' width={24}/></Link>
                        
                    </div>
                    <div className='text-main-about'>
                        <span>{userProfile.response.executorProfile.about}</span>
                    </div>
                </div>
            </div>    
        </div>
        </>
    );
  }
export default Main;